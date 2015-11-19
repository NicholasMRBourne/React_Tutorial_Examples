var express = require('express');
var app = express();

app.use(express.static('./'));

console.log('React Tutorials served on Port 3000')
app.listen(3000);
