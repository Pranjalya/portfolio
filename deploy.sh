#!/bin/bash
rm -rf dist/

echo "Building the application..."
npm run build

echo "Updating some files"
rm dist/manifest.json
cp tenous_files/404.html dist/
cp tenous_files/.htaccess dist/
cp tenous_files/manifest.json dist/


echo "Logging in the server for extraction..."
ssh foura9t3@208.91.198.88 /bin/bash << 'ENDSSH'
cd public_html/pranjalyatiwari.kaissa.in
echo "Performing clean up..."
rm -rf css fonts img js .htaccess favicon.ico index.html manifest.json precache-manifest.80680b936b013f86d19be57e5f3dde5e.js robots.txt service-worker.js
echo "Done!"
ENDSSH

echo "Deploying to the server..."
scp -r dist/* foura9t3@208.91.198.88:/home/foura9t3/public_html/pranjalyatiwari.kaissa.in/
echo "Work finished"