import './trial.scss';
import { IoChevronBack } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import CreateAnAccount from "../../assets/images/loginImg.png";
import loginImg from "../../assets/images/loginImg.png";


const Trial = ()=>{
    return (
      <div className="trial-wrapper">
        <div className="row">
          <div className="col-sm-6">
            <div className="left-side">
              <div className="go-back">
                <IoChevronBack size={40} className="icon" />
                <p className="icon-text">Go Back</p>
              </div>
              <div className="main-input-sec">
                <img src={CreateAnAccount} alt="" />
                <input type="text" name="" id="" placeholder="Full name" />{" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Example@email.com"
                />{" "}
                <input type="text" name="" id="" placeholder="Password" />{" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Repeat Password"
                />
                <div className="forget-password">
                  <div className="rm-checkbox">
                    <input type="checkbox" name="rm" id="checkbox" />
                    <p className="rm-txt">Remember me?</p>
                  </div>
                  <p>Forgot password?</p>
                </div>
                <button type="button" className="loginBtn">
                  Sign in
                </button>
                <p className="do-not-have-an-account">
                  I already have an account{" "}
                  <span style={{ color: "#455bef", fontWeight: "bold" }}>
                    Login
                  </span>
                </p>
                <div className="or">
                  <hr />
                  <p className="or-p">or</p>
                  <hr />
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={loginImg} alt="Login_image" className="loginImg" />
          </div>
        </div>
      </div>
    );
}

export default Trial;