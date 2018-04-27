import os
import datetime
import csming
from bs4 import BeautifulSoup as bs

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

    result['preview'] = "<p>" + bs(csming.getPreview(result['id'])).get_text() + " [...]" + "</p>"
    
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
    # command = "mysqldump -u " + username + " -p" + password + " csming > sql/" + filename
    # command = "".join(command)
    # try:
    #     os.system(command)
    #     return filename
    # except:
    #     raise Exception()
    return filename


if __name__ == '__main__':
    print("If you see this outside testing, then you're doing it wrong!")
    ugly = input("Enter some ugly html")
    print(pprint_html(ugly))
    exit()