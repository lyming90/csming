import flask as fl
import functools as ft
import re
import passlib.hash as hs
from threading import Thread
from csming import forms
from csming import helper
from csming import app, photos
from csming import mysql, mail

'''
Version 2
'''
@app.route('/v2')
def home_v2():
    static_dic = helper.getAllStatic()
    return fl.render_template('v2.html', static_dic = static_dic)

'''
Version 1
'''
@app.route('/v1')
def home_v1():
    return fl.render_template('v1.html')

'''
Version 3
'''
@app.route('/v3')
def home_v3():
    static_dic = helper.getAllStatic()
    return fl.render_template('v3.html', static_dic = static_dic)

'''
Version 4
'''
@app.route('/')
def home_v4():
    static_dic = helper.getAllStatic()
    return fl.render_template('v4.html', static_dic = static_dic)

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
    article = helper.getArticle(id)
    render_article = helper.render_article(article)

    form = forms.EditArticle(fl.request.form)

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
    article = helper.getArticleByAlias(alias)

    render_article = helper.render_article(article)

    if render_article['hidden']:
        # fl.abort(404)
        return fl.render_template('archive/article.html', article=render_article)
    else:
        return fl.render_template('archive/article.html', article=render_article)

'''
This method routes to page for previewing individual article.
Require logged in.
'''
@app.route('/archive/panel/view/<string:id>')
@is_logged_in
def view(id):
    article = helper.getArticle(id)

    render_article = helper.render_article(article)
    render_article['title'] = render_article['title']

    return fl.render_template('archive/article.html', article=render_article)

'''
This method edits preview for an article
'''
@app.route('/archive/panel/edit_preview/<string:id>', methods=['GET', 'POST'])
@is_logged_in
def edit_preview(id):
    article = helper.getArticle(id)
    render_article = helper.render_article(article)

    form = forms.EditStaticItem(fl.request.form)

    if fl.request.method == 'POST' and form.validate():  # method is POST
        preview = form.body.data
        trimmed = helper.trimPreview(preview)
        cursor = mysql.get_db().cursor()
        if cursor.execute("select * from preview where id = %s", id) != 0:
            cursor.execute("update preview set preview=%s where id=%s" , (trimmed, id))
        else:
            cursor.execute("insert into preview values (%s, %s)" , (id, trimmed))            
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('panel'))

    else:  # method is probably GET
        title = render_article['title']
        preview = helper.getPreview(id)
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
    form = forms.EditArticle(fl.request.form)
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
@app.route('/archive/panel/static/<string:static_type>', methods=['GET', 'POST'])
@is_logged_in
def edit_static(static_type):
    static_item = helper.getStaticItem(static_type)
    render_static_item = helper.render_static_item(static_item)

    form = forms.EditStaticItem(fl.request.form)

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
Delete article
'''
@app.route('/archive/panel/delete/<string:id>', methods=['GET'])
@is_logged_in
def delArticle(id):
    try:
        cursor = mysql.get_db().cursor()
        cursor.execute("delete from archive where id=%s" , (id))
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for("panel"))
    except:
        fl.abort(404)


'''
Mathematics for Computer Science Project
create table mcs( id INT AUTO_INCREMENT, index_name varchar(255), content mediumtext, last_update timestamp DEFAULT current_timestamp on update current_timestamp, primary key(id) );
'''
@app.route('/mcs/<string:id>')
def mcs(id):
    mcs = helper.getMCSbyId(id)
    mcs = helper.render_mcs_entry(mcs)
    return fl.render_template('resources/old-school.html', mcs=mcs)

'''
'''
@app.route('/archive/panel/images', methods=['GET', 'POST'])
@is_logged_in
def images():
    if fl.request.method == 'POST' and 'photo' in fl.request.files:
        filename = photos.save(fl.request.files['photo'])
        link     = "www.csming.com/static/upload/" + filename
        httplink = "https://" + link
        return fl.render_template('archive/explorer.html', header="""
        Successful!
        <br>
        Please copy the link
        <br>
        <a target="_blank" style="font-size: 50%" href=
        """
        + httplink + ">" + link + "</a>")

    print("GET")
    return fl.render_template('archive/explorer.html', header="So, upload an image here (max 1MB).")

@app.errorhandler(404)
def page_not_found(e):
    return """
    <p style="text-align: center; margin-top: 40vh">
        Page not found. Perhaps you typed in a wrong address?
        <br><br>
        Maybe?
    </p>
    """, 404

@app.errorhandler(500)
def fake_page_not_found(e):
    return """
    <div>
    <p style="text-align: center; margin-top: 40vh">
        Something went wrong :(
        <br><br>
        I am so sorry :(
    </p>
    </div>
    """, 500

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
        fl.abort(500)