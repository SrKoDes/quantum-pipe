import requests
import json

def get_user_data(auth_token):
    raw_data = requests.get('https://api.github.com/user',headers={'Authorization':f"token {auth_token}"}).text
    jsondata = json.loads(raw_data)

    user_profile_data = {'picture':jsondata['avatar_url'],'name':jsondata['name'],'userName':jsondata['login'],'url':jsondata['html_url']}

    return user_profile_data
      
