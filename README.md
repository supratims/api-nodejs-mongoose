# nodejs-mongodb-express

REST API Server using nodejs, mongodb, mongoose and express

## Prerequisites

* Install nodejs
* Install mongodb 

## How to run

* Clone the project
* npm install
* node server

## Run the APIs

* GET requests can be tested either using a browser http://localhost:3000/wines
* POST requests using CURL
`curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Nw Wine", "description": "Year 2009"}' http://localhost:3000/wines`

Credits: http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
