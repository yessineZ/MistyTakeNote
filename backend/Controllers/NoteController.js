const Note  = require('../models/note') ; 
const fetchAllNotes = async(req,res)=> {
    try {
        console.log(req.user) ; 
        const notes = await Note.find({user : req.user._id}) ;
        res.status(200).send(notes) ;
    }
    catch(err) {
        console.log(err) ;
        res.status(500).send(err) ;
    } 

};


const fetchNote = async (req, res)=> {
    const id = req.params.id ;
    const note = await Note.findOne({_id : id ,user : req.user._id}) ;
    res.status(200).send(note) ; 

};

const createNote = async (req,res)=> {
    console.log(req.user + "3asba2") ; 
     const note = new Note({
        title : req.body.title , 
        body : req.body.body ,
        user : req.user._id
    });
    await note.save() ;
    res.status(201).send(note) ; 
   

};

const updateNote = async (req,res)=> {
    const id = req.params.id ;
    const note = await Note.findOneAndUpdate({_id : id , user : req.user._id},{
        title : req.body.title , 
        body : req.body.body 
    });
    const updatedNote = await Note.findById(id) ; 
    res.status(200).send(updatedNote)  ;
    console.log(note) ;
 

}


const deleteNote =  async (req,res)=> {
    const id = req.params.id ; 
    const note = await Note.findOneAndDelete({_id : id , user : req.user._id}) ;
    res.status(200).send(note)  ;

};


module.exports = {
    fetchAllNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
}