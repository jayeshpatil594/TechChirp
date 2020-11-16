import React from "react";

const Register = () => {
  return (
    <div>
      <section>
        <div className="form-group">
          <h1 className="large text-primary">
            <i className="fas fa-user"></i> Sign Up
          </h1>
        </div>

        <form className="form" action="create-profile.html">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </div>
  );
};

export default Register;
