import subprocess


def build_app(url):
    repo_folder = get_folder(url)

    subprocess.call('sh ./backend-flask/build.sh {} {}'.format(url, repo_folder), shell=True)
    return None


def get_folder(url):
    repo_folder = url.split("/", 4)[4].split(".")[0]

    return repo_folder

build_app('https://github.com/SrKoDes/DEPLOY4_FLASK_APP.git')