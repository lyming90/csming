import flask as fl
import flaskext.mysql as sql
import flask_mail as fmail
from flask_uploads import UploadSet, configure_uploads, IMAGES
from csming import config as cfg

# init app
app = fl.Flask(__name__)
app.secret_key = cfg.BasicConfig.secret_key

# init flask-uploads
photos = UploadSet('photos', IMAGES)

# config
app.config.from_object(cfg.BasicConfig)
configure_uploads(app, photos)

# init mail
mail = fmail.Mail(app)
# init MySQL
mysql = sql.MySQL(app)

import csming.views