import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function submitRequest(e) {
    e.preventDefault(); // Prevent form submission
    actions.signup(email, password).then((success) => {
      if (success) {
        // Redirect to the login page
        navigate("/login");
      }
    });
  }

  useEffect(() => {
    if (store.message !== null && store.message !== "") {
      setError(store.message);
    }
  }, [store.message]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="card-title text-center">Sign Up</h1>
              {store.token ? (
                <p className="card-text text-center">
                  You are logged in with this token: {store.token}
                </p>
              ) : (
                <form id="signup-form">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-block"
                    onClick={submitRequest}
                  >
                    Submit
                  </button>
                </form>
              )}
              <div className="mt-3 text-center">
                {error !== "" && <p className="text-danger">{error}</p>}
                {error !== "" && <Link to="/login">Login</Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
