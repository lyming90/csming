import os
import datetime
from csming import mysql
from bs4 import BeautifulSoup as bs

''' 
This method returns all static items as a dict
'''
def getAllStatic():
    # Get static_dic
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM static")  # result gives # of query results
    static = cursor.fetchall()  # articles gives a tuple of all results (explicit informaiton)

    static_list = list()
    for static_item in static:
        render_static = render_static_item(static_item)
        static_list.append(render_static)
    cursor.close()

    return classify_static(static_list)

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
Get MCS entry
'''
def getMCSbyId(id):
    cursor = mysql.get_db().cursor()
    result = cursor.execute("SELECT * FROM mcs where id=%s", id)  # get preview
    mcs_entry = cursor.fetchone()
    cursor.close()

    return mcs_entry

def render_article(article):
    result = {
        'id': article[0],
        'author': article[1],
        'create_date': article[2].strftime("%b %d, %Y"),  # pretty-print datetime
        'last_update': article[3].strftime("%b %d, %Y"),  # pretty-print datetime
        'title': article[4],
        'alias': article[5],
        'body': article[6],
        'hidden': article[7],
        'preview' : ""
    }

    if result['hidden'] == 1:
        result['hidden'] = True
    else:
        result['hidden'] = False

    result['preview'] = "<p>" + bs(getPreview(result['id']), "html.parser").get_text() + " [...]" + "</p>"
    
    return result

def render_static_item(static_item):
    result = {
        'id': static_item[0],
        'static_type': static_item[1],
        'last_update': static_item[2].strftime("%b %d, %Y"),  # pretty-print datetime
        'body': static_item[3]
    }

    return result

def render_mcs_entry(mcs_entry):
    result = {
        'id': mcs_entry[0],
        'index_name': mcs_entry[1],
        'content': mcs_entry[2],
        'last_update': mcs_entry[3].strftime("%b %d, %Y"),  # pretty-print datetime
    }

    return result

'''
Get all static items, classify by their types
e.g.
{
    "About": balabala
    "Resume": balabala,
}
'''
def classify_static(static_list):
    # Empty dist
    result = {}

    for static_item in static_list:
        result[static_item['static_type']] = static_item['body']

    return result

'''
Title to alias.
e.g. Trip to Yellowstone -> trip-to-yellowstone
'''
def title2alias(title):
    alias = title.lower()
    alias = alias.split()
    result = []
    for component in alias:
        component = ''.join(e for e in component if e.isalnum())
        result.append(component)
    return '-'.join(result)


'''
trim preview, limit it to 255 chars
'''
def trimPreview(preview):
    soup = bs(preview)
    text = soup.get_text()
    return text[0:200]
    
'''
pretty-print html
'''
def pprint_html(h):
    return bs(h, 'html.parser').prettify()

'''
Advanced useage
'''
def prepareSQL(username, password):
    filename = "csming-sql-" + str(datetime.datetime.now()).split()[0]+".sql"
    return filename


if __name__ == '__main__':
    print("If you see this outside testing, then you're doing it wrong!")
    ugly = input("Enter some ugly html")
    print(pprint_html(ugly))
    exit()