import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Signup from "../pages/signup";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {store.token ? (
                <div>
                    <div className="welcome-container">
                        <h1 className="display-4">Welcome, {store.homeMessage}</h1>
                    </div>
                    <Navbar />
                </div>
            ) : (
                <div>
                    <p className="lead">No account yet?</p>
                    <Link to="/signup" className="btn btn-primary btn-lg mx-3">Signup</Link>
					<br />
					<br />
					<br />
                    <p className="lead">Already have an account?</p>
                    <Link to="/login" className="btn btn-success btn-lg mx-3">Login</Link>
                </div>
            )}
        </div>
    );
};
