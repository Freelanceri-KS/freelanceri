import React, { useEffect, useState } from "react";
import "./findJob.scss";
import axios from "../../axios";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import AdBanner from "../../assets/banners/adBanner.png"
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import AdArea from "../../assets/banners/adarea.png"

const FindJob = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const getJobs = () => {
    axios.get('/posts/approved', { params: { search: searchQuery, category: categoryQuery } })
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  };

  useEffect(() => {
    getJobs();
  }, [searchQuery, categoryQuery]);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryQuery(event.target.value);
  };
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleBookmark = (postId) => {
    if (userData && userData._id) {
      const payload = {
        postId: postId,
        freelancerId: userData._id
      }
      axios.post("/bookmark", payload)
        .then((response) => {
          setBookmarkedPosts([...bookmarkedPosts, postId]);
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      console.error('Error: userData or userData._id is null');
    }
  }


  const removeBookmark = (postId) => {
    axios.delete(`/bookmark/${postId}`)
      .then((response) => {
        setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId)); // Remove the postId from bookmarked list
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const [expandedItem, setExpandedItem] = useState('category');
  const [category, setCategory] = useState([]);
  const getCategory = () => {
    axios
      .get("/profession")
      .then((response) => {
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

  return (
    <div className="find-job">
      <div className="find-job-left">
        {/* <div className="filter">
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
          </ul>
        </div> */}
      </div>
      <div className="find-job-center">
        <div className="search-filter-bar">
          <div className="input-with-icon">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Search job title..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="icon-prefix">
              <IoSearchOutline size={20} />
            </span>
          </div>
          <div className="vert-barriers"></div>
          <div className="input-with-icon">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Profession..."
              value={categoryQuery}
              onChange={handleCategoryChange}
            />
            <span className="icon-prefix">
              <MdWorkOutline size={20} />
            </span>
          </div>
        </div>
        <div className="job-post-list">
          {jobs.map((el) => {
            const isBookmarked = bookmarkedPosts.includes(el._id);

            const matchesSearch = el.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = el.profession.category.toLowerCase().includes(categoryQuery.toLowerCase());

            if (matchesSearch || matchesCategory) {
              return (
                <div className="job-post-container" key={el?._id}>
                  <div className="job-post-container-header">
                    <div className="jpch-left">
                      <div className="jpch-left-user">
                        <h6 className="jpch-l-h6">{el?.title}</h6>
                        <p className="jpch-l-p">{el?.userId?.firstName} {el?.userId?.lastName}</p>
                      </div>
                    </div>
                    <div className="jpch-center">
                      {/* Center content */}
                    </div>
                    {isBookmarked ? (
                      <FaBookmark size={25} color="#455bef" onClick={() => removeBookmark(el?._id)} />
                    ) : (
                      <FaRegBookmark size={25} color="#455bef" onClick={() => handleBookmark(el?._id)} />
                    )}
                  </div>
                  <div className="job-post-container-body" onClick={() => navigate(`/details-page/${el?._id}`)}>
                    <p className="jpcb-p">{el?.description}</p>
                  </div>
                  <div className="footer-line"></div>
                  <div className="job-post-footer">
                    <div className="jp-footer-info">
                      <p className="tag">Category</p>
                      <p className="value">{el?.profession.category}</p>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <p className="tag">Duration</p>
                      <p className="value">{el?.duration}</p>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <p className="tag">Experience</p>
                      <p className="value">{el?.experienceLevel}</p>
                    </div>
                    <button onClick={() => navigate(`/details-page/${el._id}`)} className="jp-apply-details">
                      <p className='a-d-p'>Apply</p>
                    </button>
                  </div>
                </div>
              );
            } else {
              <><p>No post found</p></>
            }
          })}
        </div>
      </div>
      <div className="find-job-right">
        <img src={AdArea} alt="Advertising" className="find-job-right-banner" />
      </div>
    </div>
  );

};

export default FindJob;
