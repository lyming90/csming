# -*- coding: utf-8 -*-

class BasicConfig(object):
    Project     = "csming"
    debug       = False
    
    # Secret key
    secret_key = "I\x088o\x1a\x9f\xa2\x1bu\xf2\x95\xe0h\x9b\xd7\x9fG\xf4\x888#.h\xf4$l\x81\xf2\x11\xb2\xbc\x8b\xfc\x08_\xc5\x19\x98\xf2\xed\x98\x9fxm\\D\x8b\x16[\x1c-h\x9d<r\xc1\x94\xaf:|\x8e\x84P\xbb\xf1\x92\xcf\x1c\xc5\xfa\xc5\xbe\x1b]m'\xf2\x7f\xc6\x9di\x0eW3\\\x00\xfdBo\xf2\xd3,\xb5;\x84&j\xb5J):2\xfa\xbfM\xa6\x99G\t\x1ce.z\xba\xd9\x8c\x92\xa7\xaf\xd32\x14\x8a\x18\xa5\xc6\xf8\xfc"  # secret key
    

    # MySQL config
    MYSQL_DATABASE_HOST       = 'localhost'  # database_host
    MYSQL_DATABASE_USER       = 'root'  # database_user
    MYSQL_DATABASE_PASSWORD   = 'root'  # database_password
    MYSQL_DATABASE_DB         = 'csming'  # database to use

    # Flask-Uploads
    UPLOADED_PHOTOS_DEST    = 'csming/static/upload'

