// eslint-disable-next-line no-unused-vars
import React from "react";

const Profile = () => {
  return (
    <div>
      <form className="container">
        <div>
          <h1>Create Account</h1>
        </div>

        <div className="form-outline mb-2">
          <input name="name" type="text" id="name" placeholder="Enter Name*" />
        </div>

        <div className="form-outline mb-2">
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter Email*"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter Password*"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Profile;
