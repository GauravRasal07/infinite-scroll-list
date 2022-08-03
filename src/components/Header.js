import React, { useContext } from "react";
import { MainContext } from "../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const mainContext = useContext(MainContext);

  const { setisLoggedIn } = mainContext;
  const history = useNavigate();

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <div className="container p-3 px-md-5">
        <div className="navbar-brand">Infinite Scroll List</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-right">
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setisLoggedIn(false);
                history("/");
              }}
            >
              <span className="nav-link active" aria-current="page">
                LogOut <i className="fas fa-sign-out-alt"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
