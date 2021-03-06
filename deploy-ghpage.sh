git checkout --orphan gh-pages
npm install
sed -i '8 i $quoteAnimationNames: false;' ./node_modules/vue2-animate/src/sass/make-transitions.scss
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'deployed :wrench:'
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f master
git branch -D gh-pages