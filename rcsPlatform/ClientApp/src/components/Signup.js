import React, { useState } from 'react';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/account/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log('User registered successfully');
      setRegisterFailed(false);
    } else {
      console.log('User registration failed');
      setRegisterFailed(true);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </label>
        <label>
          Password
          <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </label>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} /> Show Password
        <input type="submit" value="Signup" className="btn btn-primary" />
        {registerFailed && <div className="alert alert-danger">Registration failed. Please try again.</div>}
      </form>
    </div>
  );
}

export default Signup;
