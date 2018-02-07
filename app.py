import flask as fl
app = fl.Flask(__name__)

@app.route('/')
def hello_world():
    return fl.render_template('index.html')