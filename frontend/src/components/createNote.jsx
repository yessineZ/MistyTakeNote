import React from 'react'
import { useState } from 'react'
import axios from 'axios' ; 
function CreateNote(props) {
    const [title,setTitle] = useState("") ; 
    const [body,setBody] = useState("") ;

    const handleSubmit = async  (e) => {
        e.preventDefault() ; 
        if(title !=="" && body !=="") {
          
            await axios.post('http://localhost:3000/note',{
                title : title ,
                body : body ,
                
            }).then((res) => {
                console.log(res.data) ;
                props.SetChange((prev) => {
                    return prev+1 ; 
                })
            })
            setTitle("") ;
            setBody("") ;
        }
    }

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Note</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Description..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateNote
