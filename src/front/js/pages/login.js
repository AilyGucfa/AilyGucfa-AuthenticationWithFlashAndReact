import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in, and redirect to the private page if so
    if (store.token) {
      navigate("/private");
    }
  }, [store.token, navigate]);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    actions.login(email, password);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title text-center">Log In</h1>
              {!store.token ? (
                <form id="login-form">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={handleClick}
                  >
                    Log In
                  </button>
                </form>
              ) : (
                <p className="text-center">
                  You are already logged in. Redirecting to the private page...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
