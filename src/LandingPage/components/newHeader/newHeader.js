import React from "react";
import { connect } from "react-redux";
import {
  setLang,
  setLoggedInFreelancer,
  setLoggedInBusiness,
  setToken,
} from "../../../redux/Functions/actions";
import "./newHeader.scss";
import Albania from "../../../assets/images/alb.jpg";
import English from "../../../assets/images/eng.png";
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
        <div className="container">
          <a
            role="button"
            className="navbar-brand"
            onClick={() => navigate("/")}
          >
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {props.isLoggedinFreelancer && (
                <>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/" ? " active" : ""
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
                      className={`nav-link ${location.pathname === "/bookmarks" ? " active" : ""
                        }`}
                      onClick={() => navigate("/bookmarks")}
                      style={{ cursor: "pointer" }}
                    >
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/career"
                        ? "active"
                        : ""
                        }`}
                      onClick={() => navigate("/career")}
                      style={{ cursor: "pointer" }}
                    >
                      Career
                    </a>
                  </li>
                </>
              )}
              {!props.isLoggedinBusiness && !props.isLoggedinFreelancer && (
                <>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/find-jobs" ? " active" : ""
                        }`}
                      onClick={() => navigate("/")}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a className="nav-link" onClick={() => navigate("/faqs")}>
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/bookmarks" ? " active" : ""
                        }`}
                      onClick={() => navigate("/about-us")}
                    >
                      About us
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className="nav-link"
                      onClick={() => navigate("/contact-us")}
                    >
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="headerItems">
              {!props.isLoggedinBusiness && !props.isLoggedinFreelancer && (
                <>
                  <div className="auth-buttons">
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
                  {/* <div role="button" className="dropdown text-center lang">
                    <a
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={props.language ? Albania : English}
                        alt="mdo"
                        width="32"
                        height="32"
                        className="lang-btn"
                      />
                    </a>
                    <ul className="dropdown-menu text-small lang-dr">
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={() => {
                            props.setLang(true);
                          }}
                        >
                          <img
                            src={Albania}
                            alt="mdo"
                            width="25"
                            height="30"
                            className="lang-btn"
                          />{" "}
                          Alb
                        </div>
                      </li>
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={() => {
                            props.setLang(false);
                          }}
                        >
                          <img
                            src={English}
                            alt="mdo"
                            width="30"
                            height="25"
                            className="lang-btn"
                          />{" "}
                          Eng
                        </div>
                      </li>
                    </ul>
                  </div> */}

                </>
              )}

              {props.isLoggedinFreelancer && (
                <div role="button" className="dropdown text-center lang profile-logout">
                  <p data-bs-toggle="dropdown"
                    aria-expanded="false">{userData?.firstName} {userData?.lastName}</p>
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
                <>
                  <div role="button" className="dropdown text-center lang profile-logout">
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
                  {/* <div role="button" className="dropdown text-center lang">
                    <a
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={props.language ? Albania : English}
                        alt="mdo"
                        width="40"
                        height="32"
                        className="lang-btn"
                      />
                    </a>
                    <ul className="dropdown-menu text-small lang-dr">
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={() => {
                            props.setLang(true);
                          }}
                        >
                          <img
                            src={Albania}
                            alt="mdo"
                            width="25"
                            height="25"
                            className="lang-btn"
                          />{" "}
                          Alb
                        </div>
                      </li>
                      <li>
                        <div
                          role="button"
                          className="dropdown-item"
                          onClick={() => {
                            props.setLang(false);
                          }}
                        >
                          <img
                            src={English}
                            alt="mdo"
                            width="25"
                            height="25"
                            className="lang-btn"
                          />{" "}
                          Eng
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </>
              )}
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
