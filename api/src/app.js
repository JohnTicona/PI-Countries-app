const express = require('express');
const morgan = require('morgan');
const countryRoutes = require('./routes/countryRoutes');
const activityRoutes = require('./routes/activityRoutes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/countries', countryRoutes);
server.use('/activities', activityRoutes);

module.exports = server;
