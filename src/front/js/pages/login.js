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
            if(response.status == 200) return response.json();
        })

        .then(data => console.log("Access token: ", data))
        .catch(error => console.log("There was an error", error))
    }   

  return (
    <div className="container"> 
      <h1 className="login">Log In</h1> 
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
    </div>
  );
};

export default LogIn;
