rm -r -f Version-1
rm -r -f Version-2

mkdir Version-1
mkdir Version-2

cd Version-1

touch index.html
touch contact-us.html
touch services.html
touch about-us.html

touch index-2.html
touch services-2.html

mv index-2.html ../Version-2
mv services-2.html ../Version-2