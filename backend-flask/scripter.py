import subprocess

# subprocess.call("", shell=True)


def build_app(url):
    # Using the URL for the repo, run the build script on the repo's application
    repo_folder = get_folder(url)
    
    subprocess.call("sh ./terraform/provision.sh {} {}".format(url, repo_folder), shell=True)

    with open('user_app_ip') as f:
        user_app_ip = f.read()
    
    return user_app_ip


def get_folder(url):
    # Using the URL for the repo, get the folder name of the application
    repo_folder = url.split("/", 4)[4].split(".")[0]

    return repo_folder


build_app('https://github.com/SrKoDes/DEPLOY4_FLASK_APP.git')







# def provision_infra():
#     #provision a new EC2
#     #script will also run the build_app function in the EC2
#     subprocess.call("sh ./terraform/provision.sh", shell=True)


# provision_infra()