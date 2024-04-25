import "./regTest.scss";
// import { IoChevronBack } from "react-icons/io5";
// import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
// import Logo from "../assets/images/freelanceLogo.jpg";
// import Subs from "../assets/images/registerRes.png";
import axios from "../../../axios";
import { toast, useToast } from "react-toastify";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setLang } from "../../../redux/Functions/actions";
import ReCAPTCHA from "react-google-recaptcha";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import registerImg from "../../../assets/images/registerImg.jpg";

const TestShit = (props) => {
  const [viewportSize, setViewportSize] = useState(window.innerWidth);
  const [step, setStep] = useState(false);
  const [userType, setUserType] = useState("Freelancer");
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [profession, setProfession] = useState([]);
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [multiStep, setMultiStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sector, setSector] = useState("");
  const [website, setWebsite] = useState("");
  const [socials, setSocials] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  const [jobEntries, setJobEntries] = useState([{ title: "", company: "" }]);
  const [educationEntries, setEducationEntries] = useState([
    { institution: "", title: "" },
  ]);
  console.log(socials[0]);
  const handleInputChange = (index, key, value, entriesType) => {
    const updatedEntries = [
      ...(entriesType === "job" ? jobEntries : educationEntries),
    ];
    updatedEntries[index][key] = value;
    entriesType === "job"
      ? setJobEntries(updatedEntries)
      : setEducationEntries(updatedEntries);
  };

  const handleAddEntry = (entriesType) => {
    if (entriesType === "job") {
      setJobEntries([...jobEntries, { title: "", company: "" }]);
    } else {
      setEducationEntries([
        ...educationEntries,
        { institution: "", title: "" },
      ]);
    }
  };
  const handleJobTitleSelect = (selectedOptions) => {
    const selectedTitles = selectedOptions.map((option) => option.value);
    setSelectedJobTitles(selectedTitles);
  };
  function CaptchaValidation(data) {
    setCaptcha(data);
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
    axios
      .get("/profession")
      .then((data) => {
        setProfession(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function Validation() {
    if (userType == "Freelancer") {
      if (firstName == "" || lastName == "" || email == "" || selectedJobTitles?.length == 0) {
        toast.info("Please fill all the information");
      } else {
        setMultiStep(2);
      }
    } else {
      if (
        firstName == "" ||
        lastName == "" ||
        email == "" ||
        sector == "" ||
        PhoneNumber == "" ||
        companyName == ""
      ) {
        toast.info("Please fill all the information");
      } else {
        setMultiStep(2);
      }
    }
  }

  function RegisterUser() {
    setLoading(true);
    let Freelancer = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userType: userType,
      profession: selectedJobTitles,
      education: educationEntries,
      experiences: jobEntries,
    };

    let Employer = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      companyName: companyName,
      phone: PhoneNumber,
      sektori: sector,
      website: website,
      socials: socials[0],
    };
    axios
      .post("/business/signup", userType == "Freelancer" ? Freelancer : Employer)
      .then((data) => {
        console.log(data);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log("captchaerr", err);
        toast.warning(err?.response?.data?.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getProffesion();
  }, []);
  window.addEventListener("resize", () => {
    setViewportSize(window.innerWidth);
  });
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
                        {props?.language == true
                          ? "Regjistrohu!"
                          : "Register!"}
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
                      <div class="form-floating mb-3 d-flex m-1">
                        <input
                          required
                          type="text"
                          class="form-control"
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          className="name-input"
                          id="name-input-1"

                        />
                        <input
                          required
                          type="text"
                          class="form-control"
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last Name"
                          className="name-input"
                          id="name-input-2"
                        />

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
                              inputStyle={{
                                width: "100%",
                                height: "58px",
                                border:
                                  "var(--bs-border-width) solid var(--bs-border-color)",
                              }}
                              buttonStyle={{ zIndex: "999999" }}
                              country={"xk"}
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
                        {userType === "Freelancer" && (
                          <div className="mt-3">
                            <p>Select Profession:</p>
                            <div>
                              <div className="mt-3">
                                <Select
                                  isMulti
                                  options={profession.map((el) => ({
                                    value: el._id,
                                    label: el.category,
                                  }))}
                                  onChange={handleJobTitleSelect}
                                  value={selectedJobTitles.map((title) => ({
                                    value: title,
                                    label: title,
                                  }))}
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
                      (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true
                              ? "Regjistrohu"
                              : "Register!"}
                          </h1>
                          <strong>
                            {props?.language == true
                              ? "Eksperienca"
                              : "Experience"}
                          </strong>
                          <div>
                            {jobEntries.map((entry, index) => (
                              <div key={index} className="d-flex gap-2">
                                <div className="col-6 form-floating">
                                  <input
                                    required
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder="title"
                                    value={entry.title}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "title",
                                        e.target.value,
                                        "job"
                                      )
                                    }
                                  />
                                  <label htmlFor="title">
                                    {props?.language == true
                                      ? " Web Zhvillues"
                                      : " Web Developer"}
                                  </label>
                                </div>
                                <div className="col-6 form-floating">
                                  <input
                                    required
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder="company"
                                    value={entry.company}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "company",
                                        e.target.value,
                                        "job"
                                      )
                                    }
                                  />
                                  <label htmlFor="company">
                                    {props?.language == true
                                      ? "Emri i Kompanise"
                                      : "Company Name"}
                                  </label>
                                </div>
                              </div>
                            ))}
                            <div
                              role="button"
                              className="card addbtn mt-2 mb-1 text-primary"
                              onClick={() => handleAddEntry("job")}
                            >
                              Add More +
                            </div>
                          </div>
                          <strong>
                            {props?.language == true ? "Edukimi" : "Education"}
                          </strong>

                          {educationEntries.map((entry, index) => (
                            <div key={index} className="d-flex gap-2">
                              <div className="col-6 form-floating">
                                <input
                                  required
                                  type="text"
                                  className="form-control mt-2"
                                  placeholder="institution"
                                  value={entry.institution}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "institution",
                                      e.target.value,
                                      "education"
                                    )
                                  }
                                />
                                <label htmlFor="institution">
                                  institution or School
                                </label>
                              </div>
                              <div className="col-6 form-floating">
                                <input
                                  required
                                  type="text"
                                  className="form-control mt-2"
                                  placeholder="title"
                                  value={entry.title}
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      "title",
                                      e.target.value,
                                      "education"
                                    )
                                  }
                                />
                                <label htmlFor="title">title</label>
                              </div>
                            </div>
                          ))}
                          <div
                            role="button"
                            className="card addbtn mt-2 mb-1 text-primary"
                            onClick={() => handleAddEntry("education")}
                          >
                            Add More +
                          </div>
                        </div>
                      ) :
                      (
                        <div className="row">
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setWebsite(e.target.value)}
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
                              onChange={(e) =>
                                setSocials((prevSocials) => [
                                  {
                                    ...prevSocials[0],
                                    linkedin: e.target.value,
                                  },
                                ])
                              }
                              placeholder="LinkedIn"
                            />
                            <label for="linkedIn">
                              {props?.language === true
                                ? "LinkedIn"
                                : "LinkedIn"}
                            </label>
                          </div>

                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) =>
                                setSocials((prevSocials) => [
                                  {
                                    ...prevSocials[0],
                                    instagram: e.target.value,
                                  },
                                ])
                              }
                              placeholder="Instagram"
                            />
                            <label for="instagram">
                              {props?.language === true
                                ? "Instagram"
                                : "Instagram"}
                            </label>
                          </div>

                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) =>
                                setSocials((prevSocials) => [
                                  {
                                    ...prevSocials[0],
                                    facebook: e.target.value,
                                  },
                                ])
                              }
                              placeholder="Facebook"
                            />
                            <label for="Facebook">
                              {props?.language === true
                                ? "Facebook"
                                : "Facebook"}
                            </label>
                          </div>
                        </div>
                      )}

                    <div class="d-grid justify-content-center">
                      <button
                        class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        onClick={() => RegisterUser()}
                      >
                        {props?.language == true ? "REGJISTROHU" : "SIGN UP"}
                      </button>
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

};

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
export default connect(mapStateToProps, mapDispatchToProps)(TestShit);
