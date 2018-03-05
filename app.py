import flask as fl
import functools as ft
import flaskext.mysql as sql
import wtforms as wt
import passlib.hash as hs
import helper # our helper module

app = fl.Flask(__name__)

# activate debugger
# app.run(debug=True)

# MySQL config
app.config['MYSQL_DATABASE_HOST'] = 'localhost'  # database_host
app.config['MYSQL_DATABASE_USER'] = 'root'  # database_user
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'  # database_password
app.config['MYSQL_DATABASE_DB'] = 'csming'  # database
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  # seems useless?
mysql = sql.MySQL(app)

'''
This method returns all articles from archive.
'''
def getArticle(id):
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM archive WHERE id = %s", [id])
    article = cursor.fetchone()
    cursor.close()

    return article

'''
Main page, my profile page!
'''
@app.route('/')
def home():
    return fl.render_template('index.html')

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
        print(render_article)  # DEBUG
    
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
    return fl.redirect(fl.url_for("login"))

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
'''
@app.route('/archive/panel')
@is_logged_in
def panel():
    return fl.render_template("archive/panel.html")

'''
This method routes to page for individual article!
'''
@app.route('/archive/article/<string:id>')
def article(id):    
    article = getArticle(id)

    render_article = helper.render_article(article)

    return fl.render_template('archive/article.html', article=render_article)

class NewPost(wt.Form):
    author = wt.StringField('author', [wt.validators.Length(min=1)])
    title = wt.StringField('title', [wt.validators.Length(min=1)])
    body = wt.TextAreaField('content', [wt.validators.Length(min=1)])

'''
This method routes to page for posting a new article
MUST LOGGED IN!
MUST NOT BE SEEN BY COMMON GUESTS.
'''
@app.route('/archive/new_article', methods=['GET', 'POST'])
@is_logged_in
def new_article():
    form = NewPost(fl.request.form)
    # if request.method == 'POST' and form.validate(), do real stuff:
    if fl.request.method == 'POST' and form.validate():
        author = form.author.data
        title = form.title.data
        body = form.body.data

        cursor = mysql.get_db().cursor()
        cursor.execute("insert into archive values(NULL, %s, NULL, NULL, %s, %s)", (author, title, body))
        mysql.get_db().commit()
        cursor.close()

        return fl.redirect(fl.url_for('archive'))

    return fl.render_template('archive/new_article.html', form=form)

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