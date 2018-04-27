from csming import app

print(">>>>>>> This is a testing environment <<<<<<<")
app.secret_key = "123456"
app.debug = True
app.run()