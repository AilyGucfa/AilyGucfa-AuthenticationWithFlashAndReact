import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Signup = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <h2 className="signup">Sign Up</h2>
                <form id="signup-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};
export default Signup;