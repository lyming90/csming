import os

os.system("sudo systemctl restart csming")
os.system("sudo systemctl restart nginx")
print("Server restarted.")