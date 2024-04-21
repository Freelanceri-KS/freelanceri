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
import { FaRegBookmark } from "react-icons/fa";


const FindJob = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTable] = useState(false);
  const [jobs, setJobs] = useState([])

  const navigate = useNavigate()

  const getJobs = () => {
    axios.get('/posts/all').then(
      data => {
        console.log(data.data);
        setJobs(data?.data);
        localStorage.setItem('jobs', JSON.stringify(data?.data)); // Save jobs list to localStorage
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  };

  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const handleBookmark = (postId) => {
    const payload = {
      postId: postId,
      freelancerId: "66195b30074c981da043a206"
    }
    axios.post("/bookmark", payload)
      .then((response) => {
        console.log(response.data);
        setBookmarkedPosts([...bookmarkedPosts, postId]); // Add the postId to bookmarked list
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const removeBookmark = (postId) => {
    axios.delete(`/bookmark/${postId}`)
      .then((response) => {
        console.log(response.data);
        setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId)); // Remove the postId from bookmarked list
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      getJobs();
    }
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
          {jobs?.map((el, index) => {
            const isBookmarked = bookmarkedPosts.includes(el._id); // Check if the post is bookmarked

            return (
              <>
                <div className="job-post-container" key={el._id} >
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
                    {isBookmarked ? (
                      <FaBookmark size={25} color="#455bef" onClick={() => removeBookmark(el._id)} />
                    ) : (
                      <FaRegBookmark size={25} color="#455bef" onClick={() => handleBookmark(el._id)} />
                    )}
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
                    <button onClick={() => navigate(`/details-page/${el._id}`)} className="jp-apply-details">
                      <p className='a-d-p'>Apply</p>
                    </button>
                  </div>
                </div>
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
