import "./profile.scss";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import ProfilePic from "../../assets/profiles/1.png";
import { getDataFromLocalStorage } from "../../Helpers/localStorage";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedUserData = getDataFromLocalStorage("userData");
    setUserData(storedUserData);
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
                {userData && userData?.profession
                  ? userData?.profession?.join(", ")
                  : ""}
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
              <p>Phone</p>
              <p className="value">+383 45 296 605</p>
            </div>
            <div className="data-slot">
              <p>City</p>
              <p className="value">{userData ? userData?.city : ""}</p>
            </div>
            <div className="data-slot">
              <p>Bio</p>
              <p className="value">Prishtina, Kosova.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="center-profile">
        <div className="experience">
          <div className="label">
            <h3>Experience</h3>
            <FiEdit size={25} />
          </div>
          <div className="data-container">
            {userData && userData?.experiences ? (
              userData?.experiences?.map((experience, index) => (
                <div key={index} className="data-section">
                  <div className="names">
                    <p className="name-profession">{experience?.title}</p>
                    <p className="name-company">{experience?.company}</p>
                  </div>
                  <div className="dates">
                    <p className="start-date">{experience?.startDate}</p>
                    <p className="end-date">{experience?.endDate}</p>
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
            <FiEdit size={25} />
          </div>
          <div className="data-container">
            {userData && userData?.education ? (
              userData?.education?.map((education, index) => (
                <div key={index} className="data-section">
                  <div className="names">
                    <p className="name-profession">{education?.title}</p>
                    <p className="name-company">{education?.institution}</p>
                  </div>
                  <div className="dates">
                    <p className="start-date">{education?.startDate}</p>
                    <p className="end-date">{education?.endDate}</p>
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
            <FiEdit size={25} />
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
            <FiEdit size={25} />
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
        <div className="upload-cv">
          <p className="upload-cv-p">Download CV</p>
        </div>
        <div className="portfolio">
          <p className="portfolio-p">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
