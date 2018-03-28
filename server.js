const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const route = require('./route');

mongoose.connect('mongodb://localhost/customer');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'build')));
route(app);

const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log(`Localhost running on port ${port}`);