import './Details.scss';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/profiles/business.png"
import User2 from "../../assets/images/user2.png"
import Banner from "../../assets/banners/banner.png"
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import axios from '../../axios';
import { data } from 'jquery';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setLang, setLoggedInBusiness, setLoggedInFreelancer } from "../../redux/Functions/actions";
import { connect } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";



const DetailsPage = (props) => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);


  const handlePostDelte = () => {
    const payload = {
      state: "Expired"
    }
    try {
      axios.patch(`/posts/${jobDetail._id}`, payload)
        .then((response) => {
          navigate(-1);
        })
    } catch (error) {
      console.log(error)
    }
  }

  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setJobDetail(response.data);
      } catch (error) {
        console.error('Error fetching job detail:', error);
      }
    };
    if (id) {
      getJobDetail();
    }
  }, []);

  useEffect(() => {
    const getSimilarPosts = () => {
      if (jobDetail && jobDetail._id) {
        axios.get(`/posts/similarPost/${jobDetail._id}`)
          .then((response) => {
            setSimilarPosts(response.data)
          })
          .catch((error) => {
            console.log("Similar posts error:", error);
          });
      }
    };

    getSimilarPosts();
  }, [jobDetail]);

  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;

  // const [existCheck, setExistCheck] = useState(null);

  // useEffect(() => {
  //   const checkExistingApp = async () => {
  //     if (userData && jobDetail && existCheck === null) {
  //       try {
  //         const response = await axios.get(`/application/check/${userData?._id}/${jobDetail?._id}`);
  //         console.log(`/${userData?._id}/${jobDetail?._id}`)
  //         console.log("Check existing app", response.data);
  //         setExistCheck(response.data);
  //         console.log(existCheck?.exists);
  //       } catch (error) {
  //         console.log("Existing app error:", error);
  //       }
  //     }
  //   };

  //   checkExistingApp();
  // }, [userData, jobDetail, existCheck]);


  const navigate = useNavigate();
  return (
    <div className="details-page">
      <div className="dp-left">
        <div className="dp-left-container">
          <Link to={-1} style={{ textDecoration: 'none', color: "#363636" }}>
            <div className="dp-left-container-header">
              <MdOutlineArrowBackIosNew size={30} color='#455bef' />
              <h5>Go back</h5>
            </div>
          </Link>

          <div classNasme="horiz-barrier"></div>
          <div className="dp-left-container-profile">
            <div className="dp-cp-left">
              <img src={User} alt="User profile picture" height={60} className='dpcp-image' />
              <div className="dp-cp-data">
                <p className='dp-cp-data-p'>Posted by:</p>
                <h6 className='dp-cp-data-h6'>{jobDetail?.userId?.companyName}</h6>
              </div>
            </div>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-email">
            <p className='dp-cp-data-p'>Email</p>
            <h5>{jobDetail?.userId?.email}</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-linkedin">
            <p className='dp-cp-data-p'>Website</p>
            <h5>{jobDetail?.userId?.website}</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-instagram">
            <p className='dp-cp-data-p'>Industry</p>
            <h5>{jobDetail?.userId?.companyType}</h5>
          </div>
        </div>
      </div>
      <div className="dp-center">
        <div className="dp-center-mainpost">
          <div className="mainpost-title">
            <h5 className='mainpost-title-h5'>{jobDetail?.title}</h5>
            {props.isLoggedInBusiness ? (
              <MdDeleteOutline size={25} color='red' style={{ cursor: "pointer" }} onClick={handlePostDelte} />

            ) : (
              <FaRegBookmark size={25} color='#455bef' />
            )
            }
          </div>
          <div className="mainpost-about">
            {/* <div className="location">
              <p className='mainpost-about-tag'>Location</p>
              <p className="mainpost-about-value">{jobDetail?.city.city}</p>
            </div>
            <div className="vert-barrier"></div>
            <div className="type">
              <p className='mainpost-about-tag'>Experience</p>
              <p className="mainpost-about-value">{jobDetail?.experienceLevel}</p>
            </div>
            <div className="vert-barrier"></div>
            <div className="category">
              <p className='mainpost-about-tag'>Category</p>
              <p className="mainpost-about-value">{jobDetail?.profession?.category}</p>

            </div> */}
          </div>
          <div className="mainpost-description">
            <p className='mainpost-description-body'>
              <h6>Description:</h6>
              <p>{jobDetail?.description}</p>
              <h6 className='requirements'>Requirements:</h6>
              <p>{jobDetail?.requirements}</p>
            </p>
          </div>
          <div className="mainpost-footer">
            <div className="freelancers-nr">
              <p className='mainpost-footer-p'>Duration:</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.duration}</h6>
            </div>
            <div className="vert-barrier"></div>
            <div className="deadline">
              <p className='mainpost-footer-p'>Experience</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.experienceLevel}</h6>

            </div>
            <div className="vert-barrier"></div>
            <div className="budget-details">
              <p className='mainpost-footer-p'>Category</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.profession?.category}</h6>

            </div>
              <button className="apply-details" key={jobDetail?._id} onClick={() => navigate(`/app-form/${jobDetail?._id}`)} style={{ textDecoration: 'none' }}>
                <p className='a-d-p'>Apply</p>
              </button>

          </div>
        </div>
        {!props.isLoggedInBusiness && (
          <div className="dp-center-related">
            <h2 className='related-title'>Related</h2>
            {similarPosts.length === 0 ? (
              <><p>No similar posts</p></>
            ) : (
              similarPosts.map((sp) => (
                <div className="job-post-container">
                  <div className="job-post-container-header">
                    <div className="jpch-left">
                      <img src={User} alt="User" width={50} height={50} className='jpch-left-img' />
                      <div className="jpch-left-user">
                        <h6 className="jpch-l-h6">{sp?.title}</h6>
                        <p className="jpch-l-p">{sp?.userId?.firstName} {sp?.userId?.lastName}</p>
                      </div>
                    </div>
                    <div className="jpch-center">
                      <div className="vert-barrier" id='jpch-barrier'></div>
                      <div className="jpch-center-tags">
                        <p className="jpch-c-tag">Location</p>
                        <p className="mainpost-about-value">{jobDetail?.duration}</p>

                      </div>
                      <div className="vert-barrier"></div>
                      <div className="jpch-center-tags">
                        <p className="jpch-c-tag">Experience</p>
                        <h6 className="jpch-c-value">{sp?.experienceLevel}</h6>
                      </div>
                      <div className="vert-barrier"></div>
                      <div className="jpch-center-tags">
                        <p className="jpch-c-tag">Category</p>
                        <h6 className="jpch-c-value">{sp?.profession?.category}</h6>
                      </div>
                    </div>
                    <FaRegBookmark size={25} color="#455bef" className='jpch-bookmark' />
                  </div>
                  <div className="job-post-container-body" onClick={() => navigate(`/details-page/${sp?._id}`)}>
                    <p className="jpcb-p">
                      {sp?.description}
                    </p>
                  </div>
                  <div className="footer-line"></div>
                  <div className="job-post-footer" onClick={() => navigate(`/details-page/${sp?._id}`)}>
                    <div className="jp-footer-info">
                      <p className="tag">Kerkoj</p>
                      <p className="value">{sp?.neededWorkers}freelancer</p>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <div className="tag">Afati</div>
                      <div className="value">{sp?.duration}ditë</div>
                    </div>
                    <div className="vert-barrier"></div>
                    <div className="jp-footer-info">
                      <div className="tag">Budget</div>
                      <div className="value">{sp?.budget}$</div>
                    </div>
                    <button className="jp-apply-details" onClick={() => navigate(`/details-page/${sp?._id}`)}>
                      <p className='a-d-p'>Apply</p>
                    </button>


                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="dp-right">
        <img src={Banner} alt="Banner" className='dp-right-banner' />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedinFreelancer: state.data.isLoggedinFreelancer,
    isLoggedInBusiness: state.data.isLoggedinBusiness
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
    setLoggedInFreelancer: (data) => {
      dispatch(setLoggedInFreelancer(data));
    },
    setLoggedInBusiness: (data) => {
      dispatch(setLoggedInBusiness(data))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
