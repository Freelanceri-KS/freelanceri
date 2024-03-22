import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import maskgroup from "../../assets/images/maskgroup.png";
import { useDispatch } from "react-redux";
import { setLoggedIn, setToken } from "../../redux/Functions/actions";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch(loginUser(email, password)).then(res => {
    //   setLoading(false);
    //   toast.success("Login successful!");
    // }).catch(err => {
    //   setLoading(false);
    //   toast.error("Login failed. Please try again later.");
    // })
    axios
      .post("https://weak-lime-squid-fez.cyclic.app/freelancer/login", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        toast.success("Login successful!");
        dispatch(setToken(response.data.token));
        setLoggedIn(true)
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login failed. Please try again later.");
      });
  };

  return (
    <div className="login-page-container" style={{ paddingTop: "40px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="container-fluid ps-md-0">
            <div className="row g-0">
              <div className="col-md-4 ">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h1 className="text-header mb-4">Log In</h1>
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
                            <button
                              type="button"
                              className="btn btn-link forgot-password-btn"
                              onClick={() => {}}
                            >
                              Forgot password?
                            </button>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            {loading ? "Logging in..." : "Continue"}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-none d-md-flex col-md-6"
                style={{ paddingLeft: "50px", paddingRight: "50px" }}
              >
                <img
                  className="rightImage"
                  src={maskgroup}
                  alt="maskgroup"
                  style={{
                    width: "970px",
                    height: "800px",
                    paddingTop: "80px",
                    paddingRight: "120px",
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
