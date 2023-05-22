# TODO

-   welcome page
    -   listing subdirectories
    -   dislaying usage

# Git

setting git authentication commands

    git remote set-url origin git@motifyee:motifyee/einshams-quest-bank


    * ssh-keygen -t ed25519 -C "motifyee@gmail.com"
    * ssh-keygen -t ed25519 -C "mrt.tarabia@gmail.com"

    * ssh-add ~/.ssh/motifyee-github
    * ssh-add ~/.ssh/mrt-web-github

    * ssh-add -l # to list identities
    * ssh-add -D # to remove all identities


    *  ~/.ssh/config:

        Host git.motifyee
            HostName github.com
            IdentityFile ~/.ssh/motifyee-github
            IdentitiesOnly yes
        Host mrt-web
            HostName github.com
            IdentityFile ~/.ssh/mrt-web-github
            IdentitiesOnly yes
