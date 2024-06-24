import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";

import CreateNote from "./createNote";
import Header1 from "../Layout/Header1";

function NoteList() {
  const [notes, setNote] = useState([]);
  const [change,setChange] = useState(0);
  const [PageActive,setPageActive] = useState(() => {
    return false ; 
  })




  useEffect(() => {
    const fetchData = async () => {
      setPageActive(true) ; 
      try {
        const response = await axios.get("http://localhost:3000/note");
        setNote(response.data);
        console.log(response.data) ; 
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  },[change]);

  
  

  
  
        const renderNotes = () => {
            
    if (notes.length > 0) {
      return notes.map((note) => (
        <Note key={note.id} Note={note}  SetChange={setChange}/>
      ));
    } else {
      return <p>No notes found.</p>;
    }
  };

  return <div className="pt-0">
    {<Header1 Active={PageActive}></Header1>}
    <div className = 'pt-3'>
        {<CreateNote SetChange={setChange}></CreateNote>}
    {renderNotes() }
    </div>
    
    
        </div>;

  }




export default NoteList;
