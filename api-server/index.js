////keep
'use strict';
require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');

db.sync().then(() => {
  server.start(3000);
});
