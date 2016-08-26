echo "starting sass"

#generate the file if it isn't there yet
node-sass ./scss/style.scss ./public/css/style.css

#watch the changes on the files
node-sass -w ./scss/style.scss ./public/css/style.css
