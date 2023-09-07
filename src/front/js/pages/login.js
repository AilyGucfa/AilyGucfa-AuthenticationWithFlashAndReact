import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleClick = () => {

    const options = {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(
            {
                "email":email,
                "password": password
            }
        )
    }
    fetch("https://obscure-yodel-j669v9gjv46hp57x-3001.app.github.dev/api/token", options)
    .then(response => {
        if (response.ok){
            console.log("the response is successful")
            return response.json()
        }

    })
    .then(data => console.log("Access token", data))
    .catch(error => console.log("error", error))
    
  }

  return (
    <div className="container"> 
      <h2 className="login">Log In</h2> 
      <form id="login-form"> 
        <div className="form-group"> 
          <label htmlFor="email">Email:</label> 
          <input 
                type="text" 
                id="email" 
                name="email"
                onChange={e => setEmail(e.target.value)} value={email}
             required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
                type="password" 
                id="password" 
                name="password"
                onChange={e => setPassword(e.target.value)} value={password} 
                required />
        </div>

        <button type="submit" onClick={handleClick}>Log In</button> 
      </form>
    </div>
  );
};

export default LogIn;
