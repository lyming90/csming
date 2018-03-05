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


if __name__ == '__main__':
    print("If you see this, then you're doing it wrong!")