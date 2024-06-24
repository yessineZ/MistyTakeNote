import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header1 from '../Layout/Header1';

export default function Registre() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await axios.post(`http://localhost:3000/registre`, { email, password },{withCredentials : true});
      navigate("/login");
    } catch (error) {
        console.log(error.message);
    }
  
  };

  return (
    <div>
      {<Header1></Header1>}

        <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
              <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="form1Example13" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form1Example13">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="form1Example23" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form1Example23">Password</label>
            </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Registre</button>


         
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
}
