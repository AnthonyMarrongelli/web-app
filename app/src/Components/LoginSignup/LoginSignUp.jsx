import React, { useState } from 'react';
import './LoginSignup.css';

import lock from '../Assets/lock.png';
import mail from '../Assets/mail.png';
import people from '../Assets/people.png';

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
          <input type="text" placeholder="Name" />
        </div>}
        

        <div className="input">
          <img src={mail} alt="" style={{ width: '20px', height: '20px' }} />
          <input type="text" placeholder="Email" />
          <input type="email" />
        </div>

        <div className="input">
          <img src={lock} alt="" style={{ width: '20px', height: '20px' }} />
          <input type="text" placeholder="Password" />
          <input type="password" />
        </div>
      </div>
    
    {action==="Login"? <div></div>: <div className="forgot-password"> Forgot Password? <span> Click Here </span></div> }
      
    <div className="submit-container">
        <div className={action ==="Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up  </div>
        <div className={action ==="Sign Up"? "submit gray": "submit"}onClick={()=>{setAction("Login")}}> Login </div>

    </div>
    

    </div>
  );
}

export default LoginSignUp;