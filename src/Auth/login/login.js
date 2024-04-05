import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import maskgroup from "../../assets/images/maskgroup.png";
import { useDispatch } from "react-redux";
import { setLoggedInFreelancer, setLoggedInBusiness, setToken } from "../../redux/Functions/actions";
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
  const [loginEndpoint, setLoginEndpoint] = useState(null);
  const [isFreelancerSelected, setIsFreelancerSelected] = useState(true);
  const [isBusinessSelected, setIsBusinessSelected] = useState(false);

  const handleFreelancerClick = () => {
    setLoginEndpoint("https://weak-lime-squid-fez.cyclic.app/freelancer/login");
    setIsFreelancerSelected(true);
    setIsBusinessSelected(false);
  };

  const handleBusinessClick = () => {
    setLoginEndpoint("https://weak-lime-squid-fez.cyclic.app/business/login");
    setIsFreelancerSelected(false);
    setIsBusinessSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginEndpoint) {
      toast.error("Please select Freelancer or Business.");
      return;
    }
    setLoading(true);
    axios
      .post(loginEndpoint, { email, password })
      .then((response) => {
        setLoading(false);
        const { freelancer } = response.data;
        const { business } = response.data;
        toast.success("Login successful!");
        dispatch(setToken(response.data.token));
        if (loginEndpoint === "https://weak-lime-squid-fez.cyclic.app/freelancer/login") {
          saveDataToLocalStorage({
            userData: {
              firstName: freelancer?.firstName,
              lastName: freelancer?.lastName,
              email: freelancer?.email,
              city: freelancer?.city,
              profession: freelancer?.profession,
              skills: freelancer?.skills,
              education: freelancer?.education,
              experiences: freelancer?.experiences,
              token: response.data.token
            },
          });
          props?.setLoggedInFreelancer(true);
          console.log(props.isLoggedinBusiness); // Add this line
          navigate("/");

        } else {
          saveDataToLocalStorage({
            userData: {
              firstName: business?.firstName,
              lastName: business?.lastName,
              email: business?.email,
              city: business?.city,
              companyName: business?.companyName,
              companyType: business?.companyType,
              role: business?.role,
              phone: business?.phone,
              website: business?.website,
              token: response.data.token,
            }
          });
          props?.setLoggedInBusiness(true);
          console.log(props.setLoggedInBusiness())
          navigate("/business-dashboard");

        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error);
      });
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="left-wrap">
          <h3 className="left-h3">Log in as</h3>
          <div className="button-group">
            <button
              onClick={handleFreelancerClick}
              style={{
                backgroundColor: isFreelancerSelected ? "#455bef" : "white",
                color: isFreelancerSelected ? "white" : "#455bef",
              }}
              className="btn btn-primary left-btn"
            >
              Freelancer
            </button>
            <button
              onClick={handleBusinessClick}
              style={{
                backgroundColor: isBusinessSelected ? "#455bef" : "white",
                color: isBusinessSelected ? "white" : "#455bef",
              }}
              className="btn btn-primary right-btn"
            >
              Business
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
              <p style={{ float: "right", marginBottom: "3em", color: "#363636", fontWeight: "500" }}>
                Forgot password?
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
    isLoggedInBusiness: state.data.isLoggedinBusiness
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (data) => {
      dispatch(setToken(data))
    },
    setLoggedInFreelancer: (data) => {
      dispatch(setLoggedInFreelancer(data));
    },
    setLoggedInBusiness: (data) => {
      dispatch(setLoggedInBusiness(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
