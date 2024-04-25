import React, { useState, useEffect } from "react";
import axios from "axios";
import RegImg from "../../assets/images/register.png";
import { toast } from "react-toastify";
import "./registerPage.scss";

const RegisterPage = (props) => {
  const [step, setStep] = useState(1);
  const [stepBussines, setStepBussines] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [socials, setSocials] = useState("");
  const [skills, setSkills] = useState("");
  const [experiences, setExperiences] = useState("");
  const [education, setEducation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [preferedRate, setPreferedRate] = useState("");
  const [prederdDurationEng, setPrederdDurationEng] = useState("");

  useEffect(() => {
    getProfession();
  }, []);

  const getProfession = () => {
    axios
      .get("/profession")
      .then((response) => {
        setProfession(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Define an array of steps with required fields
  const steps = [
    { fields: ["firstName", "lastName", "email", "password"] },
    { fields: ["city", "profession", "socials"] },
    {
      fields: ["skills", "experiences", "education"],
    },
  ];

  // Define an array of steps with required fields for business
  const stepsBusiness = [{ fields: ["firstName", "lastName", "email"] }];

  // Define a function to validate email using regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmitStep = (e, stepIndex) => {
    e.preventDefault();

    const requiredFields = steps[stepIndex].fields;
    const emptyFields = requiredFields.filter((field) => !eval(field));

    if (emptyFields.length === 0) {
      if (stepIndex === 0 && !validateEmail(email)) {
        toast.info("Please enter a valid email address.");
      } else {
        setStep(step + 1); // Proceed to the next step
      }
    } else {
      const emptyFieldNames = emptyFields
        .map((field) => {
          return field === "mainSkills"
            ? "Main Skills"
            : field.charAt(0).toUpperCase() + field.slice(1);
        })
        .join(", ");
      toast.info(
        `Please fill in all the information for ${steps[stepIndex].name}. Missing fields: ${emptyFieldNames}`
      );
    }
  };

  const handleSubmitStepBusiness = (e, stepIndex) => {
    e.preventDefault();

    const requiredFields = stepsBusiness[stepIndex].fields;
    const emptyFields = requiredFields.filter((field) => !eval(field));

    if (emptyFields.length === 0) {
      if (stepIndex === 0 && !validateEmail(email)) {
        toast.info("Please enter a valid email address.");
      } else {
        setStepBussines(stepBussines + 1); // Proceed to the next step
      }
    } else {
      const emptyFieldNames = emptyFields
        .map((field) => {
          return field === "mainSkills"
            ? "Main Skills"
            : field.charAt(0).toUpperCase() + field.slice(1);
        })
        .join(", ");
      toast.info(
        `Please fill in all the information for ${stepsBusiness[stepIndex].name}. Missing fields: ${emptyFieldNames}`
      );
    }
  };

  const handleSubmitStep1 = (e) => {
    handleSubmitStep(e, 0);
  };

  const handleSubmitStepBussines1 = (e) => {
    handleSubmitStepBusiness(e, 0);
  };

  const handleSubmitStep2 = (e) => {
    handleSubmitStep(e, 1);
  };

  const handleSubmitStep3 = (e) => {
    handleSubmitStep(e, 2);
  };
  const profile = {
    firstName: "TestBimi",
    lastName: "Bajrami",
    email: "bimiTest@gmail.com",
    password: "Supreme1.",
    city: "Prishtina",
    profession: 454,
    //save
    skills: ["NodeJS", "React", "Swift"],
    socials: [
      {
        linkedin: "asd",
      },
    ],
    // experiences: [
    //   {
    //     title: "Developer",
    //     company: "Freelanceri",
    //     startDate: "2020-01-01",
    //     endDate: "2022-12-31",
    //     cmp: "Freelanceri",
    //     titull: "Developer",
    //   },
    // ],
    education: [
      {
        title: "Bachelor",
        institution: "Universum International College",
        startDate: "2016-09-01",
        endDate: "2020-06-30",
        uni: "Universum International College",
        titull: "Bachelor",
      },
      {
        title: "Web Developer",
        institution: "AAB College",
        startDate: "2020-09-01",
        endDate: "2022-06-30",
        uni: "AAB College",
        titull: "Web Developer",
      },
    ],
    role: 0,
  };

  console.log(profile);

  const handleSubmitFinal = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    // if (portfolio) {
    setLoading(true);
    let DataUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      city: city,
      profession: profession,
      socials: socials,
      skills: skills,
      experiences: experiences,
      education: education,
      companyName: companyName,
      companyType: companyType,
      phone: phone,
      website: website,
      preferedRate: preferedRate,
      prederdDurationEng: prederdDurationEng,
    };
    //   console.log(DataUser);
    const response = await axios.post(
      "https://weak-lime-squid-fez.cyclic.app/freelancer/signup",
      DataUser
    );
    setLoading(false);
    console.log("response", response.data);
    return;

    // Api call qitu e shtin Data User mi qu databaz
    // } else {
    //   alert("Please fill in all required fields.");
    // }
  };

  const [role, setRole] = useState("freelancer");

  // Rendering the form based on the current step
  return (
    <div className="register-page">
      <div className="left">
        <div class="col-md-9 col-lg-8 mx-auto">
          <h1 class="login-heading mb-4">
            {props?.language == true ? "Regjistrohu si" : "Register as"}
          </h1>
          <div className="primary-buttons">
            <button
              onClick={() => setRole("freelancer")}
              style={{
                backgroundColor: role === "freelancer" ? "#455bef" : "white",
                color: role === "freelancer" ? "white" : "#455bef",
              }}
              className="btn-primary left-btn"
            >
              Freelancer
            </button>
            <button
              onClick={() => setRole("business")}
              style={{
                backgroundColor: role === "business" ? "#455bef" : "white",
                color: role === "business" ? "white" : "#455bef",
              }}
              className="btn-primary right-btn"
            >
              Business
            </button>
          </div>
        </div>

        {role === "freelancer" && (
          <>
            {step === 1 && (
              <div class="col-md-9 col-lg-8 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Full Name"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Emri i plote" : "Full Name"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Mbiemri" : "Last Name"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Email Address" : "Email"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Fjalekalimi" : "Password"}
                  </label>
                </div>
                <form onSubmit={handleSubmitStep1}>
                  {/* Step 1 form fields */}

                  <button type="submit" className="register-page-btn">
                    Continue
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div class="col-md-9 col-lg-8 mx-auto">
                <h1 class="login-heading mb-4">
                  {props?.language == true ? "More about you !" : "More about"}
                </h1>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Qyteti" : "City"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="Profession"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Profesioni" : "Profession"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setSocials(e.target.value)}
                    placeholder="Socials"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Rrjetet sociale" : "Socials"}
                  </label>
                </div>

                <form onSubmit={handleSubmitStep2}>
                  {/* Step 2 form fields */}
                  <button type="submit">Continue</button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div class="col-md-9 col-lg-8 mx-auto">
                <h1 class="login-heading mb-4">
                  {props?.language == true ? "More about you !" : "More about"}
                </h1>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Skills"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Aftesite" : "Skills"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Experiences"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Eksperienca" : "Experiences"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Education"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Edukimi" : "Education"}
                  </label>
                </div>
                <form onSubmit={handleSubmitFinal}>
                  {/* Final step form fields */}
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </>
        )}

        {role === "business" && (
          <>
            {stepBussines === 1 && (
              <div class="col-md-9 col-lg-8 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Full Name"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Emri i plote" : "Full Name"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Mbiemri" : "Last Name"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Email Address" : "Email"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Fjalekalimi" : "Password"}
                  </label>
                </div>
                <form onSubmit={handleSubmitStepBussines1}>
                  {/* Step 1 form fields */}

                  <button type="submit" className="register-page-btn">
                    Continue
                  </button>
                </form>
              </div>
            )}
            {stepBussines === 2 && (
              <div class="col-md-9 col-lg-8 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Qyteti" : "City"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                  />
                  <label for="floatingPassword">
                    {props?.language == true
                      ? "Emri i kompanise"
                      : "Company Name"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setCompanyType(e.target.value)}
                    placeholder="Company Type"
                  />
                  <label for="floatingPassword">
                    {props?.language == true
                      ? "Lloji i kompanise"
                      : "Company Type"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Telefoni" : "Phone"}
                  </label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    required
                    type="text"
                    class="form-control"
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Website"
                  />
                  <label for="floatingPassword">
                    {props?.language == true ? "Website" : "Website"}
                  </label>
                </div>
                <form onSubmit={handleSubmitStepBussines1}>
                  {/* Step 1 form fields */}

                  <button type="submit" className="register-page-btn">
                    Continue
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
      <div className="right">
        <div className="right-img-placeholder">
          {/* <img src={RegImg} alt="Register Image" /> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
