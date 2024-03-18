import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import maskgroup from "../../assets/images/maskgroup.png";
import PhoneInput from "react-phone-input-2";
import "./registerPage.scss";
import Select from "react-select";

const RegisterPage = (props) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState([]);
  const [city, setCity] = useState("");
  const [education, setEducation] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [mainSkills, setMainSkills] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [preferedRate, setPreferedRate] = useState("");
  const [prederdDurationEng, setPrederdDurationEng] = useState("");
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);

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

  const steps = [
    { fields: ["firstName", "lastName", "email", "phone"] },
    { fields: ["profession", "city"] },
    { fields: ["education", "qualifications", "mainSkills"] },
    { fields: ["portfolio"] },
  ];

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
        setStep(step + 1);
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

  const handleSubmitStep1 = (e) => {
    handleSubmitStep(e, 0);
  };

  const handleSubmitStep2 = (e) => {
    handleSubmitStep(e, 1);
  };

  const handleSubmitStep3 = (e) => {
    handleSubmitStep(e, 2);
  };

  const handleSubmitFinal = (e) => {
    e.preventDefault();

    setLoading(true);
    let DataUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      profession: profession,
      city: city,
      education: education,
      qualifications: qualifications,
      mainSkills: mainSkills,
      portfolio: portfolio,
      preferedRate: preferedRate,
      prederdDurationEng: prederdDurationEng,
    };
    console.log(DataUser);
  };

  const handleJobTitleSelect = (selectedOptions) => {
    const selectedTitles = selectedOptions.map((option) => option.value);
    setSelectedJobTitles(selectedTitles);
  };

  return (
    <div className="register-page-container" style={{ paddingTop: "40px" }}>
      {" "}
      <div className="row">
        <div className="col-md-12">
          <div class="container-fluid ps-md-0">
            <div class="row g-0">
              <div class="col-md-4 ">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      {step === 1 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="text-header mb-4">
                            {props?.language == true
                              ? "More About You!"
                              : "More About You"}
                          </h1>
                          <div class="form-floating mb-3 row">
                            <div class="col">
                              <input
                                required
                                type="text"
                                class="form-control custom-height-input"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                              />
                            </div>
                            <div class="col">
                              <input
                                required
                                type="text"
                                class="form-control custom-height-input"
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="email"
                              class="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="name@example.com"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Email Address"
                                : "Email"}
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
                              value={phone}
                              onChange={(e) => setPhone(e)}
                            />
                          </div>

                          <form onSubmit={handleSubmitStep1}>
                            <button type="submit" className="lastBtn">
                              Continue
                            </button>
                          </form>
                        </div>
                      )}

                      {step === 2 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="text-header mb-4">
                            {props?.language == true
                              ? "More About You!"
                              : "More About You"}
                          </h1>
                          <div class="form-floating mb-3">
                            <Select
                              isMulti
                              className="select-input"
                              options={profession.map((el) => ({
                                value: el.category,
                                label: el.category,
                              }))}
                              onChange={handleJobTitleSelect}
                              value={selectedJobTitles.map((title) => ({
                                value: title,
                                label: title,
                              }))}
                            />
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="City"
                            />
                            <label for="floatingPassword">
                              {props?.language == true ? "City" : "City"}
                            </label>
                          </div>
                          <form onSubmit={handleSubmitStep2}>
                            <button type="submit" className="lastBtn">
                              Continue
                            </button>
                          </form>
                        </div>
                      )}

                      {step === 3 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="text-header mb-4">
                            {props?.language == true
                              ? "More About You!"
                              : "More About You"}
                          </h1>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setEducation(e.target.value)}
                              placeholder="Education"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Education"
                                : "Education"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) =>
                                setQualifications(e.target.value)
                              }
                              placeholder="Qualifications"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Qualifications"
                                : "Qualifications"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setMainSkills(e.target.value)}
                              placeholder="Main Skills"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Main Skills"
                                : "Main Skills"}
                            </label>
                          </div>
                          <form onSubmit={handleSubmitStep3}>
                            <button type="submit" className="lastBtn">
                              Continue
                            </button>
                          </form>
                        </div>
                      )}

                      {step === 4 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="text-header mb-4">
                            {props?.language == true
                              ? "More About You!"
                              : "More About You"}
                          </h1>
                          <div class="mb-3">
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Portfolio"
                                : "Portfolio"}
                            </label>
                            <input
                              required
                              type="file"
                              class="form-control"
                              onChange={(e) => setPortfolio(e.target.value)}
                              placeholder="Portfolio"
                            />
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setPreferedRate(e.target.value)}
                              placeholder="Prefered Rate"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Prefered Rate"
                                : "Prefered Rate"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) =>
                                setPrederdDurationEng(e.target.value)
                              }
                              placeholder="Preferred duration of engagement"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Preferred duration of engagement"
                                : "Preferred duration of ENG"}
                            </label>
                          </div>
                          <form onSubmit={handleSubmitFinal}>
                            <button type="submit" className="lastBtn">
                              Submit
                            </button>
                          </form>
                        </div>
                      )}
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

export default RegisterPage;
