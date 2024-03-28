import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import maskgroup from "../../assets/images/maskgroup.png";
import { useDispatch } from "react-redux";
import { setLoggedIn, setToken } from "../../redux/Functions/actions";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { connect } from "react-redux";
// import { saveDataToLocalStorage } from "./localStorage";
import { saveDataToLocalStorage } from "../../Helpers/localStorage";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://weak-lime-squid-fez.cyclic.app/freelancer/login", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        const { freelancer, token } = response.data;

        toast.success("Login successful!");
        dispatch(setToken(response.data.token));

        // Save user data to local storage after login
        saveDataToLocalStorage({
          userData: {
            firstName: freelancer.firstName,
            lastName: freelancer.lastName,
            email: freelancer.email,
            city: freelancer.city,
            profession: freelancer.profession,
            skills: freelancer.skills,
            education: freelancer.education,
            experiences: freelancer.experiences,
          },
        });

        console.log(saveDataToLocalStorage());
        console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️");
        props?.setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login failed. Please try again later.");
      });
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="left-wrap">
          <h3 className="left-h3">Log in</h3>
          <form onSubmit={handleSubmit}>
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

              <p style={{float:"right",marginBottom:"3em"}}>Forgot password?</p>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? "Logging in..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
      <div className="right">
        <img
          className="right-img"
          src={maskgroup}
          alt="maskgroup"
        />
      </div>
    </div>
  );
};

// export default LoginPage;
const mapStateToProps = (state) => {
  return {
    // language: state.data.language,
    isLoggedin: state.data.isLoggedin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setLang: (data) => dispatch(setLang(data)),
    setLoggedIn: (data) => {
      dispatch(setLoggedIn(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
