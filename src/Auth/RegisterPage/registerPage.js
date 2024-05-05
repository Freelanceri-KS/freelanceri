import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import "./registerPage.scss";
import { useNavigate } from "react-router-dom";


const RegisterPage = (props) => {
  const [step, setStep] = useState(1);
  const [stepBussines, setStepBussines] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState([]);
  const [city, setCity] = useState("");
  const [skills, setSkills] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [socials, setSocials] = useState({ linkedIn: "", github: "", behance: "" });
  const [education, setEducation] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");


  const navigate = useNavigate();

  // const getProfession = () => {
  //   axios
  //     .get("/profession")
  //     .then((response) => {
  //       setProfession(response.data);
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getProfession();
  // }, []);


  const steps = [
    { fields: ["firstName", "lastName", "email", "password"] },
    { fields: ["city", "experiences", "socials"] },
    {
      fields: ["skills", "profession", "education"],
    },
  ];

  const stepsBusiness = [{ fields: ["firstName", "lastName", "email"] }];

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
        setStepBussines(stepBussines + 1);
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
    e.preventDefault();

    if (city && experiences.length > 0 && socials) {
      setStep(step + 1);
    } else {
      toast.info("Please fill in all the required information for Step 2.");
    }
  };

  const handleSubmitStep3 = (e) => {
    handleSubmitStep(e, 2);
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
  const [jobEntries, setJobEntries] = useState([{ title: "", company: "" }]);
  const [educationEntries, setEducationEntries] = useState([
    { institution: "", title: "" },
  ]);

  const handleInputChange = (index, key, value, entriesType) => {
    const updatedEntries = [
      ...(entriesType === "job" ? jobEntries : educationEntries),
    ];
    updatedEntries[index][key] = value;
    entriesType === "job"
      ? setJobEntries(updatedEntries)
      : setEducationEntries(updatedEntries);
  };


  const handleExperienceChange = (index, key, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][key] = value;
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { titull: "", cmp: "", startDate: "", endDate: "" }]);
  };

  const handleSocialsChange = (key, value) => {
    setSocials({ ...socials, [key]: value });
  };

  const handleBusinessSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    let businessPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      city: city,
      companyName: companyName,
      companyType: companyType,
      phone: phone,
      website: website
    };
    const response = await axios.post(
      "https://weak-lime-squid-fez.cyclic.app/business/signup",
      businessPayload
    ).then((response) => {
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setCity("");
      setCompanyName("");
      setCompanyType("");
      setPhone("");
      setWebsite("");
      toast.success("You have been registered successfully!")
    })
      .catch((error) => {
        console.log(error);
        console.log(businessPayload);
      });
    setLoading(false);
    return;
  };



  const handleFreelancerSubmit = async (e) => {
    let freelancerPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }
    e.preventDefault();

    setLoading(true);

    // const experienceData = experiences.map(experience => ({
    //   titull: experience.titull,
    //   cmp: experience.cmp,
    //   startDate: experience.startDate,
    //   endDate: experience.endDate
    // }));

    // const educationData = education.map(edu => ({
    //   titull: edu.titull,
    //   uni: edu.uni,
    //   startDate: edu.startDate,
    //   endDate: edu.endDate
    // }));

    axios.post("/freelancer/signup", freelancerPayload)
      .then((response) => {
        toast.success("You have been registered successfully.")
        navigate("/login");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const [role, setRole] = useState("freelancer");

  return (
    <div className="register-page">
      <div className="left">
        <div class="col-md-9 col-lg-8 mx-auto">
          <h1 class="login-heading mb-4">
            {props?.language === true ? "Regjistrohu si" : "Register as"}
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

        {role === "freelancer" &&
          (
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
                      {props?.language === true ? "Emri" : "First Name"}
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
                      {props?.language === true ? "Mbiemri" : "Last Name"}
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
                      {props?.language === true ? "Email Address" : "Email"}
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="password"
                      class="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <label for="floatingPassword">
                      {props?.language === true ? "Fjalekalimi" : "Password"}
                    </label>
                  </div>
                  <form onSubmit={handleFreelancerSubmit}>
                    {/* Step 1 form fields */}

                    <button type="submit" className="register-page-btn">
                      Register
                    </button>
                  </form>
                </div>
              )}
              {/* {step === 2 && (
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div className="form-floating mb-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                    />
                    <label htmlFor="city">City</label>
                  </div>
                  <div>
                    <h3>Experiences</h3>
                    {experiences.map((experience, index) => (
                      <div key={index} className="experience-inputs">
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            value={experience.titull || ""}
                            onChange={(e) => handleExperienceChange(index, "titull", e.target.value)}
                            placeholder="Titulli"
                          />
                          <label htmlFor="titull">Titulli</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            value={experience.cmp || ""}
                            onChange={(e) => handleExperienceChange(index, "cmp", e.target.value)}
                            placeholder="Kompania"
                          />
                          <label htmlFor="cmp">Kompania</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="date"
                            className="form-control"
                            value={experience.startDate || ""}
                            onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                            placeholder="Start Date"
                          />
                          <label htmlFor="startDate">Start Date</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="date"
                            className="form-control"
                            value={experience.endDate || ""}
                            onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                            placeholder="End Date"
                          />
                          <label htmlFor="endDate">End Date</label>
                        </div>
                      </div>
                    ))}
                    <div role="button" className="register-add-more" onClick={handleAddExperience}>
                      Add More Experience
                    </div>
                  </div>
                  <div className="socials d-flex">
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        value={socials.linkedIn || ""}
                        onChange={(e) => handleSocialsChange("linkedIn", e.target.value)}
                        placeholder="LinkedIn Username"
                      />
                      <label htmlFor="linkedIn">LinkedIn Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        value={socials.github || ""}
                        onChange={(e) => handleSocialsChange("github", e.target.value)}
                        placeholder="GitHub"
                      />
                      <label htmlFor="github">GitHub</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        value={socials.behance || ""}
                        onChange={(e) => handleSocialsChange("behance", e.target.value)}
                        placeholder="Behance"
                      />
                      <label htmlFor="behance">Behance</label>
                    </div>
                  </div>
                  <form onSubmit={handleSubmitStep2}>
                    <button type="submit" className="register-page-btn">
                      Continue
                    </button>
                  </form>
                </div>
              )} */}
              {/* {step === 3 && (
                <div class="col-md-9 col-lg-8 mx-auto">
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      class="form-control"
                      onChange={(e) => setSkills(e.target.value)}
                      placeholder="Professions"
                    />
                    <label for="floatingPassword">
                      {props?.language === true ? "Aftesite" : "Professions"}
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    {experiences.map((experience, index) => (
                      <div key={index} className="experience-inputs">
                        <div className="d-flex justify-content-between">
                          <div className="form-floating mb-3" style={{ flexBasis: 'calc(50% - 5px)' }}>
                            <input
                              required
                              type="text"
                              className="form-control rowfc"
                              value={experience.titull || ""}
                              onChange={(e) => handleExperienceChange(index, "titull", e.target.value)}
                              placeholder="Titulli"
                            />
                            <label htmlFor="titull">Titulli</label>
                          </div>
                          <div className="form-floating mb-3" style={{ flexBasis: 'calc(50% - 5px)' }}>
                            <input
                              required
                              type="text"
                              className="form-control rowfc"
                              value={experience.cmp || ""}
                              onChange={(e) => handleExperienceChange(index, "cmp", e.target.value)}
                              placeholder="Kompania"
                            />
                            <label htmlFor="cmp">Kompania</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="form-floating mb-3" style={{ flexBasis: 'calc(50% - 5px)' }}>
                            <input
                              required
                              type="date"
                              className="form-control"
                              value={experience.startDate || ""}
                              onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                              placeholder="Start Date"
                            />
                            <label htmlFor="startDate">Start Date</label>
                          </div>
                          <div className="form-floating mb-3 mx-1" style={{ flexBasis: 'calc(50% - 5px)' }}>
                            <input
                              required
                              type="date"
                              className="form-control"
                              value={experience.endDate || ""}
                              onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                              placeholder="End Date"
                            />
                            <label htmlFor="endDate">End Date</label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div class="form-floating mt-2 mb-1">
                    <select id='jobTitle' name='jobTtitle' className='form-select'>
                      <option value="">Select Profession</option>
                      {profession?.map(el => {
                        return <option value={el?.category}>{el?.category}</option>
                      })}
                    </select>
                  </div>
                  <form onSubmit={handleFreelancerSubmit}>
                    <button type="submit" className="register-page-btn">Submit</button>
                  </form>
                </div>
              )} */}
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
                    {props?.language === true ? "Emri i plote" : "Full Name"}
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
                    {props?.language === true ? "Mbiemri" : "Last Name"}
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
                    {props?.language === true ? "Email Address" : "Email"}
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
                    {props?.language === true ? "Fjalekalimi" : "Password"}
                  </label>
                </div>
                <form onSubmit={handleSubmitStepBussines1}>
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
                    {props?.language === true ? "Qyteti" : "City"}
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
                    {props?.language === true
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
                    {props?.language === true
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
                    {props?.language === true ? "Telefoni" : "Phone"}
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
                    {props?.language === true ? "Website" : "Website"}
                  </label>
                </div>
                <form onSubmit={handleSubmitStepBussines1}>
                  {/* Step 1 form fields */}

                  <button type="submit" className="register-page-btn" onClick={handleBusinessSubmit}>
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
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
