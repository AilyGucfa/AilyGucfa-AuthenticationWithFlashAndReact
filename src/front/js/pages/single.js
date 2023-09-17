import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">
                This will show the demo element: {store.demo[params.theid].title}
              </h1>
              <img src={rigoImageUrl} className="card-img-top" alt="Demo" />
              <hr className="my-4" />
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
