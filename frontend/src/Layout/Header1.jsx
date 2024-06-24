import React from "react";
import { NavLink } from "react-router-dom";
function Header1(props) {
  const style = {
    display : "flex",
    alignItems : "center" ,
    justifyContent : "center"
  }
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">TAKE NOTE!</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="text-white collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
        {!props.Active ? (
      <div style={style}>
            <li className="nav-item active">
        <NavLink className={({isActive}) => (isActive) ? "nav-link active text-danger" : "nav-link"} to="/">Login</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className={({isActive}) => (isActive) ? "nav-link active text-danger" : "nav-link"} to="/registre">Registre</NavLink>
      </li>
      </div>
      
  
    
    
  ) 
  : 
  <li className="nav-item">
        <NavLink className={({isActive}) => (isActive) ? "nav-link active text-danger" : "nav-link"} to="/checkOut">Logout</NavLink>
      </li>
      
  
  }
  </ul>
  </div>

        
      
  
  
</nav>
  
  )}

export default Header1
