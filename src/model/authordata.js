const mongoose = require('mongoose');//Accessing mongoose package

mongoose.connect('mongodb+srv://userone:userone@cluster0.a5hev.mongodb.net/ICTAK?retryWrites=true&w=majority');//database connection

const Schema = mongoose.Schema;//schema definition

const AuthorSchema = new Schema({
    title: String,
    origin: String,
    Best_known_for: String,
    image: String,
    desc: String
});

var authordata = mongoose.model('authordata',AuthorSchema);//model creation

module.exports = authordata;
