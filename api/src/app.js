const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');
const activityRoutes = require('./routes/activityRoutes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

// Config CORS
const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Error de Cors'));
    }
    // callback(null, true);
  },
};

server.use(cors(corsOptions));

server.use('/countries', countryRoutes);
server.use('/activities', activityRoutes);

module.exports = server;
