import React, { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    
    // ... rest of your code for handling the login

    try {
      // ... code for making the API request and handling the response

      console.log('User logged in.');
      setLoginFailed(false);
    } catch (error) {
      console.log('Login failed.');
      setLoginFailed(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <label>
          Password
          <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
        </label>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} /> Show Password
        <input type="submit" value="Login" className="btn btn-primary" />
        {loginFailed && <div className="alert alert-danger">Login failed. Please try again.</div>}
      </form>
    </div>
  );
}

export default Login;
