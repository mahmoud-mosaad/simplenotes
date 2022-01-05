
// const path = require("path");

const app = require("express")();

require('dotenv').config()
require('./config')(app)
require('./routes')(app)

export default {
  path: '/api',
  handler: app
}
