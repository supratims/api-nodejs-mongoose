var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Body parser is required for our apis to serve json and parse request
app.use(bodyParser.json());
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

// note: our router and model are named wines, perhaps not the greatest idea.
var wines = require('./routes/wines');

// Expose your APIs

app.get('/wines', wines.findAll);

app.post('/wines', wines.addWine);

// Expose more APIs in future
/*
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addProduct);
app.put('/wines/:id', wines.updateProduct);
app.delete('/wines/:id', wines.deleteProduct);
*/

app.listen(3000);
console.log('Listening on port 3000...');
