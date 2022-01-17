import subprocess


# subprocess.call("", shell=True)


def build_app(url, framework):
    # Using the URL for the repo, run the build script on the repo's application
    repo_folder = get_folder(url)

    subprocess.call("sh ./terraform/provision.sh {} {}".format(url, repo_folder), shell=True)

    # subprocess.call(f'git clone {url}', shell=True)
    
    # if framework == 'flask':
    #     subprocess.call(f'docker build --build-arg FOLDER={repo_folder} -t "flask-container" .', shell=True)

    # elif framework == 'react':
    #     subprocess.call('docker build -t "react-container" ./react/DockerfileReact', shell=True)

    # else:
    #     return None

    # subprocess.call('docker run -d -p 5000:5000 flask-container', shell=True)
    # subprocess.call('sh ./backend-flask/build.sh {} {}'.format(url, repo_folder), shell=True)
    
    return None


def get_folder(url):
    # Using the URL for the repo, get the folder name of the application
    repo_folder = url.split("/", 4)[4].split(".")[0]

    return repo_folder


build_app('https://github.com/SrKoDes/DEPLOY4_FLASK_APP.git', 'flask')







# def provision_infra():
#     #provision a new EC2
#     #script will also run the build_app function in the EC2
#     subprocess.call("sh ./terraform/provision.sh", shell=True)


# provision_infra()