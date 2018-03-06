def render_article(article):
    result = {
        'id': article[0],
        'author': article[1],
        'create_date': article[2].strftime("%d %b, %Y"),  # pretty-print datetime
        'last_update': article[3].strftime("%d %b, %Y"),  # pretty-print datetime
        'title': article[4],
        'body': article[5]
    }
    return result

def render_static_item(static_item):
    result = {
        'id': static_item[0],
        'static_type': static_item[1],
        'last_update': static_item[2].strftime("%d %b, %Y"),  # pretty-print datetime
        'body': static_item[3]
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

if __name__ == '__main__':
    print("If you see this, then you're doing it wrong!")