import "./profile.scss";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import ProfilePic from "../../assets/profiles/1.png";
import { getDataFromLocalStorage } from "../../Helpers/localStorage";
import axios from "../../axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    socials: {
      linkedIn: "",
      github: "",
      behance: "",
    },
    experiences: [
      { titull: "", cmp: "", startDate: "", endDate: "" }
    ],
    education: [],
    skills: [],
  });
  const [profile, setProfile] = useState(null);
  const [editState, setEditState] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: ""
  });
  const [experiences, setExperiences] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [newEducation, setNewEducation] = useState({
    titull: "",
    uni: "",
    startDate: "",
    endDate: ""
  });
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const storedUserData = getDataFromLocalStorage("userData");
    setUserData(storedUserData);
    getProfile();
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

  const updateUserProfile = () => {
    axios.put(`/freelancer/${userData._id}`, userData)
      .then((response) => {
        console.log("Update user:", response.data)
        console.log("User profile updated successfully!");
      })
      .catch((error) => {
        console.log("Profile update error:", error);
      });
  };

  const handleProfileUpdate = () => {
    setEditState(false);
    updateUserProfile();
  }

  const handleAddExperience = () => {
    setUserData(prevState => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          titull: newExperience.titull,
          cmp: newExperience.cmp,
          startDate: newExperience.startDate,
          endDate: newExperience.endDate
        }
      ],
    }));
  };


  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill("");
  }

  const handleAddEducation = () => {
    setEducation([...education, newEducation]);
    setNewEducation({
      title: "",
      university: "",
      startDate: "",
      endDate: ""
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prevExperience => ({
      ...prevExperience,
      [name]: value
    }));
  };


  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  }

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  }
  const handleSocialChange = (e, platform) => {
    const { value } = e.target;
    // Merge the updated socials object correctly
    setUserData(prevState => ({
      ...prevState,
      socials: {
        ...prevState.socials,
        [platform]: value
      }
    }));
  };


  return (
    <div className="profile">
      <div className="left-profile">
        <div className="account">
          <div className="left-side">
            <img src={ProfilePic} alt="profile-pic" className="profile-pic" />
            <div className="identity">
              {editState ? (
                <div className="d-flex">
                  <input
                    type="text"
                    value={userData?.firstName}
                    onChange={(e) =>
                      setUserData({ ...userData, firstName: e.target.value })
                    }
                    style={{ width: "50%" }}
                    className="mx-1 edit-input"
                  />
                  <input
                    type="text"
                    value={userData?.lastName}
                    onChange={(e) =>
                      setUserData({ ...userData, lastName: e.target.value })
                    }
                    style={{ width: "50%" }}
                    className="mx-1 edit-input"
                  />
                </div>
              ) : (
                <div>
                  <h5>
                    {userData?.firstName} {userData?.lastName}
                  </h5>
                  <p>{profile?.profession[0]?.category}</p>
                </div>
              )}
            </div>
          </div>
          {editState === false ? (
            <FiEdit size={25} onClick={() => setEditState(true)} />
          ) : (
            <p onClick={handleProfileUpdate}>Done</p>
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
                  onChange={(e) => handleChange(e)}
                  className="edit-input"
                  name="email"
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
                  value={userData?.socials?.github}
                  onChange={(e) => handleSocialChange(e, "github")}
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
                  value={userData?.socials?.behance}
                  onChange={(e) => handleSocialChange(e, "behance")}
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
                  value={userData?.socials?.linkedIn}
                  onChange={(e) => handleSocialChange(e, "linkedIn")}
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
          </div>
          <div className="data-container">
            {userData && userData?.experiences ? (
              userData?.experiences?.map((experience, index) => (
                <div key={index} className="data-section">
                  <div className="names">
                    <p className="name-profession">{experience?.titull}</p>
                    <p className="name-company">{experience?.cmp}</p>
                  </div>
                  <div className="dates">
                    <p className="start-date">
                      {experience?.startDate.substring(0, 10)}
                    </p>
                    <p className="end-date">
                      {experience?.endDate.substring(0, 10)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No experiences available</p>
            )}
            {editState && (
              <div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newExperience.titull}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={newExperience.cmp}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Start Date"
                    name="startDate"
                    value={newExperience.startDate}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    name="endDate"
                    value={newExperience.endDate}
                    onChange={handleChange}
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
          </div>
          <div className="data-container">
            {userData && userData?.education ? (
              userData?.education?.map((education, index) => (
                <div key={index} className="data-section">
                  <div className="names">
                    <p className="name-profession">{education?.titull}</p>
                    <p className="name-company">{education?.uni}</p>
                  </div>
                  <div className="dates">
                    <p className="start-date">
                      {education?.startDate.substring(0, 10)}
                    </p>
                    <p className="end-date">
                      {education?.endDate.substring(0, 10)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No education available</p>
            )}
            {editState && (
              <div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newEducation.title}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="University"
                    name="university"
                    value={newEducation.university}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, university: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex justify-content-between my-2">
                  <input
                    type="text"
                    placeholder="Start Date"
                    name="startDate"
                    value={newEducation.startDate}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, startDate: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    name="endDate"
                    value={newEducation.endDate}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, endDate: e.target.value })
                    }
                  />
                </div>
                <button onClick={handleAddEducation} className="add-button">Add Education</button>
              </div>
            )}
          </div>
        </div>

        <div className="skills mt-2">
          <div className="label">
            <h3>Skills</h3>
          </div>
          <div className="data-container" id="skill-container">
            {userData && userData?.skills ? (
              userData?.skills?.map((skill, index) => (
                <div key={index} className="skill-box">
                  {skill}
                </div>
              ))
            ) : (
              <p>No skills available</p>
            )}
            {editState && (
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Add new skill"
                  value={newSkill}
                  onChange={handleSkillChange}
                />
                <button onClick={handleAddSkill} className="add-button my-2">Add Skill</button>
              </div>
            )}
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
