import React from 'react'
import { useState } from 'react';
import axios from 'axios'  ;  
function Note({Note,SetChange}) {

    const [newtitle,setNewTitle] = useState("") ; 
    const [newBody,setNewBody] = useState("") ;
    const [isUpdating,setIsUpdating] = useState(false) ; 

    const handleUpdate = async (id) => {
        let  title ="" , body = "" ; 
        if(newtitle ==="") {
            title = Note.title ;
        }else {
            title = newtitle ;
        }
        if(newBody ==="") {
            body = Note.body ;
        }else {
            body = newBody ;
        }
        await axios.put(`http://localhost:3000/note/${id}`,{
            title ,
            body 
        }).then((response) => {
            console.log(response) ;
            SetChange((prev) => {
                return prev+1  ; 
            })
        });
        setIsUpdating(false) ;
        setNewTitle("") ;
        setNewBody("") ;
        
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/note/${id}`).then((response) => {
            console.log(response) ;
            SetChange((prev) => {
                console.log(prev) ; 
                return prev+1 ; 
            })

        }) ; 
         
    }

    
    return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 row offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="title..."
                className="form-control"
                defaultValue={Note.title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            ) : (
              <span>{Note.title}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpdating ? (
              <input
                type="test"
                placeholder="body..."
                className="form-control"
                defaultValue={Note.body}
                onChange={(e) => setNewBody(e.target.value)}
              />
            ) : (
              <span>{Note.body}</span>
            )}
          </div>
        </div>
      </div>
      <div className="col-3">
        <button
          className="btn btn-warning m-1"
          onClick={() => {
            setIsUpdating(!isUpdating);
          }}
        >
          {isUpdating ? "Cancel" : "Edit"}
        </button>
        {isUpdating ? (
          <button
            className="btn btn-primary"
            onClick={() => { 
              handleUpdate(Note._id);
            }}
          >
            Update
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-danger m-1"
          onClick={() => handleDelete(Note._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Note
