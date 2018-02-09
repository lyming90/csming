import flask as fl
import flaskext.mysql as sql
import wtforms as wt

app = fl.Flask(__name__)

# activate debugger
# app.run(debug=True)

# MySQL config
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'csming'
# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = sql.MySQL(app)

print("Debug here")


def getArticle(id):
    cursor = mysql.get_db().cursor()

    result = cursor.execute("SELECT * FROM entry WHERE id = %s", [id])

    article = cursor.fetchone()

    print(article)

    return article

@app.route('/')
def hello_world():
    return fl.render_template('index.html')

# article
@app.route('/article<string:id>')
def article(id):
    print("id is", id)
    article = getArticle(id)

    render_article = {
        'author': article[1],
        'create_date': article[2].strftime("%d %b, %Y"),  # pretty-print datetime
        'title': article[3],
        'body': article[4]
    }

    return fl.render_template('blog/article.html', article=render_article)

class NewPost(wt.Form):
    author = wt.StringField("author", [wt.validators.Length(min=1)])
    title = wt.StringField("title", [wt.validators.Length(min=1)])
    body = wt.TextAreaField("content", [wt.validators.Length(min=1)])

# new article
@app.route('/new-article', methods=['GET', 'POST'])
def new_article():
    form = NewPost(fl.request.form)
    # if request.method == 'POST' and form.validate():
    return fl.render_template('blog/new-article.html', form=form)