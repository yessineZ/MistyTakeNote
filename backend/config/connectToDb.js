
function connectToDb() {
    const mongoose = require('mongoose') ; 
    const mongooseLink = process.env.mongo
mongoose.connect(mongooseLink).then(()=> {
    console.log('Connected to database') ; 
}).catch((err)=> {
    console.log(err) ; 
}).finally(() => {
    console.log('piw piw' ) ; 
});

}


module.exports = connectToDb ;