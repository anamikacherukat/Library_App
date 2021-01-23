const mongoose = require('mongoose');//Accessing mongoose package

mongoose.connect('mongodb+srv://userone:userone@cluster0.a5hev.mongodb.net/ICTAK?retryWrites=true&w=majority');//database connection

const Schema = mongoose.Schema;//schema definition

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String,
    desc: String
});

var bookdata = mongoose.model('bookdata',BookSchema);//model creation

module.exports = bookdata;
