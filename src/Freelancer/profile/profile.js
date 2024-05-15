import "./profile.scss";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "../../Helpers/localStorage";
import axios from "../../axios";
import Select from "react-select"
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Profile = () => {
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [userData, setUserData] = useState({
    socials: {
      github: "",
      behance: "",
      linkedIn: ""
    },
    profession: []
  });
  const [profile, setProfile] = useState(null);
  const [editState, setEditState] = useState(false);

  const handleJobTitleSelect = (selectedOptions) => {
    const selectedTitles = selectedOptions.map(option => option.value);
    setSelectedJobTitles(selectedTitles);
  };
  const [freelancer, setFreelancer] = useState(null);

  useEffect(() => {
    const storedUserData = getDataFromLocalStorage("userData");
    const updatedUserData = {
      ...storedUserData,
      socials: storedUserData.socials || { github: "", behance: "", linkedIn: "" }
    };
    setUserData(updatedUserData);
    setFreelancer(updatedUserData._id);
    setGithub(updatedUserData.socials.github);
    setBehance(updatedUserData.socials.behance);
    setLinkedin(updatedUserData.socials.linkedIn);
  }, []);



  const getProfile = () => {
    axios.get(`/freelancer/${userData._id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (userData && userData._id) {
      getProfile();
    }
  }, [userData]);


  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedin] = useState("");
  const [behance, setBehance] = useState("");

  const updateUserProfile = () => {
    const payload = {
      socials: {
        github: github,
        linkedIn: linkedIn,
        behance: behance
      },
    }
    axios.patch(`/freelancer/${userData._id}`, payload)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("Profile update error:", error);
      });
    setEditState(false);
    setEditProfession(false);
  };

  useEffect(() => {
    if (userData && userData._id) {
      getEducation();
    }
  }, [userData])



  //? Education
  const [titullEdu, setTitullEdu] = useState(null);
  const [uni, setUni] = useState(null);
  const [startDateEdu, setStartDateEdu] = useState(null);
  const [endDateEdu, setEndDateEdu] = useState(null);
  const [eduEdit, setEduEdit] = useState(false);
  const [education, setEducation] = useState([]);
  const handleAddEducation = () => {
    const [startYear, startMonth, startDay] = startDateEdu.split('-').map(Number);
    const startEduDateAsDate = new Date(Date.UTC(startYear, startMonth - 1, startDay));

    const [endYear, endMonth, endDay] = endDateEdu.split('-').map(Number);
    const endEduDateAsDate = new Date(Date.UTC(endYear, endMonth - 1, endDay));

    if (!isNaN(startEduDateAsDate.getTime()) && !isNaN(endEduDateAsDate.getTime())) {
      const formattedStartDateEdu = startEduDateAsDate.toISOString();
      const formattedEndDateEdu = endEduDateAsDate.toISOString();

      const payload = {
        freelancer: freelancer,
        titull: titullEdu,
        uni: uni,
        startDate: formattedStartDateEdu,
        endDate: formattedEndDateEdu
      };

      axios.post("/education", payload)
        .then((response) => {
          setEducation([...education, response.data]);
          setTitullEdu("");
          setUni("");
          setStartDateEdu("");
          setEndDateEdu("");
        })
        .catch((error) => {
          console.log("Education error: ", error)
        });

      setEduEdit(false);
    } else {
      console.error("Invalid date value:", startDateEdu, endDateEdu);
    }
  };


  const getEducation = () => {
    axios.get(`/education/freelancer/${userData._id}`)
      .then((response) => {
        setEducation(response.data);

      })
      .catch((error) => {
        console.log(error)
      })
  }
  const deleteEducation = (id) => {
    axios.delete(`/education/${id}`)
      .then((response) => {
        setEducation(education.filter(education => education._id !== id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //!EXPERIENCES
  const [experiences, setExperiences] = useState([]);
  const [titullExp, setTitullExp] = useState("");
  const [cmp, setCmp] = useState("");
  const [startDateExp, setStartDateExp] = useState("");
  const [endDateExp, setEndDateExp] = useState("");
  const [expEdit, setExpEdit] = useState(false);
  const getExperience = () => {
    axios.get(`/experience/freelancer/${userData?._id}`)
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => {
        console.log("Experience error:", error);
      })
  }
  useEffect(() => {
    if (userData && userData._id) {
      getExperience();
    }
  }, [userData]);
  const handleAddExperience = () => {
    const [startYear, startMonth, startDay] = startDateExp.split('-').map(Number);
    const startExpDateAsDate = new Date(Date.UTC(startYear, startMonth - 1, startDay));

    const [endYear, endMonth, endDay] = endDateExp.split('-').map(Number);
    const endExpDateAsDate = new Date(Date.UTC(endYear, endMonth - 1, endDay));

    if (!isNaN(startExpDateAsDate.getTime()) && !isNaN(endExpDateAsDate.getTime())) {
      const formattedStartDateExp = startExpDateAsDate.toISOString();
      const formattedEndDateExp = endExpDateAsDate.toISOString();

      const payload = {
        freelancer: freelancer,
        titull: titullExp,
        cmp: cmp,
        startDate: formattedStartDateExp,
        endDate: formattedEndDateExp
      };

      axios.post("/experience", payload)
        .then((response) => {
          setExperiences([...experiences, response.data]);
          setTitullExp("");
          setCmp("");
          setStartDateExp("");
          setEndDateExp("");
          setExpEdit(false);
          getExperience();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("Invalid date value:", startDateExp, endDateExp);
    }
  };

  const deleteExperience = (id) => {
    axios.delete(`/experience/${id}`)
      .then((response) => {
        setExperiences(experiences.filter(experience => experience._id !== id));

      })
      .catch((error) => {
        console.log(error);
      })
  }


  //? Professions
  const [profession, setProfession] = useState([]);
  const [editProfession, setEditProfession] = useState(false);
  const getProffesion = () => {
    axios.get('/profession').then(
      data => {
        setProfession(data.data)
      }
    ).catch(err => {
      console.log(err)
    })
  }
  useState(() => {
    getProffesion();
  })
  const updateProfession = (id) => {
    const payload = {
      profId: selectedJobTitles,
      freelancer: id
    }
    axios.post("/freelancer-professions", payload)
      .then((response) => {
        setEditProfession(false);
        setSelectedJobTitles([]);
        getFreelancerProfessions();

      })
      .catch((error) => {
        if (error.response && error.response.data.error === "Freelancer already has this profession.") {
          toast.error("Profession has been added already.")
        }
        console.log(error)
      })
  }
  const [freelancerProfessions, setFreelancerProfessions] = useState([]);
  const getFreelancerProfessions = () => {
    axios.get(`/freelancer-professions/freelancer/${userData?._id}`)
      .then((response) => {
        setFreelancerProfessions(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const deleteProfessions = (id) => {
    axios.delete(`/freelancer-professions/${id}`)
      .then((response) => {
        setFreelancerProfessions(prevState =>
          prevState.filter(fp => fp._id !== id)
        );
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    if (userData && userData._id) {
      getFreelancerProfessions()
    }
  }, [userData])



  return (
    <div className="profile">
      <div className="left-profile">
        <div className="account">
          <div className="left-side">
            <div className="identity">
              <div>
                <h5>
                  {userData?.firstName} {userData?.lastName}
                </h5>
                {/* <p>{userData?.profession[0]?.category}</p> */}
              </div>

            </div>
          </div>
          {editState === false ? (
            <FiEdit size={25} onClick={() => setEditState(true)} style={{ cursor: "pointer" }} />
          ) : (
            <p onClick={updateUserProfile}>Done</p>
          )}
        </div>
        <div className="account-details">
          <div className="account-details-head">
            <h5>Personal Information</h5>
          </div>
          <div className="account-details-body">
            <div className="data-slot" id="data-slot-1">
              <p>Email</p>
              {editState ? (
                <input
                  type="text"
                  value={userData?.email}
                  className="edit-input"
                  name="email"
                  disabled
                />
              ) : (
                <p className="value">{userData?.email}</p>
              )}
            </div>
            <div className="data-slot">
              <p>Github</p>
              {editState ? (
                <input
                  type="text"
                  value={github}
                  name="github"
                  onChange={(e) => setGithub(e.target.value)}
                  className="edit-input"
                />
              ) : (
                <p className="value">{userData?.socials?.github}</p>
              )}
            </div>
            <div className="data-slot">
              <p>Behance</p>
              {editState ? (
                <input
                  type="text"
                  value={behance}
                  name="behance"
                  onChange={(e) => setBehance(e.target.value)}
                  className="edit-input"
                />
              ) : (
                <p className="value">{userData?.socials?.behance}</p>
              )}
            </div>
            <div className="data-slot">
              <p>Linkedin</p>
              {editState ? (
                <input
                  type="text"
                  name="linkedIn"
                  value={linkedIn}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="edit-input"
                />
              ) : (
                <p className="value">{userData?.socials?.linkedIn}</p>
              )}
            </div>

          </div>
        </div>
      </div>
      <div className="center-profile">
        <div className="experience">
          <div className="label">
            <h3>Experience</h3>
            <FiEdit size={20} onClick={() => setExpEdit(!expEdit)} style={{ cursor: "pointer" }} />

          </div>
          <div className="data-container">
            {experiences && experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <React.Fragment key={index}>
                  <div className="data-section">
                    <div className="names">
                      <p className="name-profession">{experience?.titull}</p>
                      <p className="name-company">{experience?.cmp}</p>
                    </div>
                    {expEdit && (
                      <button className="delete-button" onClick={() => deleteExperience(experience._id)}>
                        Delete experience
                      </button>
                    )}
                    <div className="dates">
                      <p className="start-date">
                        {experience?.startDate.substring(0, 10)}
                      </p>
                      <p className="end-date">
                        {experience?.endDate.substring(0, 10)}
                      </p>
                    </div>
                  </div>
                  {index !== experiences.length - 1 && <div className="barrier"></div>}
                </React.Fragment>
              ))
            ) : (
              <p>No experiences available</p>
            )}

            {expEdit && (
              <div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Title"
                    className="edit-input-2"
                    name="titull"
                    value={titullExp}
                    onChange={(e) => setTitullExp(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    name="cmp"
                    className="edit-input-2"
                    value={cmp}
                    onChange={(e) => setCmp(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    className="edit-input-2"
                    value={startDateExp}
                    onChange={(e) => setStartDateExp(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    className="edit-input-2"
                    value={endDateExp}
                    onChange={(e) => setEndDateExp(e.target.value)}
                  />
                </div>
                <button onClick={handleAddExperience} className="add-button">Add Experience</button>
              </div>
            )}
          </div>
        </div>
        <div className="education mt-2">
          <div className="label">
            <h3>Education</h3>
            <FiEdit size={20} onClick={(e) => setEduEdit(!eduEdit)} />
          </div>
          <div className="data-container">
            {education && education.length > 0 ? (
              education.map((edu, index) => (
                <React.Fragment key={index}>
                  <div className="data-section mt-1">
                    <div className="names">
                      <p className="name-profession">{edu?.titull}</p>
                      <p className="name-company">{edu?.uni}</p>
                    </div>
                    {eduEdit && (
                      <button className="delete-button" onClick={() => deleteEducation(edu._id)}>Delete Education</button>
                    )}
                    <div className="dates">
                      <p className="start-date">
                        {edu?.startDate ? edu.startDate.substring(0, 10) : ''}
                      </p>
                      <p className="end-date">
                        {edu?.endDate ? edu.endDate.substring(0, 10) : ''}
                      </p>
                    </div>
                  </div>
                  {index !== education.length - 1 && <div className="horiz-barrier"></div>}
                </React.Fragment>
              ))
            ) : (
              <p>No education available</p>
            )}
            {eduEdit && (
              <div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Title"
                    name="titull"
                    className="edit-input-2"
                    value={titullEdu}
                    onChange={(e) => setTitullEdu(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="University"
                    name="uni"
                    className="edit-input-2"
                    value={uni}
                    onChange={(e) => setUni(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={startDateEdu}
                    onChange={(e) => setStartDateEdu(e.target.value)}
                    className="edit-input-2"
                  />

                  <input
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={endDateEdu}
                    onChange={(e) => setEndDateEdu(e.target.value)}
                    className="edit-input-2"
                  />

                </div>
                <button onClick={handleAddEducation} className="add-button">Add Education</button>
              </div>
            )}
          </div>
        </div>
        <div className="education mt-2 mb-5">
          <div className="label">
            <h3>Professions</h3>
            <FiEdit size={20} onClick={(e) => setEditProfession(!editProfession)} style={{ cursor: "pointer" }} />
          </div>
          <div className="data-container">
            <div className="mt-3">
              {editProfession && (
                <p>Select Professions:</p>
              )}
              <div>
                <div className="mt-3">
                  {freelancerProfessions && freelancerProfessions.length > 0 && (
                    freelancerProfessions.map((fp, index) => (
                      <div key={index}>
                        {fp.profId.map((profession, profIndex) => (
                          <div className="skill-box" key={profIndex}>
                            {profession.category}
                            {editProfession && (
                              <MdDeleteOutline size={25} color='red' style={{ cursor: "pointer" }} onClick={() => deleteProfessions(fp._id)} />
                            )}

                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>

                {editProfession && (
                  <>
                    <Select
                      isMulti
                      options={profession.map((el) => ({ value: el._id, label: el.category }))}
                      onChange={handleJobTitleSelect}
                      value={selectedJobTitles.map((title) => ({ value: title, label: title }))}
                    />
                    <button className="add-profession" onClick={() => updateProfession(profile._id)}>
                      Finish editing
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-profile">
        {/* <div className="upload-cv">
            <p className="upload-cv-p">Share profile</p>
          </div> */}
      </div>
    </div>
  );
};

export default Profile;
