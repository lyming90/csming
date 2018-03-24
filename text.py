def approval_Email(first_name, last_name):
    msg = '''
    <!DOCTYPE HTML>
    <html>
    <head>
        <style>
            p {
                font-family: Verdana;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <p>Hello ''' + last_name + ", " + first_name + '''
        <br><br>
        Thank you for subscribing to our Friend Plan.
        <br><br>
        On behalf of all members subscribed to our Friend Plan, I would like express my welcome.
        <br><br>
        Please note the following condition with the subscription:
        <br><br>
        1. Monthly billing Email will be sent out. You're responsible to pay your bill on time.<br>
        2. You may opt out the plan by notifying us at least 30 days in advance. 
        <br><br>
        Please also note that the subscription feature is still <strong>under development</strong>.
        <br><br>
        If you have any question regarding your subscription, including opting out the plan, please feel free to contact me by replying to this Email.
        <br><br>
        Thank you, and hope you enjoy your Netflix experience!
        <p>Best regards,<br>刘明宇, Liu Mingyu<br>Friend Plan | <a href="http://csming.com/netflix">www.csming.com</a></p>
    </body>
    </html>
    '''

    return msg