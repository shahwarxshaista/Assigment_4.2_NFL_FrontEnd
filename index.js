const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var NFLController = require('./controllers/nflController.js');

var app = express();
app.use(bodyParser.json());
//app.use(cors({ origin: 'http://localhost:3000' }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/NFL', NFLController);
