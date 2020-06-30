#!/bin/bash

echo "Building the application..."
npm run build

cd dist/
echo "Compessing the application..."
tar cvfz portfolio.tgz .

echo "Deploying to the server..."
scp portfolio.tgz foura9t3@208.91.198.88:/home/foura9t3/pranjalyatiwari/

echo "Logging in the server for extraction..."
ssh foura9t3@208.91.198.88 /bin/bash << 'ENDSSH'
cd pranjalyatiwari
echo "Extracting the application..."
tar xvfz portfolio.tgz
echo "Performing clean up..."
rm -rf app.tgz
echo "Done!"
ENDSSH
rm -rf portfolio.tgz