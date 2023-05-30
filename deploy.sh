

if [ "$1" = "build" ]; then
    npm run build

    rm -rf firebase/public
    cp -r docs firebase/public
fi

if [ "$#" -gt 1 ]; then
    echo "Usage: deploy.sh [build (optional), push (optional)]"
    echo "build: build the project before deploying"
    echo "you passed $# parameters: [ $@ ] = [ $* ]"
    exit 1
fi


cd firebase
firebase deploy --only hosting:agri-asu
