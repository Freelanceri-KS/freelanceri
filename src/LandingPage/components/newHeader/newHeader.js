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
import HeaderLogo from "../../../assets/images/headerLogo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NewHeader = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFindJobClick = () => {
    navigate("/find-jobs");
  };

  const handleBookmarksClick = () => {
    navigate("/bookmarks");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    // Clear token and related state
    props.setToken(null);
    props.setLoggedInFreelancer(false);
    props.setLoggedInBusiness(false);

    // Clear token from localStorage
    localStorage.removeItem("userData");

    // Navigate to the login page
    navigate("/login");
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
                      className={`nav-link ${location.pathname === "/find-jobs" ? " active" : ""
                        }`}
                      onClick={handleFindJobClick}
                    >
                      Find Job
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/bookmarks" ? " active" : ""
                        }`}
                      onClick={handleBookmarksClick}
                    >
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a
                      className={`nav-link ${location.pathname === "/profile" ? " active" : ""
                        }`}
                      onClick={handleProfileClick}
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item margin">
                    <a className="nav-link" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="headerItems">
              <div role="button" className="dropdown text-center lang">
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
                    className="rounded-circle"
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
                        className="rounded-circle"
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
                        className="rounded-circle"
                      />{" "}
                      Eng
                    </div>
                  </li>
                </ul>
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
