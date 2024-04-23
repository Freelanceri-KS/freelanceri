import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import maskgroup from "../../assets/images/register.png";
import { useDispatch } from "react-redux";
import {
  setLoggedInFreelancer,
  setLoggedInBusiness,
  setToken,
  setLang
} from "../../redux/Functions/actions";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { connect } from "react-redux";
import { saveDataToLocalStorage } from "../../Helpers/localStorage";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState("freelancer");

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      selectedUserType === "freelancer"
        ? "https://weak-lime-squid-fez.cyclic.app/freelancer/login"
        : "https://weak-lime-squid-fez.cyclic.app/business/login";

    try {
      setLoading(true);
      const response = await axios.post(endpoint, { email, password });
      setLoading(false);

      const userData =
        selectedUserType === "freelancer"
          ? response.data.freelancer
          : response.data.business;

      toast.success("Login successful!");
      dispatch(setToken(response.data.token));

      // Save the userData to localStorage
      localStorage.setItem("userData", JSON.stringify({
        ...userData,
        token: response.data.token,
      }));

      if (selectedUserType === "freelancer") {
        props.setLoggedInFreelancer(true);
        navigate("/");
      } else {
        props.setLoggedInBusiness(true);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "An error occurred during login.");
    }
  };



  return (
    <div className="login-page">
      <div className="left">
        <div className="left-wrap">
          <h3 className="left-h3">{props?.language == true ? "Kyçu si" : "Log in as"}</h3>
          <div className="button-group">
            <button
              onClick={() => handleUserTypeSelect("freelancer")}
              style={{
                backgroundColor:
                  selectedUserType === "freelancer" ? "#455bef" : "white",
                color: selectedUserType === "freelancer" ? "white" : "#455bef",
              }}
              className="btn btn-primary left-btn"
            >
              {props?.language == true ? "Freelancer" : "Freelancer"}
            </button>
            <button
              onClick={() => handleUserTypeSelect("business")}
              style={{
                backgroundColor:
                  selectedUserType === "business" ? "#455bef" : "white",
                color: selectedUserType === "business" ? "white" : "#455bef",
              }}
              className="btn btn-primary right-btn"
            >
              {props?.language == true ? "Biznes" : "Business"}

            </button>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-floating mb-3">
              <input
                required
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
              <p
                style={{
                  float: "right",
                  marginBottom: "3em",
                  color: "#363636",
                  fontWeight: "500",
                }}
              >
                {props?.language == true ? "Keni harruar fjalëkalimin?" : "Forgot password?"}

              </p>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? "Logging in..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
      <div className="right">
        <img className="right-img" src={maskgroup} alt="maskgroup" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedinFreelancer: state.data.isLoggedinFreelancer,
    isLoggedInBusiness: state.data.isLoggedinBusiness,
    language: state.data.language,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (data) => {
      dispatch(setToken(data));
    },
    setLoggedInFreelancer: (data) => {
      dispatch(setLoggedInFreelancer(data));
    },
    setLoggedInBusiness: (data) => {
      dispatch(setLoggedInBusiness(data));
    },
    setLang: (data) => dispatch(setLang(data)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
