import wtforms as wt

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