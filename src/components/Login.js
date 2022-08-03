import React, { useState, useContext } from "react";
import { MainContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const history = useNavigate();

  let mainContext = useContext(MainContext);

  const handleChange = (e) => {
    setCreds({
      ...Creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let { username, password } = Creds;
    let { users } = mainContext;
    let user = users.find((user) => user.uname === username);
    if (user && user.password === password) {
      history("/home");
      mainContext.setisLoggedIn(true);
    } else {
      alert("Please fill correct credentials");
    }
  };

  return (
    <div className="login-page p-2">
      <div clasname="container">
        <h1 className="text-center mt-3">
          <b>Infinite Loading List</b>
        </h1>
        <hr />
        <div className="row mt-5">
          <div className="col-md-4 m-auto">
            <div className="card bg-white p-4">
              <div className="card-body">
                <h1 className="text-center">Login</h1>
                <p className="text-muted text-center">
                  Sign In to your account
                </p>
                <div className="input-group mt-2 mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={Creds.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={Creds.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  style={{ float: "right" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
