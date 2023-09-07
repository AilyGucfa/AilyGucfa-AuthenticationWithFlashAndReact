import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Signup = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <h1 className="signup" >Sign Up</h1>
                <form id="signup-form">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                    />

                    <button className="btn btn-primary mt-3" type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};
export default Signup;