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
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const FindJob = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTable] = useState(false);
  const [jobs, setJobs] = useState([])

  const navigate = useNavigate()

  const getJobs = () => {
    axios.get('/posts/approved').then((response) => {
      console.log(response.data);
      setJobs(response.data);
    }).catch(
      err => {
        console.log(err);
      }
    );
  };

  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const handleBookmark = (postId) => {
    const payload = {
      postId: postId,
      freelancerId: userData._id
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

  const [userData, setUserData] = useState(null);



  useEffect(() => {
    const userDataString = window.localStorage.getItem("userData");
    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, []);

  const [expandedItem, setExpandedItem] = useState('category');
  const [category, setCategory] = useState([]);
  const getCategory = () => {
    axios
      .get("/profession")
      .then((response) => {
        console.log(response.data)
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleItemClick = (itemId) => {
    if (itemId == "category") {
      getCategory();
    }
    setExpandedItem((prevItem) => (prevItem == itemId ? null : itemId));
  };


  useEffect(() => {
    getCategory();
  }, [])

  useEffect(() => {
    getJobs();
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
        <div className="filter">
          <ul className="list-group expandable-list ">
            <li className="list-group-item lgi-title">
              <h2 className="lgi-h2">Sort By Filter</h2>
              <CiFilter size={30} color="#455bef" />
            </li>
            <li
              onClick={() => handleItemClick("category")}
              className={`list-group-item ${expandedItem === "category" ? <IoIosArrowUp /> : <IoIosArrowDown />

                }`}
            >
              <div className="d-flex justify-content-between align-items-center single-item">
                <h5>Category</h5>
                <span className="icon" role="button">
                  {expandedItem === "category" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

            </li>
            <li className="list-group-item">{expandedItem === "category" && (
              <div className="expanded-content mt-3">
                <div className="rowi gap-2">
                  {category?.map((el) => {
                    return (
                      <>
                        <button className="category-item-btn">
                          {el?.category}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            )}</li>

            {/* <li
            onClick={() => handleItemClick("item2")}
            className={`list-group-item ${expandedItem == "item2" ? "" : ""}`}
          >
            <div className="d-flex align-items-center single-item">
              <h5>Location</h5>
              <span className="icon" role="button">
                {expandedItem == "item2" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {expandedItem == "item2" && (
              <div className="expanded-content">
                <p>Expanded content for Item 2</p>
              </div>
            )}
          </li> */}
          </ul>
        </div>
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
                      <p className="tag">Category</p>
                      <p className="value">{el?.profession.category}</p>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <div className="tag">City</div>
                      <div className="value">{el?.city.city}</div>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <div className="tag">Experience</div>
                      <div className="value">{el?.experienceLevel}</div>
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
