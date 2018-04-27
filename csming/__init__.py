import flask as fl
import flaskext.mysql as sql
import flask_mail as fmail
from csming import config as cfg

# init app
app = fl.Flask(__name__)

# import config
app.config.from_object(cfg.BasicConfig)

# Init mail
mail = fmail.Mail(app)
# Init MySQL
mysql = sql.MySQL(app)

import csming.views