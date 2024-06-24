import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import Header1 from '../Layout/Header1';


function Login() {
  const navigate = useNavigate() ; 
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      await axios.post("http://localhost:3000/login", { email, password });
      navigate("/note") ; 
    }catch (error) {
        console.log(error.message);
    }
    
  };

  return (
    <div style={{paddingTop : 0 }}>
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

            <div className="d-flex justify-content-around align-items-center mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <button id="submit1" type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Sign in</button>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            <a data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="https://www.facebook.com/" role="button">
              <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a>
            <a data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="https://www.twitter.com/" role="button">
              <i className="fab fa-twitter me-2"></i>Continue with Twitter
            </a>
          </form>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}

export default Login;
