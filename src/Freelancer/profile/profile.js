import "./profile.scss";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import ProfilePic from "../../assets/profiles/1.png";
import { getDataFromLocalStorage } from "../../Helpers/localStorage";
import axios from "../../axios";


const Profile = () => {
  const [userData, setUserData] = useState([]);

  const [profile, setProfile] = useState(null);

  const getProfile = () => {
    axios.get(`/freelancer/${userData._id}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const storedUserData = getDataFromLocalStorage("userData");
    setUserData(storedUserData);
    getProfile();
  }, []);

  return (
    <div className="profile">
      <div className="left-profile">
        <div className="account">
          <div className="left-side">
            <img src={ProfilePic} alt="profile-pic" className="profile-pic" />
            <div className="identity">
              <h5>
                {userData
                  ? `${userData?.firstName} ${userData?.lastName}`
                  : "John Doe"}
              </h5>
              <p>
                {profile?.profession[0]?.category}
              </p>
            </div>
          </div>
          <FiEdit size={25} />
        </div>

        <div className="account-details">
          <div className="account-details-head">
            <h5>Personal Information</h5>
            <FiEdit size={25} />
          </div>
          <div className="account-details-body">
            <div className="data-slot" id="data-slot-1">
              <p>Email</p>
              <p className="value">{userData ? userData?.email : ""}</p>
            </div>
            <div className="data-slot">
              <p>Github</p>
              <p className="value">{userData ? userData?.phone : ""}</p>
            </div>
            <div className="data-slot">
              <p>City</p>
              <p className="value">{userData ? userData?.city : ""}</p>
            </div>
            {/* <div className="data-slot">
              <p>Bio</p>
              <p className="value">Prishtina, Kosova.</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="center-profile">
        <div className="experience">
          <div className="label">
            <h3>Experience</h3>
            {/* <FiEdit size={25} /> */}
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
                    <p className="start-date">{experience?.startDate.substring(0, 10)}</p>
                    <p className="end-date">{experience?.endDate.substring(0, 10)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No experiences available</p>
            )}
          </div>
        </div>
        <div className="education mt-2">
          <div className="label">
            <h3>Education</h3>
            {/* <FiEdit size={25} /> */}
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
                    <p className="start-date">{education?.startDate.substring(0, 10)}</p>
                    <p className="end-date">{education?.endDate.substring(0, 10)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No education available</p>
            )}
          </div>
        </div>

        <div className="skills mt-2">
          <div className="label">
            <h3>Skills</h3>
            {/* <FiEdit size={25} /> */}
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
          </div>
        </div>

        <div className="certification mt-2">
          <div className="label">
            <h3>Certifications</h3>
            {/* <FiEdit size={25} /> */}
          </div>
          <div className="data-container">
            <div className="data-section">
              <div className="names">
                <p className="name-profession">Junior Geeks</p>
                <p className="name-company">Innovation Center of Kosova</p>
              </div>
              <div className="dates">
                <p className="start-date">04/03/2023</p>
                <p className="end-date">14/03/2023</p>
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
