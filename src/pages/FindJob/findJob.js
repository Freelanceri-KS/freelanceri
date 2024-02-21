import React, { useEffect, useState } from "react";
import "./findJob.scss";
import SortBy from "../../LandingPage/components/SortByFilter/sortByFilter";
import AdBanner from "../../assets/images/adBanner.png";
import User1 from "../../assets/images/user1.png";
import User2 from "../../assets/images/user2.png";
import User3 from "../../assets/images/user3.png";
import Ads from "../../assets/images/ads.png";
import { JobPost } from "../../pages/FindJob/JobPost";

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
    id: 2,
    position: "Interior Designer",
    creatorName: "Malena Buchholz",
    location: "Prishtine",
    type: "One-Project",
    category: "Interior Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "1 dite",
    budget: "$5000",
    image: User1,
  },
  {
    position: "Interior Designer",
    creatorName: "Malena Buchholz",
    location: "Prishtine",
    type: "One-Project",
    category: "Interior Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "1 dite",
    budget: "$5000",
    image: User1,
  },
  {
    position: "Interior Designer",
    creatorName: "Malena Buchholz",
    location: "Prishtine",
    type: "One-Project",
    category: "Interior Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "1 dite",
    budget: "$5000",
    image: User1,
  },
  {
    position: "Interior Designer",
    creatorName: "Malena Buchholz",
    location: "Prishtine",
    type: "One-Project",
    category: "Interior Designer",
    description: "Create a responsive website for an online business",
    amount: 1,
    deadline: "1 dite",
    budget: "$5000",
    image: User1,
  },
  // Other data items...
];

const FindJob = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const updatedData = [...data];
    updatedData.splice(3, 0, adsData);
    setJobData(updatedData);
  }, []);

  return (
    <>
      <SortBy />
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
          <button className="searchbtnFJ">search</button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        {jobData.map((item, index) => (
          <div key={index} className="job-post-container">
            {index === 3 ? (
              <div className="ad-container">
                <img src={item.image} alt="Right Banner" />
              </div>
            ) : (
              <JobPost info={item} />
            )}
          </div>
        ))}
        <div className="right-banner-container">
          <img src={AdBanner} alt="Right Banner" />
        </div>
      </div>
    </>
  );
};

export default FindJob;
