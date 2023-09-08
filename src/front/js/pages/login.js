import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);

  };
  if(store.token && store.token != "" && store.token != undefined) navigate("/");

  return (
    <div className="container">
      <h1 className="login">Log In</h1>

      {store.token && store.token != "" && store.token != undefined ? ('You are logged in with this token', store.token) : (
        <form id="login-form">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />

          <button className="btn btn-primary mt-3" type="submit" onClick={handleClick}>Log In</button>
        </form>
      )}

    </div>
  );
};

export default LogIn;
