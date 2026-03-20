import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for login goes here...
    alert(`Welcome back, ${email}!`);
    
    // REFRESH FIX: Reset fields to empty strings
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username or Email</label>
            <input 
              type="text" className="form-control bg-light" 
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input 
              type="password" className="form-control bg-light" 
              value={password} onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <button className="btn btn-primary w-100 py-2 fw-bold">Sign In</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;