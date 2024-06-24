import React from 'react';
import ReactDOM from 'react-dom/client';
import Header1 from './Layout/Header1';
import { Route,BrowserRouter,Routes } from 'react-router-dom'

import Logout from './components/Logout';
import NotFound from './components/NotFound';
import CreateNote from './components/createNote';
import NoteList from './components/NoteList';
import AllNote from './components/AllNote';
import Login from './components/Login';
import Registre from './components/Registre';
import axios from 'axios' ;
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true ; 
root.render(
  <BrowserRouter>
      
      <Routes>
        <Route path="/note" element={<AllNote></AllNote>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/registre" element={<Registre></Registre>}></Route>
        <Route path="/checkOut" element= {<Logout></Logout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
     
  </BrowserRouter>
    
    
  
);


