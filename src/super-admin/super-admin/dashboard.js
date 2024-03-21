import "./dashboard.scss"
import Graph from "../../assets/graph.png"
import { useState, createContext } from "react";
import { BrowserRouter as Routes, Router, Route, Link } from 'react-router-dom';
import ProfilePic from "../../assets/images/single-profile.png"
import { AiOutlineExport } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";




function SuperDashboard() {
  const [selectedOption, setSelectedOption] = useState('Overview');

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="superdashboard">
      <div className="wrap">
        <div className="options">
          <ul>
            <li>
              <a href="" onClick={() => handleOptionClick('Overview')} className={
                selectedOption === 'Overview'
                  ? 'selected-text'
                  : 'unselected-text'
              }>
                Overview
              </a>
            </li>
            <div className="barrier"></div>
            <li>
              <a href="#" className={
                selectedOption === 'Posts'
                  ? 'selected-text'
                  : 'unselected-text'
              } onClick={() => handleOptionClick('Posts')}>
                Posts
              </a>
            </li>
            <div className="barrier"></div>
            <li>
              <a href="#" className={
                selectedOption === 'Employers'
                  ? 'selected-text'
                  : 'unselected-text'
              } onClick={() => handleOptionClick('Employers')}>
                Employers
              </a>
            </li>
            <div className="barrier"></div>
            <li>
              <a href="#" className={
                selectedOption === 'Freelancers'
                  ? 'selected-text'
                  : 'unselected-text'
              } onClick={() => handleOptionClick('Freelancers')}>
                Freelancers
              </a>
            </li>
            <div className="barrier"></div>
            <li>
              <a href="#" className={
                selectedOption === 'Contacts'
                  ? 'selected-text'
                  : 'unselected-text'
              } onClick={() => handleOptionClick('Settings')}>
                Contacts
              </a>
            </li>

          </ul>
        </div>
        <div className="right-side" >
          {selectedOption === 'Overview' && (
            <Overview />
          )}
          {selectedOption === "Posts" && (
            <Posts />
          )}
          {selectedOption === "Employers" && (
            <Employers />
          )}
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="content">
      <div className="content-header">
        <div className="stat">
          <h6 className="stat-name">Number of users</h6>
          <h1 className="stat-nr">320</h1>
        </div>
        <div className="header-barrier"></div>
        <div className="stat">
          <h6 className="stat-name">Number of posts</h6>
          <h1 className="stat-nr">120</h1>
        </div>
        <div className="header-barrier"></div>
        <div className="stat">
          <h6 className="stat-name">Number of applications</h6>
          <h1 className="stat-nr">230</h1>
        </div>
      </div>
      <div className="content-body">
        <div className="content-body-title">
          <h4 className="container-title-dsc">Web Traffic</h4>
          <div className="timeline">
            <p className="timespan">overall</p>
            <p className="timespan">year</p>
            <p className="timespan">month</p>
            <p className="timespan">week</p>
            <p className="timespan">day</p>
          </div>
        </div>
        <div className="graph">
          <img src={Graph} alt="Graph" className="graph-pic" />
        </div>
      </div>

      {/* Render other content based on selected option */}
    </div>
  )
}

function Posts() {
  return (
    <div className="posts">
      <div className="posts-header">
        <div className="posts-header-container">
          <h5 className="phc-title">Developer</h5>
          <h6 className="phc-number">120</h6>
        </div>
        <div className="posts-header-container">
          <h5 className="phc-title">Graphic designer</h5>
          <h6 className="phc-number">42</h6>
        </div>
        <div className="posts-header-container">
          <h5 className="phc-title">Video Editor</h5>
          <h6 className="phc-number">25</h6>
        </div>
        <div className="posts-header-container">
          <h5 className="phc-title">Drone Operator</h5>
          <h6 className="phc-number">88</h6>
        </div>
        <div className="posts-header-container">
          <h5 className="phc-title">Consulent</h5>
          <h6 className="phc-number">31</h6>
        </div>
        <div className="posts-header-container">
          <h5 className="phc-title">Consulent</h5>
          <h6 className="phc-number">31</h6>
        </div>

      </div>
      <div className="posts-list">
        <div className="post-container">
          <div className="post-container-header">
            <img src={ProfilePic} alt="Profile picture" height={50} width={50} />
            <p className="header-paragraph">Company Name</p>
            <p className="header-paragraph">Category</p>
            <p className="header-paragraph">Post Title</p>
            <p className="header-paragraph">Status</p>
            <p className="header-paragraph">↓</p>
          </div>
          <div className="post-container-wrap">
            <div className="post-container-barrier"></div>
            <div className="post-container-subheader">
              <div className="post-container-subheader-field">
                <p className="pcsf-name">Location</p>
                <p className="pcsf-value">Prishtine</p>
              </div>
              <div className="pcsf-barrier"></div>
              <div className="post-container-subheader-field">
                <p className="pcsf-name">Type</p>
                <p className="pcsf-value">Hybrid</p>
              </div>
              <div className="pcsf-barrier"></div>

              <div className="post-container-subheader-field">
                <p className="pcsf-name">Category</p>
                <p className="pcsf-value">Graphic design</p>
              </div>
              <div className="pcsf-barrier"></div>

              <div className="post-container-subheader-field">
                <p className="pcsf-name">Kerkon</p>
                <p className="pcsf-value">3 freelancer</p>
              </div>
              <div className="pcsf-barrier"></div>
              <div className="post-container-subheader-field">
                <p className="pcsf-name">Afati</p>
                <p className="pcsf-value">1 javë</p>
              </div>
              <div className="pcsf-barrier"></div>
              <div className="post-container-subheader-field">
                <p className="pcsf-name">Bugjeti</p>
                <p className="pcsf-value">3500$</p>
              </div>
              <div className="pcsf-barrier"></div>

              <div className="post-container-subheader-field">
                <p className="pcsf-name">Clicked</p>
                <p className="pcsf-value">123</p>
              </div>
              <AiOutlineExport size={25} />
            </div>
          </div>
          <div className="post-container-title">
            <p className="pct-title">Graphic Designer</p>
            <p className="pct-description">I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!

              We're seeking someone with a keen eye for candid moments and ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Employers() {
  return (
    <div className="employers">
      <div className="employers-header">
        <div className="eh-number-stat">
          <p className="eh-title">Number of employers</p>
          <p className="eh-value">320</p>
        </div>
        <div className="eh-barrier"></div>
        <div className="eh-number-stat">
          <p className="eh-title">Number of posts</p>
          <p className="eh-value">320</p>
        </div>
        <div className="eh-barrier"></div>

        <div className="eh-number-stat">
          <p className="eh-title">Number of applications</p>
          <p className="eh-value">320</p>
        </div>
      </div>
      <div className="employers-list">
        <div className="employers-container">
          <div className="employers-container-identity">
            <img src={ProfilePic} alt="Employer picture" height={50} width={50} />
            <p className="employer-name"> City design</p>
          </div>
          <p>Advertising company</p>
          <p>2</p>
          <MdOutlineKeyboardArrowDown size={30} color="#455bef" />
        </div>
        <div className="employers-container">
          <div className="employers-container-identity">
            <img src={ProfilePic} alt="Employer picture" height={50} width={50} />
            <p className="employer-name"> City design</p>
          </div>
          <p>Advertising company</p>
          <p>2</p>
          <MdOutlineKeyboardArrowDown size={30} color="#455bef" />
        </div>
        <div className="employers-container">
          <div className="employers-container-identity">
            <img src={ProfilePic} alt="Employer picture" height={50} width={50} />
            <p className="employer-name"> City design</p>
          </div>
          <p>Advertising company</p>
          <p>2</p>
          <MdOutlineKeyboardArrowDown size={30} color="#455bef" />
        </div>
      </div>
    </div>
  )
}


export default SuperDashboard;  