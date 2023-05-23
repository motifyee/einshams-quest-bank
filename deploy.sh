npm run build

rm -rf firebase/public
cp -r docs firebase/public

cd firebase
firebase deploy --only hosting:agri-asu
