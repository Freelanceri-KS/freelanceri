import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, useToast } from "react-toastify";

const RegisterPage = (props) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [education, setEducation] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [mainSkills, setMainSkills] = useState("");
  const [portfolio, setPortfolio] = useState("");
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
    { fields: ["firstName", "lastName", "email", "phone"] },
    { fields: ["profession", "city"] },
    { fields: ["education", "qualifications", "mainSkills"] },
    { fields: ["portfolio"] },
  ];

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
    // Check if required fields are filled
    // if (portfolio) {
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
    // Api call qitu e shtin Data User mi qu databaz
    // } else {
    //   alert("Please fill in all required fields.");
    // }
  };

  // Rendering the form based on the current step
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div class="container-fluid ps-md-0">
            <div class="row g-0">
              <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      {step === 1 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true
                              ? "Regjistrohu!"
                              : "Register!"}
                          </h1>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="Full Name"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Emri i plote"
                                : "Full Name"}
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
                              {props?.language == true
                                ? "Emri i plote"
                                : "Last Name"}
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
                              {props?.language == true
                                ? "Email Address"
                                : "Email"}
                            </label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone Number"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Phone Number"
                                : "Phone Number"}
                            </label>
                          </div>
                          <form onSubmit={handleSubmitStep1}>
                            {/* Step 1 form fields */}

                            <button type="submit">Continue</button>
                          </form>
                        </div>
                      )}

                      {step === 2 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true
                              ? "More about you !"
                              : "More about"}
                          </h1>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setProfession(e.target.value)}
                              placeholder="Profession"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Profession"
                                : "Profession"}
                            </label>
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
                            {/* Step 2 form fields */}
                            <button type="submit">Continue</button>
                          </form>
                        </div>
                      )}

                      {step === 3 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true
                              ? "More about you !"
                              : "More about"}
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
                            {/* Final step form fields */}
                            <button type="submit">Continue</button>
                          </form>
                        </div>
                      )}

                      {step === 4 && (
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h1 class="login-heading mb-4">
                            {props?.language == true
                              ? "More about you !"
                              : "More about"}
                          </h1>
                          <div class="form-floating mb-3">
                            <input
                              required
                              type="text"
                              class="form-control"
                              onChange={(e) => setPortfolio(e.target.value)}
                              placeholder="Portfolio"
                            />
                            <label for="floatingPassword">
                              {props?.language == true
                                ? "Portfolio"
                                : "Portfolio"}
                            </label>
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
                            {/* Final step form fields */}
                            <button type="submit">Submit</button>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
