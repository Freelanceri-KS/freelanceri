import React from "react";
import './header.scss'
import { useState } from "react";
import Logo from '../../assets/images/Vectorlogo.png'
import { Link } from "react-router-dom";
// import ReactFlagsSelect from "react-flags-select";
import { connect } from "react-redux";
import  {setLang}  from "../../redux/Functions/actions"

const Header = (props) => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const allowedCountries = ['US', 'AL'];

  const handleSelect = (code) => {
    props?.setLang(code === 'AL');
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };
  console.log('redux',props?.language)
  return (
    <>
      <header className={`header bg-light  ${isMobileMenuActive ? "active" : ""}`}>
        <div className="container">
          <nav className="navbar">
            <div className="col-4">
              <div class="col-4 d-flex gap-2">
                <img src={Logo} className="headerLogo mt-1" />{" "}
                <span className="d-flex freeLancerText">
                  <p>free</p>
                  <p className="LancerPart">lanceri</p>
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <ul
                  className={`list nav-menu ${
                    isMobileMenuActive ? "active" : ""
                  }`}
                >
                  <li className="col d-flex justify-content-center">
                    <a className="text-dark text-decoration-none" href={"/"}>
                      Home
                    </a>
                  </li>
                  {/* <li className="col d-flex justify-content-center">Find job</li> */}
                  <li className="col d-flex justify-content-center">
                    <a
                      className="text-dark text-decoration-none"
                      href={"/faqs"}
                    >
                      {props?.language == true ? "FAQ" : "FAQ"}
                    </a>
                  </li>
                  {/* <li className="col d-flex justify-content-center">Find Talent</li> */}
                  <li className="col d-flex justify-content-center">
                    <a
                      className="text-dark text-decoration-none"
                      href="/about-us"
                    >
                      {props?.language == true ? "Rreth nesh" : "About us"}
                    </a>
                  </li>
                  <li className="col d-flex justify-content-center">
                    <a
                      className={isMobileMenuActive ? "text-dark text-decoration-none" : "d-none"}
                      href="/register"
                    >
                      {props?.language == true ? "Regjistrohu" : "Register"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4 handleGrid">
              <div className="d-flex justify-content-end gap-2">
                {/* <button className="SignUpBtn">Sign Up</button> */}
                {/* <button className="LogInBtn">Log In</button> */}
{/* 
                <ReactFlagsSelect
                  selected={props?.language == true ? "AL" : "US"}
                  onSelect={(code) => {
                    handleSelect(code);
                  }}
                  countries={allowedCountries}
                  showSelectedLabel={false}
                  showOptionLabel={false}
                /> */}
                <button
                  className="SignUpBtn"
                  onClick={() => (window.location.href = "/register")}
                >
                  {props?.language == true ? "Regjistrohu" : "Register"}
                </button>
              </div>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <span className="bar bg-primary"></span>
              <span className="bar bg-primary"></span>
              <span className="bar bg-primary"></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
// export default Header
const mapStateToProps = (state) => {
  return {
    language: state.data.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);