const express = require('express') ;
const app = express()  ; 
const Note = require('./models/note') ; 
const cors = require('cors') ; 
const cookieParser= require('cookie-parser') ; 
const User = require('./models/User') ; 
app.use(cookieParser()) ; 
app.use(cors({
     origin: 'http://localhost:3001'  ,
      
    credentials : true,})) ; 


const dotenv=require('dotenv');


dotenv.config({
    path:'./.env' //give .env file location
});


const port = process.env.PORT // Use the PORT environment variable


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());


app.get('/',(req,res)=> {
    res.send('<H1>Hello World</H1>') ;
});
const connectToDb = require('./config/connectToDb')  ;

connectToDb() ;

const NoteMethodes = require('./Controllers/NoteController') ; 

const requireAuth = require('./middleware/requireAuth') ; 

app.post('/note',requireAuth,NoteMethodes.createNote ) ; 

app.get('/note',requireAuth,NoteMethodes.fetchAllNotes) ;

app.get('/note/:id',requireAuth,NoteMethodes.fetchNote) ; 


app.put("/note/:id",requireAuth,NoteMethodes.updateNote);


app.delete("/note/:id",requireAuth,NoteMethodes.deleteNote);

//-----------------------------------USER
const UserController = require('./Controllers/UserController') ; 

app.post('/registre',UserController.Singup)  ; 

app.post('/login',UserController.login) ;

app.get('/checkAuth',requireAuth,UserController.checkAuth) ; 

app.get('/checkOut',UserController.checkOut) ;

app.delete('/deleteUser', async (req,res)=> {
    const email = req.body.email ; 
    const user = await User.findOneAndDelete({email: email}).then(() => {
        res.status(200).json({
            message : "User deleted"
        }) ;
    }).catch(err => {
        res.status(400).json({
            message : err
        }) ;
    })  ; 

})
