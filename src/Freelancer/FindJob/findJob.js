import React, { useEffect, useState } from "react";
import "./findJob.scss";
import User2 from "../../assets/profiles/2.png";
import Ads from "../../assets/banners/ads.png";
import AdBanner from "../../assets/banners/adBanner.png"
import axios from "../../axios";
import SortByFilter from "./SortByFilter/sortByFilter";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const FindJob = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTable] = useState(false);
  const [jobs, setJobs] = useState([])

  const navigate = useNavigate()

  const getJobs = () => {
    axios.get('/posts/all').then(
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

          {/* MAPING SETUP */}
          {jobs?.map(el => {
            return (
              <>
                <Link to={`/details-page/${el._id}`} key={el._id} style={{ textDecoration: 'none' }}>
                  <div className="job-post-container">
                    <div className="job-post-container-header">
                      <div className="jpch-left">
                        <img src={User2} alt="User" width={50} height={50} />
                        <div className="jpch-left-user">
                          <h6 className="jpch-l-h6">{el?.title}</h6>
                          <p className="jpch-l-p">{el?.userId.firstName} {el?.userId.lastName}</p>
                        </div>
                      </div>
                      <div className="jpch-center">
                        <div className="vert-barrier"></div>
                        <div className="jpch-center-tags">
                          <p className="jpch-c-tag">Location</p>
                          <h6 className="jpch-c-value">{el?.city.city}</h6>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="jpch-center-tags">
                          <p className="jpch-c-tag">Experience</p>
                          <h6 className="jpch-c-value">{el?.experienceLevel}</h6>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="jpch-center-tags">
                          <p className="jpch-c-tag">Category</p>
                          <h6 className="jpch-c-value">{el?.profession.category}</h6>
                        </div>
                      </div>
                      <FaBookmark size={25} color="#455bef" />
                    </div>
                    <div className="job-post-container-body">
                      <p className="jpcb-p">
                        {el?.description}
                      </p>
                    </div>
                    <div className="footer-line"></div>
                    <div className="job-post-footer">
                      <div className="jp-footer-info">
                        <p className="tag">Kerkoj</p>
                        <p className="value">{el?.neededWorkers} freelancer</p>
                      </div>
                      <div className="vert-barrier"></div>
                      <div className="jp-footer-info">
                        <div className="tag">Afati</div>
                        <div className="value">{el?.duration} ditë</div>
                      </div>
                      <div className="vert-barrier"></div>
                      <div className="jp-footer-info">
                        <div className="tag">Budget</div>
                        <div className="value">{el?.budget}$</div>
                      </div>
                      <button onClick={() => navigate('/details-page')} className="jp-apply-details">
                        <p className='a-d-p'>Apply</p>
                      </button>
                    </div>
                  </div></Link>
              </>
            )
          })}

          {/* <img src={Ads} alt="Banner" className="job-list-banner" /> */}
        </div>
      </div>
      <div className="find-job-right">
        <img src={AdBanner} alt="Advertising" className="find-job-right-banner" />
      </div>
    </div>
  );
};

export default FindJob;
