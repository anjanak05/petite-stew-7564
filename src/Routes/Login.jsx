import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBInput,
} from 'mdb-react-ui-kit';
import style from '../Style/Login.module.css';
import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => {

         auth.handleLogin(res.token);
        navigate('/AlertLogin');
      })
      .catch(error => console.log(error));
  }


  return (
    <div className={style.loginDiv}>
      <MDBContainer fluid>
        <MDBRow>
          <div>
            {/* 
          <div className='d-flex flex-row ps-5 pt-5'>
           <img style={{ margin:"auto", marginLeft:"27%"}} src="https://www.cricket.com/svgs/loginteam.svg" alt="cricktPic"/>
            
          </div> */}

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg"
                onChange={handleChange}
            value={formData.email}
            name="email"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                onChange={handleChange}
                value={formData.password}
                name="password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn onClick={handleSubmit} className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
                Login
              </MDBBtn>
            </div>
            <p className="small mb-2 pb-lg-0 ms-5">
              <a class="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{' '}
              <a href="#!" class="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBRow>
      </MDBContainer>

    </div>
  );
}

export default Login;
