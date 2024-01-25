import './login.scss'
import { IoChevronBack } from "react-icons/io5";
import Welcome from '../assets/images/welcome-txt.png'
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from 'react';
import Logo from "../assets/images/freelanceLogo.jpg"
import Subs from "../assets/images/registerRes.png"
import axios from '../axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { connect } from "react-redux";
import { setLang } from "../redux/Functions/actions";
import ReCAPTCHA from "react-google-recaptcha";
// import ReCAPTCHA from "react-google-recaptcha-enterprise";
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Login = (props) => {
  const [viewportSize, setViewportSize] = useState(window.innerWidth);
  const [step, setStep] = useState(false)
  const [userType, setUserType] = useState("Freelancer");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false)
  const [profession, setProfession] = useState([])
  const [PhoneNumber, setPhoneNumber] = useState("")
  const navigate = useNavigate('')

  function CaptchaValidation(data) {
    console.log('captcha', data)
    setCaptcha(data)

  }
  // const handleGoogleLogin = (googleUser) => {
  //   const profile = googleUser.getBasicProfile();
  //   const googleUserData = {
  //     fullName: profile.getName(),
  //     email: profile.getEmail(),
  //     userType: userType,
  //     recaptchaToken: captcha,
  //   };
  // };
  const getProffesion = () => {
    axios.get('/profession').then(
      data => {
        setProfession(data.data)
      }
    ).catch(err => {
      console.log(err)
    })
  }
  const RegisterUser = (e) => {
    e.preventDefault();
    if (e?.target?.fullName?.value == '' ||
      e?.target?.fullName?.value == undefined ||
      e?.target?.fullName?.value == null ||
      e?.target?.email?.value == '' ||
      e?.target?.email?.value == undefined ||
      e?.target?.email?.value == null ||
      PhoneNumber == "" ||
      e?.target?.jobTitle?.value == ""
    ) {
      toast.warning('please fill all the information');
    }
    else if (captcha == false) {
      toast.warning('please complete the captcha')
    }
    else {
      setLoading(true); // Set loading to true when the request starts

      let Freelancer = {
        fullName: e?.target?.fullName?.value,
        email: e?.target?.email?.value,
        userType: userType,
        jobTitle: e?.target?.jobTitle?.value,
        recaptchaToken: captcha
      };
      let Employer = {
        fullName: e?.target?.fullName?.value,
        email: e?.target?.email?.value,
        userType: userType,
        companyName: e?.target?.companyName?.value,
        phone: PhoneNumber,
        sektori: e?.target?.sector?.value,
        recaptchaToken: captcha
      };

      axios.post('/trial', userType == "Freelancer" ? Freelancer : Employer)
        .then(data => {
          console.log(data);
          // navigate('/');
          window.location.href = '/welcome'
        })
        .catch(err => {
          console.log('captchaerr', err);
          toast.warning(err?.response?.data?.error)
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    getProffesion()
  }, [])

  window.addEventListener("resize", () => {
    setViewportSize(window.innerWidth);
  });
  if (viewportSize > 768) {
    return (
      <div class="container-fluid ps-md-0">
        <div class="row g-0">
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h1 class="login-heading mb-4">
                      {props?.language == true ? "Regjistrohu!" : "Register!"}
                    </h1>
                    <form onSubmit={RegisterUser}>
                      <div className="row mb-2">
                        <div className="col-6">
                          <button
                            type="button"
                            onClick={() => setUserType("Freelancer")}
                            className={
                              userType == "Freelancer"
                                ? `userTypeBtn2`
                                : "userTypeBtn"
                            }
                          >
                            Freelancer
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            onClick={() => setUserType("Employer")}
                            className={
                              userType == "Employer"
                                ? `userTypeBtn2 actives`
                                : "userTypeBtn"
                            }
                          >
                            {props?.language == true
                              ? "Punëdhenës"
                              : "Employer"}
                          </button>
                        </div>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                        />
                        <label for="floatingPassword">
                          {props?.language == true
                            ? "Emri i plote"
                            : "Full Name"}
                        </label>
                      </div>

                      {userType === "Employer" && (
                        <>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="companyName"
                              id="companyName"
                              placeholder="Company Name"
                            />
                            <label for="companyName">
                              {props?.language === true
                                ? "Emri i kompanisë"
                                : "Company Name"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <PhoneInput
                              inputStyle={{ width: "100%", height: '58px', border: 'var(--bs-border-width) solid var(--bs-border-color)' }}
                              buttonStyle={{ zIndex: '999999' }}
                              country={'xk'}
                              value={PhoneNumber}
                              onChange={(e) => setPhoneNumber(e)}
                            />
                          </div>

                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="sector"
                              id="sector"
                              placeholder="Sector"
                            />
                            <label for="phone">
                              {props?.language === true
                                ? "Sektori"
                                : "Sector"}
                            </label>
                          </div>
                        </>
                      )}
                      <div class="form-floating mb-3">
                        <input
                          required
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">
                          {props?.language == true
                            ? "Email adresa"
                            : "Email address"}
                        </label>
                        {userType == 'Freelancer' ?
                          <div class="form-floating mt-3">
                            <select id='jobTitle' name='jobTitle' className='form-select'>
                              <option value="">Select Profession</option>
                              {profession?.map(el => {
                                return <option value={el?.category}>{el?.category}</option>
                              })}
                            </select>
                          </div>
                          :
                          ""
                        }

                      </div>
                      <div className="d-flex mb-2">
                        <ReCAPTCHA
                          // size="invisible"
                          sitekey="6Le40lUpAAAAAGqI7r3xdzy8a1Wp3kUcV6MKkd30"
                          onChange={CaptchaValidation}
                        />
                      </div>
                      <div class="d-grid">
                        <button
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                          disabled={loading || captcha == false}
                        >
                          {props?.language == true ? "REGJISTROHU" : "SIGN UP"}
                        </button>
                        {/* <div className='d-flex justify-content-center'>
                          <h5>Or</h5>
                        </div>
                        <div className="google-signup">
                          <GoogleOAuthProvider>
                            <GoogleLogin
                              onSuccess={handleGoogleLogin}
                              onFailure={(error) => console.error('Google Sign Up failed', error)}
                              clientId="your-google-client-id"
                              text='signup_with'
                            />
                          </GoogleOAuthProvider>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
        {step == true ? (
          <>
            <div className="logores">
              <img src={Logo} className="logoja" />
            </div>
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h1 class="login-heading mb-4">
                      {props?.language == true ? "Regjistrohu!" : "Register!"}
                    </h1>
                    <form onSubmit={RegisterUser}>
                      <div className="row mb-2">
                        <div className="col-6">
                          <button
                            type="button"
                            onClick={() => setUserType("Freelancer")}
                            className={
                              userType == "Freelancer"
                                ? `userTypeBtn2`
                                : "userTypeBtn"
                            }
                          >
                            Freelancer
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            onClick={() => setUserType("Employer")}
                            className={
                              userType == "Employer"
                                ? `userTypeBtn2 actives`
                                : "userTypeBtn"
                            }
                          >
                            {props?.language == true
                              ? "Punëdhenës"
                              : "Employer"}
                          </button>
                        </div>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          required
                          type="text"
                          class="form-control"
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                        />
                        <label for="floatingPassword">
                          {props?.language == true
                            ? "Emri i plote"
                            : "Full Name"}
                        </label>
                      </div>

                      {userType === "Employer" && (
                        <>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="companyName"
                              id="companyName"
                              placeholder="Company Name"
                            />
                            <label for="companyName">
                              {props?.language === true
                                ? "Emri i kompanisë"
                                : "Company Name"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <PhoneInput
                              inputStyle={{ width: "100%", height: '58px', border: 'var(--bs-border-width) solid var(--bs-border-color)' }}
                              buttonStyle={{ zIndex: '999999' }}
                              country={'xk'}
                              value={PhoneNumber}
                              onChange={(e) => setPhoneNumber(e)}
                            />
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="sector"
                              id="sector"
                              placeholder="Sector"
                            />
                            <label for="phone">
                              {props?.language === true
                                ? "Sektori"
                                : "Sector"}
                            </label>
                          </div>
                        </>
                      )}
                      <div class="form-floating mb-3">
                        <input
                          required
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">
                          {props?.language == true
                            ? "Email adresa"
                            : "Email address"}
                        </label>
                        {userType == 'Freelancer' ?
                          <div class="form-floating mt-3">
                            <select id='jobTitle' name='jobTitle' className='form-select'>
                              <option value="">Select Profession</option>
                              {profession?.map(el => {
                                return <option value={el?.category}>{el?.category}</option>
                              })}
                            </select>
                          </div>
                          :
                          ""
                        }

                      </div>
                      <div className="d-flex mb-2">
                        <ReCAPTCHA
                          // size="invisible"
                          sitekey="6Le40lUpAAAAAGqI7r3xdzy8a1Wp3kUcV6MKkd30"
                          onChange={CaptchaValidation}
                        />
                      </div>
                      <div class="d-grid">
                        <button
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                          disabled={loading || captcha == false}
                        >
                          {props?.language == true ? "REGJISTROHU" : "SIGN UP"}
                        </button>
                        {/* <div className='d-flex justify-content-center'>
                          <h5>Or</h5>
                        </div>
                        <div className="google-signup">
                          <GoogleOAuthProvider>
                            <GoogleLogin
                              onSuccess={handleGoogleLogin}
                              onFailure={(error) => console.error('Google Sign Up failed', error)}
                              clientId="your-google-client-id"
                              text='signup_with'
                            />
                          </GoogleOAuthProvider>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container">
            <div className="col logores">
              <img src={Logo} className="logoja" />
            </div>
            <img src={Subs} alt="subsriptions" className="subs" />
            <div className="buttons mb-3">
              <button className="butoniRegister" onClick={() => setStep(true)}>
                Register Now!
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

// export default Home;
const mapStateToProps = (state) => {
  return {
    language: state.data.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
