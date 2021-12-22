import subprocess
import json
from urllib.request import urlopen
from operator import itemgetter

def build_app(url, framework):
    # Using the URL for the repo, run the build script on the repo's application
    repo_folder = get_folder(url)
    subprocess.call(f'git clone {url}', shell=True)

    if framework == 'flask':
        subprocess.call('docker build -t "flask-container" ./flask/DockerfileFlask',shell=True)

    elif framework == 'react':
        subprocess.call('docker build -t "react-container" ./react/DockerfileReact')

    else:
        return None

    subprocess.call('sh ./backend-flask/build.sh {} {}'.format(url, repo_folder), shell=True)
    
    return None


def get_folder(url):
    # Using the URL for the repo, get the folder name of the application
    repo_folder = url.split("/", 4)[4].split(".")[0]

    return repo_folder

# build_app('https://github.com/SrKoDes/DEPLOY4_FLASK_APP.git')

def get_repos(url):
    # Get the list of repos as well as the list of repo URL's
    list_of_repos = []
    list_of_urls = []
    
    # Get API response
    response = urlopen(url)
    full_api_call = json.loads(response.read())

    # Pull relevant information
    for repo in full_api_call:
        list_of_repos.append(repo['name'])

    for url in full_api_call:
        list_of_urls.append(repo['clone_url'])

    return list_of_repos, list_of_urls


def get_user_info(url):
    # Get the user info to populate webpage
    user_data = []
    user_keys = ['avatar_url','name','login']

    # Get API response
    response = urlopen(url)
    full_api_call = json.loads(response.read())
    
    # Pull relevant information
    user_data = itemgetter(*user_keys)(full_api_call)

    return user_data

# print(get_repos('https://api.github.com/users/hector6921/repos'))

# print(get_user_info('https://api.github.com/users/hector6921'))