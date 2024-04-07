import './Details.scss';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"
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


const DetailsPage = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   console.log("ASDASSDASDSADSADASDSASDAS");
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   console.log("ASDASSDASDSADSADASDSASDAS")
  //   setIsModalOpen(false);
  // }
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setJobDetail(response.data);
      } catch (error) {
        console.error('Error fetching job detail:', error);
      }
    };


    getJobDetail();
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="details-page">
      <div className="dp-left">
        <div className="dp-left-container">
          <Link to={`/`} style={{ textDecoration: 'none', color: "#363636" }}>
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
                <h6 className='dp-cp-data-h6'>{jobDetail?.userId?.firstName} {jobDetail?.userId?.lastName}</h6>
              </div>
            </div>
            <div className="dp-cp-data-time">
              <p className='dp-cp-data-p'>12/04/2024</p>
              <p className='dp-cp-data-p'>04:32pm</p>
            </div>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-email">
            <p className='dp-cp-data-p'>Email</p>
            <h5>{jobDetail?.userId?.email}</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-linkedin">
            <p className='dp-cp-data-p'>LinkedIn</p>
            <h5>{jobDetail?.userId?.socials?.linkedin}</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-instagram">
            <p className='dp-cp-data-p'>Phone</p>
            <h5> + {jobDetail?.userId?.phone}</h5>
          </div>
        </div>
      </div>
      <div className="dp-center">
        <div className="dp-center-mainpost">
          <div className="mainpost-title">
            <h5 className='mainpost-title-h5'>{jobDetail?.title}</h5>
            <MdOutlineBookmarkBorder size={30} color='#455bef' />
          </div>
          <div className="mainpost-about">
            <div className="location">
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
              <p className="mainpost-about-value">{jobDetail?.profession.category}</p>

            </div>
          </div>
          <div className="mainpost-description">
            <p>
              {jobDetail?.description}
            </p>
          </div>
          <div className="mainpost-footer">
            <div className="freelancers-nr">
              <p className='mainpost-footer-p'>Kërkoj</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.neededWorkers} freelancer</h6>
            </div>
            <div className="vert-barrier"></div>
            <div className="deadline">
              <p className='mainpost-footer-p'>Afati</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.duration} days</h6>

            </div>
            <div className="vert-barrier"></div>
            <div className="budget-details">
              <p className='mainpost-footer-p'>Bugjeti</p>
              <h6 className='mainpost-footer-h6'>{jobDetail?.budget}$</h6>

            </div>
            <button className="apply-details" onClick={() => navigate("/apply-form")}>
              <p className='a-d-p'>Apply</p>
            </button>
          </div>
        </div>
        <div className="dp-center-related">
          <h2 className='related-title'>Related</h2>
          <div className="job-post-container">
            <div className="job-post-container-header">
              <div className="jpch-left">
                <img src={User2} alt="User" width={50} height={50} className='jpch-left-img' />
                <div className="jpch-left-user">
                  <h6 className="jpch-l-h6">Social Media</h6>
                  <p className="jpch-l-p">Fjolla Berisha</p>
                </div>
              </div>
              <div className="jpch-center">
                <div className="vert-barrier" id='jpch-barrier'></div>
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
              <FaBookmark size={25} color="#455bef" className='jpch-bookmark' />
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
              <button className="jp-apply-details" onClick={() => navigate('/appform')}>
                <p className='a-d-p'>Apply</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dp-right">
        <img src={Banner} alt="Banner" className='dp-right-banner' />
      </div>
    </div>
  );
}

export default DetailsPage;

