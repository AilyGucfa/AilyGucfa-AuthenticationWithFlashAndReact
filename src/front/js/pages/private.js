import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            // If there's no token, redirect to the login page
            navigate("/login");
        } else {
            // If there's a token, fetch the user's email
            actions.getMessage(); //this function fetches the email
        }
    }, [store.token, navigate, actions]);

    return (
        <div className="text-center mt-5">
            <p>Authorized user only!</p>
            <h1>Welcome, {store.email || "User"}!</h1>
        
        </div>
    )
}

export default Private;
