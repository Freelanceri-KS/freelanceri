import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa"; // Import FaBookmark from react-icons/fa

import "./findJob.scss";
import SortBy from "../../LandingPage/components/SortByFilter/sortByFilter";
import AdBanner from "../../assets/images/adBanner.png";
import User2 from "../../assets/profiles/2.png";
import Ads from "../../assets/images/ads.png";
// import Profile from "../../assets/images/Profile"; // Update the path accordingly
// import Banner from "../../assets/images/Banner"; // Update the path accordingly
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    position: "Social Media",
    creatorName: "Fjolla Berisha",
    location: "Prishtine",
    type: "Full Time",
    category: "Graphic Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "3 dite",
    budget: "$350",
    image: User2,
  },
  {
    id: 1,
    position: "Social Media",
    creatorName: "Fjolla Berisha",
    location: "Prishtine",
    type: "Full Time",
    category: "Graphic Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "3 dite",
    budget: "$350",
    image: User2,
  },
  {
    id: 1,
    position: "Social Media",
    creatorName: "Fjolla Berisha",
    location: "Prishtine",
    type: "Full Time",
    category: "Graphic Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "3 dite",
    budget: "$350",
    image: User2,
  },
  // Add more job post data here...
];

const adsData = {
  position: "Advertisement",
  creatorName: "Ad Company",
  location: "Everywhere",
  type: "One-Project",
  category: "Ads",
  description: "This is an advertisement",
  amount: 1,
  deadline: "N/A",
  budget: "$N/A",
  image: Ads,
};

const FindJob = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      setIsTable(window.innerWidth > 768 && window.innerWidth <= 1024); // Define iPad breakpoint
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="sort-by-filter">{/* <SortBy /> */}</div>
      <div className="row">
        <div className="col-sm-8 centerdiv">
          <div className="findjobrefact">
            <div className="inputsFJ">
              <div className="positioningFJ">
                <input
                  className="searchinputJobFJ"
                  placeholder="Job title.."
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="searchinputLocationFJ"
                  placeholder="City, Location.."
                  type="text"
                  name=""
                  id=""
                />
                <div className="spacer"></div>

                <button className="searchbtnFJ">search</button>
                <div className="spacer"></div>

                <button className="sort-by-filter-button">
                  {" "}
                  <svg
                    class="vector"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 1H1.5L7.9 8.88333V14.3333L11.1 16V8.88333L17.5 1Z"
                      stroke="#455BEF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Map over the data array to render each job post */}
            {data.map((job) => (
              <div className="post-wrapper" key={job.id}>
                <div className="post-header">
                  <div className="left">
                    <div class="">
                      <div class=""></div>
                      <img className="profile-image" src={User2} alt="Job" />
                    </div>
                    <div className="identity">
                      <h5>{job.creatorName}</h5>
                      <h6>{job.category}</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="tag1">{job.location}</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="tag1">{job.type}</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="tag1">{job.category}</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>{job.description}</p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="footer-info">
                    <p className="tag">Kerkoj</p>
                    <p className="value">{job.amount} freelancer</p>
                  </div>
                  <div className="footer-info">
                    <div className="tag">Afati</div>
                    <div className="value">{job.deadline}</div>
                  </div>
                  <div className="footer-info">
                    <div className="tag">Budget</div>
                    <div className="value">{job.budget}</div>
                  </div>
                  {!isMobile && (
                    <div className="footer-info">
                      <Link to="/your-desired-route" className="viewNew">
                        View
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Render the advertisement */}
            <div className="post-wrapper">
              {/* Render the advertisement data */}
              <div className="ad-container">
                <img src={Ads} alt="Ad Banner" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col"> */}

        {/* Render your banner or advertisement here */}

        {/* </div> */}
        {!isTablet && !isMobile && (
          <div className="col-sm-4">
            <div className="ad-banner-container">
              <img
                src={AdBanner}
                alt="Advertisement Banner"
                className="ad-banner"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJob;
