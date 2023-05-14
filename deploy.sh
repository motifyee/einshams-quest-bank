npm run build

rm -rf firebase/public
mv dist firebase/public

cd firebase
firebase deploy --only hosting:ein-shams
