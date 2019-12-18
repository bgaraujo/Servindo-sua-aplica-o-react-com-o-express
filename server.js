const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'build')));

//a raiz chama seu index da pasta build
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Defina aqui a porta desejada
app.listen(process.env.PORT || 3010);