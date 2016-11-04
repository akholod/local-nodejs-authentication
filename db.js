/**
 * Created by andrey on 31.10.16.
 */
const mongoose = require('mongoose');
const configDB = require('./config/db');
mongoose.connect(process.env.MONGOLAB_URI);

//create db connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
console.log('moongoose connect');
module.exports = db;