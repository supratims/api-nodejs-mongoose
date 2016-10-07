var express = require('express');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

var wines = require('./routes/wines');

app.get('/wines', wines.findAll);

app.post('/wines', wines.addWine);

/*
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addProduct);
app.put('/wines/:id', wines.updateProduct);
app.delete('/wines/:id', wines.deleteProduct);
*/

app.listen(3000);
console.log('Listening on port 3000...');
