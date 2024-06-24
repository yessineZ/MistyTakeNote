const mongoose = require('mongoose');

const NoteSchema =  mongoose.Schema({
    title : String  ,
    body : String ,
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});

const Note = mongoose.model('Note',NoteSchema) ; 

module.exports = Note;
