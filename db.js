/**
 * Created by andrey on 31.10.16.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://akholod:3v1a6l0e0r2a@ds011785.mlab.com:11785/fcc');

//create db connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
console.log('moongoose connect');
module.exports = db;