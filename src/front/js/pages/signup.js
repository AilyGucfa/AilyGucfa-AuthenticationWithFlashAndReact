import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const signupSuccess = await actions.signup( email, password);

    if (signupSuccess) {
      navigate("/login")
    }
  };

  if(store.token && store.token != "" && store.token != undefined) navigate("/");

  return (
    <div className="container">
      <h1 className="signup">Sign Up</h1>
      {store.token && store.token != "" && store.token != undefined ? ('You are logged in with this token', store.token) : (
      <form id="signup-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <button className="btn btn-primary mt-3" type="submit" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      )}
      
    </div>
  );
};

export default Signup;
