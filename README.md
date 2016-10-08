# nodejs-mongodb-express

REST API Server using nodejs, mongodb, mongoose and express

## How to run

* Clone the project
* npm install
* node server

## Run the APIs

* GET requests can be tested either using a broser http://localhost:3000/wines
* POST requests using CURL
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Nw Wine", "description": "Year 2009"}' http://localhost:3000/wines
