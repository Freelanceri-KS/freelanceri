import React, { useState } from "react";
import './findJob.scss'
import SortBy from "../../LandingPage/components/SortByFilter/sortByFilter";
import Profile from "../../assets/profiles/2.png";
import { FaBookmark } from "react-icons/fa";
import axios from "../../axios";
import Banner from "../../assets/images/banner.png"


const FindJob = () => {
const [jobs , setJobs] = useState([])

function GetJobs(){
  axios.get('')
}
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"><SortBy /></div>
          <div className="col-sm-8 centerdiv">
            <div className="findjob">
              {}
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="left">
                    <img src={Profile} alt="Profile picture" height={35} />
                    <div className="identity">
                      <h5>Full name</h5>
                      <h6>Profession</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="tag1">Prishtina</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="tag1">Remote</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="tag1">Graphic Designer</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="no-of-worker">
                      <p className="tag">Kerkoj</p>
                      <p className="value">1 freelancer</p>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <button className="view">
                    View
                  </button>
                </div>
              </div>
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="left">
                    <img src={Profile} alt="Profile picture" height={30} />
                    <div className="identity">
                      <h5>Full name</h5>
                      <h6>Profession</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="location-name">Prishtina</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="type-name">Remote</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="category-name">Graphic Designer</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="no-of-worker">
                    <div className="wrapper">
                      <p className="tag">Kerkoj</p>
                      <p className="value">1 freelancer</p>
                    </div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <button className="view">
                    View
                  </button>
                </div>
              </div>
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="left">
                    <img src={Profile} alt="Profile picture" height={30} />
                    <div className="identity">
                      <h5>Full name</h5>
                      <h6>Profession</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="location-name">Prishtina</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="type-name">Remote</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="category-name">Graphic Designer</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="no-of-worker">
                    <div className="wrapper">
                      <p className="tag">Kerkoj</p>
                      <p className="value">1 freelancer</p>
                    </div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <button className="view">
                    View
                  </button>
                </div>
              </div>
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="left">
                    <img src={Profile} alt="Profile picture" height={30} />
                    <div className="identity">
                      <h5>Full name</h5>
                      <h6>Profession</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="location-name">Prishtina</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="type-name">Remote</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="category-name">Graphic Designer</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="no-of-worker">
                    <div className="wrapper">
                      <p className="tag">Kerkoj</p>
                      <p className="value">1 freelancer</p>
                    </div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <button className="view">
                    View
                  </button>
                </div>
              </div>
              <div className="post-wrapper">
                <div className="post-header">
                  <div className="left">
                    <img src={Profile} alt="Profile picture" height={30} />
                    <div className="identity">
                      <h5>Full name</h5>
                      <h6>Profession</h6>
                    </div>
                  </div>
                  <div className="center">
                    <div className="barrier"></div>
                    <div className="location">
                      <p className="location-tag">Location</p>
                      <p className="location-name">Prishtina</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="type">
                      <p className="type-tag">Type</p>
                      <p className="type-name">Remote</p>
                    </div>
                    <div className="barrier"></div>
                    <div className="category">
                      <p className="category-tag">Category</p>
                      <p className="category-name">Graphic Designer</p>
                    </div>
                  </div>
                  <div className="right">
                    <FaBookmark color="#445bef" size={25} />
                  </div>
                </div>
                <div className="post-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="line"></div>
                <div className="post-footer">
                  <div className="no-of-worker">
                    <div className="wrapper">
                      <p className="tag">Kerkoj</p>
                      <p className="value">1 freelancer</p>
                    </div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <div className="barrier"></div>
                  <div className="afati">
                    <div className="tag">Afati</div>
                    <div className="value">3 dite</div>
                  </div>
                  <button className="view">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={Banner} alt="banner" className="banner" />
            {/* <div className="banner"></div> */}
          </div>
        </div>
      </div>

    </>
  );
}
export default FindJob









{/* <div className="find-job">
<SortBy />
<div className="findjob">
  <div className="post-wrapper">
    <div className="post-header">
      <div className="left">
        <img src={Profile} alt="Profile picture" height={30}/>
        <div className="identity">
          <h5>Full name</h5>
          <h6>Profession</h6>
        </div>
      </div>
      <div className="center">
        <div className="barrier"></div>
        <div className="location">
          <p className="location-tag">Location</p>
          <p className="location-name">Prishtina</p>
        </div>
        <div className="barrier"></div>
        <div className="type">
          <p className="type-tag">Type</p>
          <p className="type-name">Remote</p>
        </div>
        <div className="barrier"></div>
        <div className="category">
          <p className="category-tag">Category</p>
          <p className="category-name">Graphic Designer</p>
        </div>
      </div>
      <div className="right">
        <FaBookmark  color="#445bef" size={25}/>
      </div>  
    </div>    
    <div className="post-body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
    <div className="line"></div>
    <div className="post-footer">
      <div className="no-of-worker">
        <div className="wrapper">
        <p className="tag">Kerkoj</p>
        <p className="value">1 freelancer</p>
        </div>
      </div>
      <div className="barrier"></div>
      <div className="afati">
        <div className="tag">Afati</div>
        <div className="value">3 dite</div>
      </div>
      <div className="barrier"></div>
      <div className="afati">
        <div className="tag">Afati</div>
        <div className="value">3 dite</div>
      </div>
      <button className="view">
        View
      </button>
    </div>
  </div>
</div>
<div className="banner">

</div>
</div> */}