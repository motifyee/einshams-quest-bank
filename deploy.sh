npm run build

rm -rf deploy/public
mv dist deploy/public

cd deploy
firebase deploy --only hosting:ein-shams
