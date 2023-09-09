"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_cors import CORS  # Import CORS

api = Blueprint('api', __name__)

CORS(api)
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "Aily" or password != "Aily":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/hello", methods=["GET"])
@jwt_required()
def create_hello():
   
   email = get_jwt_identity()
   dictionary = {
      "message" : "Hello " + email + "! "
   }
   return jsonify(dictionary)

@api.route("/api/signup", methods=["POST"])
def signup():
    # Get user data from the request
    data = request.get_json()
    email = data.get("email",None)
    password = data.get("password", None)

    # Check if the email is already registered
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "Email already in use"}), 400

    # Create a new user
    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 200


# Create a protected route (example)
@api.route("/api/private_data", methods=["GET"])
@jwt_required()
def get_private_data():
    current_user = get_jwt_identity()
    return jsonify(message=f"Welcome, {current_user}! This is protected data.")