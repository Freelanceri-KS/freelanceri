import './login.scss'
import { IoChevronBack } from "react-icons/io5";
import Welcome from '../assets/images/welcome-txt.png'
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from 'react';
import Logo from "../assets/images/freelanceLogo.jpg"
import Subs from "../assets/images/registerRes.png"
import axios from '../axios';
import { toast, useToast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { connect } from "react-redux";
import { setLang } from "../redux/Functions/actions";
import ReCAPTCHA from "react-google-recaptcha";
// import ReCAPTCHA from "react-google-recaptcha-enterprise";
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select';

const Login = (props) => {
  const [viewportSize, setViewportSize] = useState(window.innerWidth);
  const [step, setStep] = useState(false)
  const [userType, setUserType] = useState("Freelancer");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false)
  const [profession, setProfession] = useState([])
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [multiStep, setMultiStep] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [sector, setSector] = useState('')
  const [jobEntries, setJobEntries] = useState([
    { title: '', company: '' },
  ]);
  const [educationEntries, setEducationEntries] = useState([
    { university: '', degree: '' }
  ]);
  
  const handleInputChange = (index, key, value, entriesType) => {
    const updatedEntries = [...(entriesType === 'job' ? jobEntries : educationEntries)];
    updatedEntries[index][key] = value;
    entriesType === 'job' ? setJobEntries(updatedEntries) : setEducationEntries(updatedEntries);
  };

  const handleAddEntry = (entriesType) => {
    if (entriesType === 'job') {
      setJobEntries([...jobEntries, { title: '', company: '' }]);
    } else {
      setEducationEntries([...educationEntries, { university: '', degree: '' }]);
    }
  };

  const handleJobTitleSelect = (selectedOptions) => {
    const selectedTitles = selectedOptions.map((option) => option.value);
    setSelectedJobTitles(selectedTitles);
  };
  console.log('selectedJobTitles', selectedJobTitles)
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
  function Validation() {
    if (userType == "Freelancer") {
      if (fullName == '' || email == '' || selectedJobTitles?.length == 0) {
        toast.info('Please fill all the information')
      }
      else {
        setMultiStep(2)
      }
    }
    else {
      if (fullName == '' || email == '' || sector == "" || PhoneNumber == "" || companyName == '') {
        toast.info('Please fill all the information')
      }
      else {
        setMultiStep(2)
      }
    }
  }
  const RegisterUser = (e) => {
    e.preventDefault();
    if (fullName == '' ||
      email == '' ||
      userType == "Freelancer" && selectedJobTitles == []
    ) {
      toast.warning('please fill all the information');
    }
    else if (captcha == false) {
      toast.warning('please complete the captcha')
    }
    else {
      setLoading(true);

      let Freelancer = {
        fullName: fullName,
        email: email,
        userType: userType,
        jobTitle: selectedJobTitles,
        recaptchaToken: captcha
      };

      let Employer = {
        fullName: fullName,
        email: email,
        userType: userType,
        companyName: companyName,
        phone: PhoneNumber,
        sektori: sector,
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
    switch (multiStep) {
      case 1:
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
                        {/* <form onSubmit={RegisterUser}> */}
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
                            onChange={(e) => setFullName(e.target.value)}
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
                                onChange={(e) => setCompanyName(e.target.value)}
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
                                onChange={(e) => setSector(e.target.value)}
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
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">
                            {props?.language == true
                              ? "Email adresa"
                              : "Email address"}
                          </label>
                          {userType === 'Freelancer' && (
                            <div className="mt-3">
                              <p>Select Profession:</p>
                              <div>
                                <div className="mt-3">
                                  <Select
                                    isMulti
                                    options={profession.map((el) => ({ value: el.category, label: el.category }))}
                                    onChange={handleJobTitleSelect}
                                    value={selectedJobTitles.map((title) => ({ value: title, label: title }))}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                            type="button"
                            onClick={() => Validation()}
                          >
                            {props?.language == true ? "Vazhdo" : "Next"}
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
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            </div>
          </div>
        );
      case 2:
        return (
          <div class="container-fluid ps-md-0">
            <div class="row g-0">
              <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      {userType == "Freelancer" ?
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true ? "Regjistrohu" : "Register!"}
                          </h1>
                          <strong>{props?.language == true ? "Eksperienca" : "Experience"}</strong>
                          <div>
                            {jobEntries.map((entry, index) => (
                              <div key={index} className="d-flex gap-2">
                                <div className="col-6 form-floating">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="title"
                                    value={entry.title}
                                    onChange={(e) => handleInputChange(index, 'title', e.target.value, 'job')}
                                  />
                                  <label htmlFor="title">
                                    {props?.language == true ? 'p.sh Web Zhvillues' : 'e.g Web Developer'}
                                  </label>
                                </div>
                                <div className="col-6 form-floating">
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="company"
                                    value={entry.company}
                                    onChange={(e) => handleInputChange(index, 'company', e.target.value, 'job')}
                                  />
                                  <label htmlFor="company">
                                    {props?.language == true ? 'Emri i Kompanise' : 'Company Name'}
                                  </label>
                                </div>
                              </div>
                            ))}
                            <button className="mt-2 mb-2" onClick={() => handleAddEntry('job')}>
                              Add More
                            </button>
                          </div>
                          <strong>{props?.language == true ? "Edukimi" : "Education"}</strong>

                          {educationEntries.map((entry, index) => (
                            <div key={index} className="d-flex gap-2">
                              <div className="col-6 form-floating">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="university"
                                  value={entry.university}
                                  onChange={(e) => handleInputChange(index, 'university', e.target.value, 'education')}
                                />
                                <label htmlFor="university">University or School</label>
                              </div>
                              <div className="col-6 form-floating">
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  placeholder="degree"
                                  value={entry.degree}
                                  onChange={(e) => handleInputChange(index, 'degree', e.target.value, 'education')}
                                />
                                <label htmlFor="degree">Degree</label>
                              </div>
                            </div>
                          ))}
                          <button className="mt-2" onClick={() => handleAddEntry('education')}>
                            Add More
                          </button>
                        </div>
                        :
                        <div className='row'>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="Website"
                              id="Website"
                              placeholder="Your Website"
                            />
                            <label for="Website">
                              {props?.language === true
                                ? "Website juaj"
                                : "Company Name"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="linkedIn"
                              id="linkedIn"
                              placeholder="linkedIn"
                            />
                            <label for="linkedIn">
                              {props?.language === true
                                ? "linkedIn"
                                : "linkedIn"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="instagram"
                              id="instagram"
                              placeholder="instagram"
                            />
                            <label for="instagram">
                              {props?.language === true
                                ? "instagram"
                                : "instagram"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              name="fb"
                              id="fb"
                              placeholder="Facebook"
                            />
                            <label for="Facebook">
                              {props?.language === true
                                ? "Facebook"
                                : "Facebook"}
                            </label>
                          </div>
                        </div>
                      }

                      {/* <button className='d-flex justify-content-center btn btn-md btn-primary'>Register</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            </div>
          </div>
        )
    }
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
                        {userType === 'Freelancer' && (
                          <div className="mt-3">
                            <p>Select Profession:</p>
                            <div>
                              <div className="mt-3">
                                <Select
                                  isMulti
                                  options={profession.map((el) => ({ value: el.category, label: el.category }))}
                                  onChange={handleJobTitleSelect}
                                  value={selectedJobTitles.map((title) => ({ value: title, label: title }))}
                                />
                              </div>
                            </div>
                          </div>
                        )}

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
