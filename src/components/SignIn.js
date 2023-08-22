import React from 'react';
import '../styles/SignIn.css'; 
const SignIn = () => {
  return (
    <div className='background-image'>
     <div className="signin-container">
       <h2>Sign In and start learning!</h2>
        <div className="input-container">
          <input type="text" placeholder="Name" />
          <br /><br />
          <input type="email" placeholder="Email" />
          <br />
        </div>
          
          <button className="signin-button">Sign In</button>
      </div>
    </div>
  );
};
export default SignIn;
