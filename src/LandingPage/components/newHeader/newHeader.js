import React from "react";
import { connect } from "react-redux";
import {
  setLang,
  setLoggedInFreelancer,
  setLoggedInBusiness,
  setToken,
} from "../../../redux/Functions/actions";
import "./newHeader.scss";
import User from "../../../assets/profiles/freelancer.png";
import Business from "../../../assets/profiles/business.png";
import HeaderLogo from "../../../assets/images/headerLogo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NewHeader = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };


  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;


  const handleLogout = () => {
    // Clear token and related state
    props.setToken(null);
    props.setLoggedInFreelancer(false);
    props.setLoggedInBusiness(false);

    // Clear token from localStorage
    localStorage.removeItem("userData");

    // Navigate to the login page
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light newHeader">
        <div className="container-fluid d-flex justify-content-center asd">
          <div className="nav-wrapper d-flex align-items-center w-100 mx-auto" style={{ maxWidth: '80%' }}>
            <div className="main-nav">
              <a role="button" className="navbar-brand" onClick={() => navigate("/")}>
                <img src={HeaderLogo} alt="Logo" height="35" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse dsa" id="navbarNav">
              {props.isLoggedinFreelancer && (
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/" ? "active" : ""
                        }`}
                      onClick={() => navigate("/")}
                      style={{ cursor: "pointer" }}
                    >
                      Find Job
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/freelancer-dashboard"
                        ? "active"
                        : ""
                        }`}
                      onClick={() => navigate("/freelancer-dashboard")}
                      style={{ cursor: "pointer" }}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/bookmarks" ? "active" : ""
                        }`}
                      onClick={() => navigate("/bookmarks")}
                      style={{ cursor: "pointer" }}
                    >
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/career" ? "active" : ""
                        }`}
                      onClick={() => navigate("/career")}
                      style={{ cursor: "pointer" }}
                    >
                      Career
                    </a>
                  </li>
                </ul>
              )}

              <div className="headerItems ms-auto">
                {!props.isLoggedinBusiness && !props.isLoggedinFreelancer && (
                  <>
                    <ul className="navbar-nav">
                      {/* <li className="nav-item">
                        <a
                          className={`nav-link ${location.pathname == "/blogs" ? 'active' : ""}`}
                          onClick={() => navigate("/blogs")}
                        >
                          Blogs
                        </a>
                      </li> */}
                      <li className="nav-item margin">
                        <a
                          className={`nav-link ${location.pathname == "/pricing" ? 'active' : ""}`}
                          onClick={() => navigate("/pricing")}
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className={`nav-link ${location.pathname == "/contact" ? 'active' : ""}`}
                          onClick={() => navigate("/contact-us")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="auth-buttons ms-auto">
                      <button
                        className="loginbtn"
                        onClick={() => navigate("/login")}
                      >
                        Log In
                      </button>
                      <button
                        className="regbtn"
                        onClick={() => navigate("/register")}
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}

                {props.isLoggedinFreelancer && (
                  <div
                    role="button"
                    className="dropdown text-center lang profile-logout"
                  >
                    <p data-bs-toggle="dropdown" aria-expanded="false">
                      {userData?.firstName} {userData?.lastName}
                    </p>
                    <a
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={User}
                        alt="mdo"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </a>
                    <ul className="dropdown-menu text-small lang-dr">
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={() => navigate("/profile")}
                        >
                          <p>Profile</p>
                        </div>
                      </li>
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <p>Log out</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {props.isLoggedinBusiness && (
                  <div
                    role="button"
                    className="dropdown text-center lang profile-logout"
                  >
                    <p>{userData?.companyName}</p>
                    <a
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={Business}
                        alt="mdo"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </a>
                    <ul className="dropdown-menu text-small lang-dr">
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <p>Log out</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>


  );
};

const mapStateToProps = (state) => {
  return {
    language: state.data.language,
    isLoggedinFreelancer: state.data.isLoggedinFreelancer,
    isLoggedinBusiness: state.data.isLoggedinBusiness,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
    setLoggedInFreelancer: (data) => dispatch(setLoggedInFreelancer(data)),
    setLoggedInBusiness: (data) => dispatch(setLoggedInBusiness(data)),
    setToken: (data) => dispatch(setToken(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHeader);
