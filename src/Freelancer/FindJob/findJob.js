import React, { useEffect, useState } from "react";
import "./findJob.scss";
import User2 from "../../assets/profiles/2.png";
import Ads from "../../assets/banners/ads.png";
import AdBanner from "../../assets/banners/adBanner.png"
import axios from "../../axios";
import SortByFilter from "../../LandingPage/components/SortByFilter/sortByFilter";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";

const FindJob = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTable] = useState(false);
  const [jobs, setJobs] = useState([])

  const getJobs = () => {
    axios.get('').then(
      data => {
        console.log(data.data)
        setJobs(data?.data)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  useEffect(() => {
    getJobs()
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTable(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.location.href = "/details-page";
  };

  return (
    <div className="find-job">
      <div className="find-job-left">
        <SortByFilter />
      </div>
      <div className="find-job-center">
        <div className="search-filter-bar">
          <div class="input-with-icon">
            <input type="text" class="form-control" placeholder=" Job title..." />
            <span class="icon-prefix"><IoSearchOutline size={20} />
            </span>
          </div>
          <div className="vert-barrier"></div>
          <div class="input-with-icon">
            <input type="text" class="form-control" placeholder=" City, Location..." />
            <span class="icon-prefix"><CiLocationOn size={20} />

            </span>
          </div>
          <div className="vert-barrier"></div>
          <div className="search-button">Search</div>
        </div>
        <div className="job-post-list">
          <div className="job-post-container" onClick={handleClick}>
            <div className="job-post-container-header">
              <div className="jpch-left">
                <img src={User2} alt="User" width={50} height={50} />
                <div className="jpch-left-user">
                  <h6 className="jpch-l-h6">Social Media</h6>
                  <p className="jpch-l-p">By:Fjolla Berisha</p>
                </div>
              </div>
              <div className="jpch-center">
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Location</p>
                  <h6 className="jpch-c-value">Prishtina</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Type</p>
                  <h6 className="jpch-c-value">Full-Time</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Category</p>
                  <h6 className="jpch-c-value">Graphic Designer</h6>
                </div>
              </div>
              <FaBookmark size={25} color="#455bef" />
            </div>
            <div className="job-post-container-body">
              <p className="jpcb-p">
                I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                <br />
                <br />
                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
              </p>
            </div>
            <div className="footer-line"></div>
            <div className="job-post-footer">
              <div className="jp-footer-info">
                <p className="tag">Kerkoj</p>
                <p className="value">1 freelancer</p>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Afati</div>
                <div className="value">3 ditë</div>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Budget</div>
                <div className="value">4100$</div>
              </div>
              <button className="jp-apply-details">
                <p className='a-d-p'>Apply</p>
              </button>
            </div>
          </div>
          <div className="job-post-container">
            <div className="job-post-container-header">
              <div className="jpch-left">
                <img src={User2} alt="User" width={50} height={50} />
                <div className="jpch-left-user">
                  <h6 className="jpch-l-h6">Social Media</h6>
                  <p className="jpch-l-p">By:Fjolla Berisha</p>
                </div>
              </div>
              <div className="jpch-center">
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Location</p>
                  <h6 className="jpch-c-value">Prishtina</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Type</p>
                  <h6 className="jpch-c-value">Full-Time</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Category</p>
                  <h6 className="jpch-c-value">Graphic Designer</h6>
                </div>
              </div>
              <FaBookmark size={25} color="#455bef" />
            </div>
            <div className="job-post-container-body">
              <p className="jpcb-p">
                I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                <br />
                <br />
                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
              </p>
            </div>
            <div className="footer-line"></div>
            <div className="job-post-footer">
              <div className="jp-footer-info">
                <p className="tag">Kerkoj</p>
                <p className="value">1 freelancer</p>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Afati</div>
                <div className="value">3 ditë</div>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Budget</div>
                <div className="value">4100$</div>
              </div>
              <button className="jp-apply-details">
                <p className='a-d-p'>Apply</p>
              </button>
            </div>
          </div>
          <img src={Ads} alt="Banner" className="job-list-banner" />
          <div className="job-post-container">
            <div className="job-post-container-header">
              <div className="jpch-left">
                <img src={User2} alt="User" width={50} height={50} />
                <div className="jpch-left-user">
                  <h6 className="jpch-l-h6">Social Media</h6>
                  <p className="jpch-l-p">By:Fjolla Berisha</p>
                </div>
              </div>
              <div className="jpch-center">
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Location</p>
                  <h6 className="jpch-c-value">Prishtina</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Type</p>
                  <h6 className="jpch-c-value">Full-Time</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Category</p>
                  <h6 className="jpch-c-value">Graphic Designer</h6>
                </div>
              </div>
              <FaBookmark size={25} color="#455bef" />
            </div>
            <div className="job-post-container-body">
              <p className="jpcb-p">
                I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                <br />
                <br />
                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
              </p>
            </div>
            <div className="footer-line"></div>
            <div className="job-post-footer">
              <div className="jp-footer-info">
                <p className="tag">Kerkoj</p>
                <p className="value">1 freelancer</p>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Afati</div>
                <div className="value">3 ditë</div>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Budget</div>
                <div className="value">4100$</div>
              </div>
              <button className="jp-apply-details">
                <p className='a-d-p'>Apply</p>
              </button>
            </div>
          </div>        </div>
      </div>
      <div className="find-job-right">
        <img src={AdBanner} alt="Advertising" className="find-job-right-banner" />
      </div>
    </div>
  );
};

export default FindJob;
