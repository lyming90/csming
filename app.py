import flask as fl
import functools as ft
import flaskext.mysql as sql
import wtforms as wt
import passlib.hash as hs
import helper # our helper module
import json

app = fl.Flask(__name__)

# Load config from JSON (config.json)
with open("config.json", "r") as f:
    config_data = json.load(f)
    print(config_data)

# MySQL config
app.config['MYSQL_DATABASE_HOST']       = config_data['mysql']['MYSQL_DATABASE_HOST']  # database_host
app.config['MYSQL_DATABASE_USER']       = config_data['mysql']['MYSQL_DATABASE_USER']  # database_user
app.config['MYSQL_DATABASE_PASSWORD']   = config_data['mysql']['MYSQL_DATABASE_PASSWORD']  # database_password
app.config['MYSQL_DATABASE_DB']         = config_data['mysql']['MYSQL_DATABASE_DB']  # database to use

# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  # seems useless?
mysql = sql.MySQL(app)

'''
Form for posting new article
'''
class NewArticle(wt.Form):
    author = wt.StringField('author', [wt.validators.Length(min=1)])
    title = wt.StringField('title', [wt.validators.Length(min=1)])
    body = wt.TextAreaField('content', [wt.validators.Length(min=1)])

'''
Form for editing existing article
'''
class EditArticle(wt.Form):
    author = wt.StringField('author', [wt.validators.Length(min=1)])
    title = wt.StringField('title', [wt.validators.Length(min=1)])
    body = wt.TextAreaField('content', [wt.validators.Length(min=1)])

'''
Form for editing static content
'''
class EditStaticItem(wt.Form):
    static_type = wt.StringField('static_type', [wt.validators.Length(min=1)])
    body = wt.TextAreaField('content', [wt.validators.Length(min=1)])

'''
This method returns all articles from archive.
'''
def getArticle(id):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM archive WHERE id = %s", [id])  # only one will be returned (if > 1, serious bug!!)
    article = cursor.fetchone()
    cursor.close()

    return article

def getStaticItem(static_type):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM static WHERE static_type = %s", [static_type]) # only one will be returned (if > 1, serious bug!!)
    static_item = cursor.fetchone()
    cursor.close()

    return static_item

'''
Main page, my profile page!
'''
@app.route('/')
def home():
    # Get static_dic
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM static")  # result gives # of query results
    static = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)

    static_list = list()
    for static_item in static:
        render_static = helper.render_static_item(static_item)
        static_list.append(render_static)
        # print(static_item)  # DEBUG
    cursor.close()

    static_dic = helper.classify_static(static_list)

    return fl.render_template('index.html', static_dic = static_dic)

'''
This method routes to the archive page, in which getArticle() is invoked!
'''
@app.route('/archive')
def archive():
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

        cursor = mysql.get_db().cursor()
        cursor.execute("update archive set author=%s, title=%s, body=%s where id=%s" , (author, title, body, id))
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    else:  # method is probably GET
        # Fill form with existing content
        form.author.data = render_article['author']
        form.title.data = render_article['title']
        form.body.data = render_article['body']

        return fl.render_template('archive/edit_article.html', form=form)

'''
This method routes to page for individual article!
'''
@app.route('/archive/article/<string:id>')
def article(id):    
    article = getArticle(id)

    render_article = helper.render_article(article)

    return fl.render_template('archive/article.html', article=render_article)

'''
This method routes to page for posting a new article
MUST LOGGED IN!
MUST NOT BE SEEN BY COMMON GUESTS.
'''
@app.route('/archive/panel/new_article', methods=['GET', 'POST'])
@is_logged_in
def new_article():
    form = NewArticle(fl.request.form)
    # if request.method == 'POST' and form.validate(), do real stuff:
    if fl.request.method == 'POST' and form.validate():
        author = form.author.data
        title = form.title.data
        body = form.body.data

        cursor = mysql.get_db().cursor()
        cursor.execute("insert into archive values(NULL, %s, NULL, NULL, %s, %s)", (author, title, body))
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    return fl.render_template('archive/new_article.html', form=form)

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
Netflix subscription, for my use
'''
@app.route('/netflix', methods=['GET', 'POST'])
def netflix():
    return fl.render_template('resources/netflix.html')

'''
For Debug purpose ONLY!
'''
@app.route('/temp')
def temp_article():
    return fl.render_template('archive/temp_article.html')

if __name__ == '__main__':
    app.secret_key='123456'  # secret key
    app.run(debug=True)  # set True ONLY WHEN DEBUG