import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';

import lock from '../Assets/lock.png';
import mail from '../Assets/mail.png';
import people from '../Assets/people.png';


//Password Hashing function
function hashPassword(password) {
  // Simulate a simple hashing algorithm (not secure for production)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash.toString();
}

//Post request for registering into DB
async function register() {
  axios.post("http://localhost:3853/register", {
    name: document.getElementById("name").value,
    password: hashPassword(document.getElementById("password").value),
    email: document.getElementById("email").value
  }).then(response => console.log(response))
}

//Get request for logging into DB
async function login() {
  try {
    const email = document.getElementById("email").value;
    const password = hashPassword(document.getElementById("password").value);

    const response = await axios.get("http://localhost:3853/login", {
      params: {
        email: email,
        password: password
      }
    });

    console.log(response);
  } catch (error) {
    console.error('GET Request Error: ', error.response.data);
  }
}

const LoginSignUp = () => {
    
  const [action, setAction] = useState ("Login");
  
  return (
    <div className='container'>
      <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login"? <div></div>:<div className="input">
          <img src={people} alt="" style={{ width: '20px', height: '20px' }} />
          <input id= "name" type="text" placeholder="Name" />
        </div>}
        

        <div className="input">
          <img src={mail} alt="" style={{ width: '20px', height: '20px' }} />
          <input id="email" type="text" placeholder="Email" />
        </div>

        <div className="input">
          <img src={lock} alt="" style={{ width: '20px', height: '20px' }} />
          <input id="password" type="password" placeholder="Password" />
        </div>
      </div>
    
    {action==="Login"? <div></div>: <div className="forgot-password"> Forgot Password? <span> Click Here </span></div> }
      
    <div className="submit-container">
        <div className={action ==="Login"? "submit gray": "submit"} onClick={()=>{
          if(action !== "Sign Up") setAction("Sign Up");
          else {
            register()
          } 
          }}> Sign Up  </div>
        <div className={action ==="Sign Up"? "submit gray": "submit"} onClick={()=>{
          if(action !== "Login") setAction("Login");
          else {
            login()
          }
          }}> Login </div>

    </div>
    

    </div>
  );
}

export default LoginSignUp;