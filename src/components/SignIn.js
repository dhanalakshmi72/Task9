// src/components/SignIn.js

import '../styles/SignIn.css';
function SignIn() {
 return (
    <div className="signin-container">
      <img src="https://as1.ftcdn.net/v2/jpg/03/64/10/16/1000_F_364101669_l523t0ZKfGi8BFI6E0jf0BWZ03UzBTJn.jpg" alt="signin" width="360" height="250" />
      <h2>Sign In</h2>
      <form >
        <label>Email:</label>
        <input type="email"requird />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;