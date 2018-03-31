import flask as fl
import functools as ft
import flaskext.mysql as sql
import flask_mail as fmail
import wtforms as wt
import passlib.hash as hs
import re
import json
from threading import Thread
import text
import helper # our helper module

app = fl.Flask(__name__)

# Load config from JSON (config.json)
with open("config.json", "r") as f:
    config_data = json.load(f)

# MySQL config
app.config['MYSQL_DATABASE_HOST']       = config_data['mysql'][0]['MYSQL_DATABASE_HOST']  # database_host
app.config['MYSQL_DATABASE_USER']       = config_data['mysql'][0]['MYSQL_DATABASE_USER']  # database_user
app.config['MYSQL_DATABASE_PASSWORD']   = config_data['mysql'][0]['MYSQL_DATABASE_PASSWORD']  # database_password
app.config['MYSQL_DATABASE_DB']         = config_data['mysql'][0]['MYSQL_DATABASE_DB']  # database to use

# Mail config
app.config['MAIL_SERVER']           = config_data['mail'][0]['MAIL_SERVER']
app.config['MAIL_PORT']             = config_data['mail'][0]['MAIL_PORT']  
app.config['MAIL_USE_SSL']          = config_data['mail'][0]['MAIL_USE_SSL']
app.config['MAIL_DEFAULT_SENDER']   = config_data['mail'][0]['MAIL_DEFAULT_SENDER']
app.config['MAIL_USERNAME']         = config_data['mail'][0]['MAIL_USERNAME']
app.config['MAIL_PASSWORD']         = config_data['mail'][0]['MAIL_PASSWORD']

# Secret key
app.secret_key                      = config_data['secret-key'][0]  # secret key

# Init mail
mail = fmail.Mail(app)
# Init MySQL
mysql = sql.MySQL(app)

'''
Form for editing existing article / posting new article
'''
class EditArticle(wt.Form):
    author = wt.StringField('Author', [wt.validators.Length(min=1)])
    title = wt.StringField('Title', [wt.validators.Length(min=1)])
    alias = wt.StringField('Alias', [wt.validators.length(min=0)])
    body = wt.TextAreaField('Content', [wt.validators.Length(min=1)])
    hidden = wt.BooleanField()

'''
Form for editing static content
'''
class EditStaticItem(wt.Form):
    static_type = wt.StringField('Static type', [wt.validators.Length(min=1)])
    body = wt.TextAreaField('Content', [wt.validators.Length(min=1)])

'''
Form for submitting netflix subscription
'''
class NetflixSubscribe(wt.Form):
    first_name = wt.StringField('First name', [wt.validators.Length(min=1)])
    last_name = wt.StringField('Last name', [wt.validators.Length(min=1)])    
    email = wt.StringField('Email address', [wt.validators.Length(min=1)])

'''
This method returns all articles from archive.
'''
def getArticle(id):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM archive WHERE id = %s", [id])  # only one will be returned (if > 1, serious bug!!)
    article = cursor.fetchone()
    cursor.close()

    return article

'''
This method returns all articles from archive.
'''
def getArticleByAlias(alias):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM archive WHERE alias = %s", [alias])  # only one will be returned (if > 1, serious bug!!)
    article = cursor.fetchone()
    cursor.close()

    return article

'''
Get static item.
'''
def getStaticItem(static_type):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM static WHERE static_type = %s", [static_type]) # only one will be returned (if > 1, serious bug!!)
    static_item = cursor.fetchone()
    cursor.close()

    return static_item

'''
Get preview.
'''
def getPreview(id):
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT preview FROM preview where id=%s", id)  # get preview
    preview = cursor.fetchone()
    if not preview is None:
        preview = preview[0]
    else:
        preview = ""
    cursor.close()

    return preview

'''
Main page, my profile page!
'''
# @app.route('/')
# def home():
#     # Get static_dic
#     cursor = mysql.get_db().cursor()
#     result = cursor.execute("SELECT * FROM static")  # result gives # of query results
#     static = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)

#     static_list = list()
#     for static_item in static:
#         render_static = helper.render_static_item(static_item)
#         static_list.append(render_static)
#         # print(static_item)  # DEBUG
#     cursor.close()

#     static_dic = helper.classify_static(static_list)

#     return fl.render_template('index.html', static_dic = static_dic)

@app.route('/')
def home_v2():
    return fl.render_template('v2.html')

'''
This method routes to the archive page, in which getArticle() is invoked!
'''
@app.route('/archive')
def archive():
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM archive")  # result gives # of query results
    articles = cursor.fetchall()  # articles gives a tuple of all results (explicit information)

    article_list = list()  # make a list of articles, easy to retrieve
    for article in articles:
        if article[7] == 0:  # only display articles that are not hidden
            render_article = helper.render_article(article)
            # preview = getPreview(render_article['id'])  # get preview by id
            # render_article['preview'] = preview
            article_list.append(render_article)
    
    cursor.close()

    return fl.render_template('archive/index.html', articles=article_list)

'''
Login
'''
@app.route("/archive/login", methods=['GET', 'POST'])
def login():
    if fl.request.method == 'POST':
        # get form details
        username = fl.request.form['username']
        password_candidate = fl.request.form['password']

        # create cursor
        cursor = mysql.get_db().cursor()

        # get user by username
        result = cursor.execute("SELECT * FROM users WHERE username = %s", [username])

        if result > 0:
            # get stored hash
            data = cursor.fetchone()
            password = data[3]

            # authenticate
            if hs.sha256_crypt.verify(password_candidate, password):
                fl.session['logged_in'] = True
                fl.session['username'] = username

                fl.flash("You're now logged in.", "success")
                return fl.redirect(fl.url_for('panel'))
            else:
                fl.flash("Failure", "error")
    
    return fl.render_template("archive/login.html")

'''
Logout
'''
@app.route("/archive/logout")
def logout():
    fl.session.clear()
    fl.flash("You're now logged out", "success")
    return fl.redirect(fl.url_for("archive"))

'''
Check if user logged in
If not, re-direct to login page
'''
def is_logged_in(f):
    @ft.wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in fl.session:
            return f(*args, **kwargs)
        else:
            fl.flash('Access denied.', 'danger')
            return fl.redirect(fl.url_for('login'))
    return wrap

'''
Panel, for administrator!
Code is identical to archive()
'''
@app.route('/archive/panel')
@is_logged_in
def panel():
    ''' get the list of article '''
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM archive")  # result gives # of query results
    articles = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)
    # print("result", result)  # DEBUG
    # print("articles", articles)  # DEBUG
    # for article in articles:  # DEBUG
    #     print(article)

    article_list = list()  # make a list of articles, easy to retrieve
    for article in articles:
        render_article = helper.render_article(article)
        article_list.append(render_article)
        # print(render_article)  # DEBUG
    
    ''' Get the list of static items'''
    result = cursor.execute("SELECT * FROM static")  # result gives # of query results
    static = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)

    static_list = list()
    for static_item in static:
        render_static = helper.render_static_item(static_item)
        static_list.append(render_static)
        # print(static_item)  # DEBUG

    cursor.close()

    return fl.render_template("archive/panel.html", articles=article_list, static=static_list)

'''
Experimental Panel, for administrator!
Code is identical to archive()
'''
@app.route('/archive/lab')
@is_logged_in
def lab():
    ''' get the list of article '''
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM archive")  # result gives # of query results
    articles = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)
    # print("result", result)  # DEBUG
    # print("articles", articles)  # DEBUG
    # for article in articles:  # DEBUG
    #     print(article)

    article_list = list()  # make a list of articles, easy to retrieve
    for article in articles:
        render_article = helper.render_article(article)
        article_list.append(render_article)
        # print(render_article)  # DEBUG
    
    ''' Get the list of static items'''
    result = cursor.execute("SELECT * FROM static")  # result gives # of query results
    static = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)

    static_list = list()
    for static_item in static:
        render_static = helper.render_static_item(static_item)
        static_list.append(render_static)
        # print(static_item)  # DEBUG

    cursor.close()

    return fl.render_template("archive/lab.html", articles=article_list, static=static_list)

'''
Edit article!
'''
@app.route('/archive/panel/article/<string:id>', methods=['GET', 'POST'])
@is_logged_in
def edit_article(id):
    article = getArticle(id)
    render_article = helper.render_article(article)

    form = EditArticle(fl.request.form)

    if fl.request.method == 'POST' and form.validate():  # method is POST
        author = form.author.data
        title = form.title.data
        body = form.body.data
        alias = form.alias.data
        if len(alias) == 0:
            alias = helper.title2alias(title)
        hidden = form.hidden.data

        cursor = mysql.get_db().cursor()
        _no_of_alias    = cursor.execute("select * from archive where alias=%s", (alias))
        _id             = cursor.fetchone()
        while _no_of_alias > 0 and _id == id:
            alias = alias + "-"
        if hidden:
            cursor.execute("update archive set author=%s, title=%s, alias=%s, body=%s, hidden=1 where id=%s" , (author, title, alias, body, id))
        else:
            cursor.execute("update archive set author=%s, title=%s, alias=%s, body=%s, hidden=0 where id=%s" , (author, title, alias, body, id))            
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    else:  # method is probably GET
        # Fill form with existing content
        form.author.data = render_article['author']
        form.title.data = render_article['title']
        form.body.data = helper.pprint_html(render_article['body'])
        form.alias.data = render_article['alias']
        form.hidden.data = render_article['hidden']


        return fl.render_template('archive/edit_article.html', form=form, heading="Edit article")

'''
This method routes to page for individual article!
'''
@app.route('/archive/<string:alias>')
def article(alias):    
    article = getArticleByAlias(alias)

    render_article = helper.render_article(article)

    if render_article['hidden']:
        fl.abort(404)
    else:
        return fl.render_template('archive/article.html', article=render_article)

'''
This method routes to page for previewing individual article.
Require logged in.
'''
@app.route('/archive/panel/view/<string:id>')
@is_logged_in
def view(id):
    article = getArticle(id)

    render_article = helper.render_article(article)
    render_article['title'] = render_article['title']

    return fl.render_template('archive/article.html', article=render_article)

'''
This method edits preview for an article
'''
@app.route('/archive/panel/edit_preview/<string:id>', methods=['GET', 'POST'])
@is_logged_in
def edit_preview(id):
    article = getArticle(id)
    render_article = helper.render_article(article)

    form = EditStaticItem(fl.request.form)

    if fl.request.method == 'POST' and form.validate():  # method is POST
        preview = form.body.data
        cursor = mysql.get_db().cursor()
        if cursor.execute("select * from preview where id = %s", id) != 0:
            cursor.execute("update preview set preview=%s where id=%s" , (preview, id))
        else:
            cursor.execute("insert into preview values (%s, %s)" , (id, preview))            
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    else:  # method is probably GET
        title = render_article['title']
        preview = getPreview(id)
        # Fill form with existing content
        form.static_type.data = title
        form.body.data = preview


        return fl.render_template('archive/edit_static.html', form=form, heading="Edit preview")

'''
This method routes to page for posting a new article
MUST LOGGED IN!
MUST NOT BE SEEN BY COMMON GUESTS.
'''
@app.route('/archive/panel/new_article', methods=['GET', 'POST'])
@is_logged_in
def new_article():
    form = EditArticle(fl.request.form)
    # if request.method == 'POST' and form.validate(), do real stuff:
    if fl.request.method == 'POST' and form.validate():
        author = form.author.data
        title = form.title.data
        alias = form.alias.data
        if len(alias) == 0:
            alias = helper.title2alias(title)
        body = form.body.data
        hidden = form.hidden.data

        cursor = mysql.get_db().cursor()
        _no_of_alias    = cursor.execute("select * from archive where alias=%s", (alias))
        _id             = cursor.fetchone()
        while _no_of_alias > 0 and _id == id:
            alias = alias + "-"
        if hidden:
            cursor.execute("insert into archive values(NULL, %s, NULL, NULL, %s, %s, %s, 1)", (author, title, alias, body))
        else:
            cursor.execute("insert into archive values(NULL, %s, NULL, NULL, %s, %s, %s, 0)", (author, title, alias, body))   
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    return fl.render_template('archive/edit_article.html', form=form, heading="New article")

'''
Edit static contents! (resume, etc...)
'''
@app.route('/archive/panel/<string:static_type>', methods=['GET', 'POST'])
@is_logged_in
def edit_static(static_type):
    static_item = getStaticItem(static_type)
    render_static_item = helper.render_static_item(static_item)

    form = EditStaticItem(fl.request.form)

    if fl.request.method == 'POST' and form.validate():  # method is POST
        static_type = form.static_type.data
        body = form.body.data

        cursor = mysql.get_db().cursor()
        cursor.execute("update static set static_type=%s, body=%s where static_type=%s" , (static_type, body, static_type))
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    else:  # method is probably GET
        # Fill form with existing content
        form.static_type.data = render_static_item['static_type']
        form.body.data = render_static_item['body']

        return fl.render_template('archive/edit_static.html', form=form)

'''
Backup SQL (Advanced feature, only open to person with highest ownership)
'''
@app.route('/archive/panel/getSQL', methods=['POST'])
@is_logged_in
def getSQL():
    try:
        filename = helper.prepareSQL(app.config['MYSQL_DATABASE_USER'], app.config['MYSQL_DATABASE_PASSWORD'])
        return fl.send_file("sql/"+filename, as_attachment=True)
    except:
        fl.abort(404)

# '''
# Send approval Email
# '''
# def send_approval_Email(first_name, last_name, email):
#     msg = fmail.Message(
#         subject="Friend Plan Subscription",
#         html = text.approval_Email(first_name, last_name),
#         recipients=[email],
#         bcc=["lyming90@gmail.com"],
#         reply_to="lyming90@gmail.com"
#     )

#     # mail.send(msg) async
#     thr = Thread(target=_send_async_email, args=[msg])
#     thr.start()
#     return thr

# '''
# Send Email asynchronously, private method
# '''
# def _send_async_email(msg):
#     with app.app_context():
#         mail.send(msg)

# '''
# Netflix subscription, for my use
# '''
# @app.route('/netflix', methods=['GET', 'POST'])
# def netflix():
#     form = NetflixSubscribe(fl.request.form)
    
#     if fl.request.method == 'POST':
#         first_name = form.first_name.data
#         last_name = form.last_name.data
#         email = form.email.data

#         if first_name is "" or last_name is "":
#             return fl.render_template('resources/netflix.html', form=form, message='<p style="color:red">Name cannot be none.</p>')

#         if not re.match(".+@.+\..+", email):
#             return fl.render_template('resources/netflix.html', form=form, message='<p style="color:red">Not a valid Email address.</p>')

#         cursor = mysql.get_db().cursor()
#         if cursor.execute("SELECT * FROM netflix WHERE email = %s", [email]) > 0:
#             cursor.close()
#             return fl.render_template('resources/netflix.html', form=form, message='<p style="color:red">This is an existing subscriber.</p>')
   
#         # send Email
#         send_approval_Email(first_name, last_name, email)
#         return fl.render_template('resources/netflix.html', form=form, message='<p style="color:blue">Thank you. Please check your mailbox for the confirmation Email.</p>', display="display: none")
        
#         # create database entry
#         cursor = mysql.get_db().cursor()
#         cursor.execute("insert into netflix values(NULL, %s, %s, %s, 1)", (first_name, last_name, email))
#         mysql.get_db().commit()
#         cursor.close()
    
#     else:
#         return fl.render_template('resources/netflix.html', form=form, message='<p>Please fill in the following form to subscribe to our Friend Plan.</p>')

# '''
# For Debug purpose ONLY!
# '''
# @app.route('/temp')
# def temp_article():
#     return fl.render_template('archive/temp_article.html')

@app.errorhandler(404)
def page_not_found(e):
    return "Page not found. Seek your fortune elsewhere.", 404

@app.errorhandler(500)
def fake_page_not_found(e):
    return "Page not found. Seek your fortune elsewhere.", 404

if __name__ == '__main__':
    print(">>>>>>>>>> For debug only. If you see this in production, you're doing it wrong. <<<<<<<<<<")
    # Load config from JSON (config.json)
    app.secret_key = config_data['secret-key'][0]  # secret key
    app.run(debug=True)  # set True ONLY WHEN DEBUG