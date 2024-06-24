const mongoose = require('mongoose') ; 

const UserSchema = mongoose.Schema({
    email : {
        type : String ,
        required : true,
        unique : true,
        trim : true ,
        lowercase : true,
        index : true ,
    },
    password : {
        type : String  , 
        required : true,
        trim : true,
        minlength : 6,

        
    },
    notes : [{type : mongoose.Schema.Types.ObjectId , ref : 'Note'}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;