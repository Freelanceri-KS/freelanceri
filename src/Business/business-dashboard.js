import './business-dashboard.scss'
import Graph from "../assets/graph.png"
import { FiPlusCircle } from "react-icons/fi";
import Ads from "../assets/banners/ads.png";
import { FaBookmark } from "react-icons/fa6";
import User2 from "../assets/profiles/2.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BusinessDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('Overview');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };


    return (
        <>
            <div className="business-dashboard">
                <div className="wrap">
                    <div className="options">
                        <div className="create-post">
                            <p>Create post <FiPlusCircle color="white" size={25} />
                            </p>
                        </div>
                        <ul>
                            <li>
                                <a href="" onClick={() => handleOptionClick('Overview')} className={
                                    selectedOption === 'Overview'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                }>
                                    Overview
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Posts'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Posts')}>
                                    Posts
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Applications'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Applications')}>
                                    Applications
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Find talents'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Find talents')}>
                                    Find
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Profile'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Profile')}>
                                    Profile
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="right-side" >
                        {selectedOption === 'Overview' && (
                            <Overview />
                        )}
                        {selectedOption === 'Posts' && (
                            <Posts />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

function Overview() {
    const navigate = useNavigate()
    return (
        <div className="content">
            <div className="content-header">
                <div className="stat">
                    <h6 className="stat-name">Number of users</h6>
                    <h1 className="stat-nr">320</h1>
                </div>
                <div className="header-barrier"></div>
                <div className="stat">
                    <h6 className="stat-name">Number of posts</h6>
                    <h1 className="stat-nr">120</h1>
                </div>
                <div className="header-barrier"></div>
                <div className="stat">
                    <h6 className="stat-name">Number of applications</h6>
                    <h1 className="stat-nr">230</h1>
                </div>
            </div>
            <div className="content-body">
                <div className="content-body-sec1">
                    <div className="content-body-sec1-recentpost">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Recent post</h4>
                        </div>
                        <div className="db-post-container">
                            <div className="db-post-container-header">
                                <div className="dbpch-left">
                                    <img src={User2} alt="User" width={50} height={50} />
                                    <div className="dbpch-left-user">
                                        <h6 className="dbpch-l-h6">Social Media</h6>
                                        <p className="dbpch-l-p">Fjolla Berisha</p>
                                    </div>
                                </div>
                                <div className="dbpch-center">
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Location</p>
                                        <h6 className="dbpch-c-value">Prishtina</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Type</p>
                                        <h6 className="dbpch-c-value">Full-Time</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Category</p>
                                        <h6 className="dbpch-c-value">Graphic Designer</h6>
                                    </div>
                                </div>
                                <FaBookmark size={25} color="#455bef" />
                            </div>
                            <div className="db-post-container-body">
                                <p className="dbpcb-p">
                                    Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                                    <br />
                                    <br />
                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                                    <br />
                                    <br />

                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                                </p>
                            </div>
                            <div className="footer-line"></div>
                            <div className="db-post-footer">
                                <div className="dbp-footer-info">
                                    <p className="tag">Kerkoj</p>
                                    <p className="value">1 freelancer</p>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbp-footer-info">
                                    <div className="tag">Afati</div>
                                    <div className="value">3 ditë</div>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbp-footer-info">
                                    <div className="tag">Budget</div>
                                    <div className="value">4100$</div>
                                </div>
                                <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                                    <p className='a-d-p'>Apply</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-body-sec1-appls">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Applications</h4>
                        </div>
                        <div className="cbsa-grid">
                            <div className="cbsa-card">
                                <img src={User2} alt="" className="cbsa-card-img" />
                                <h6 className="cbsa-card-h6">Malena Buchholz</h6>
                                <p className="cbsa-card-p">Graphic Designer</p>
                            </div>
                            <div className="cbsa-card">
                                <img src={User2} alt="" className="cbsa-card-img" />
                                <h6 className="cbsa-card-h6">Malena Buchholz</h6>
                                <p className="cbsa-card-p">Graphic Designer</p>
                            </div>
                            <div className="cbsa-card">
                                <img src={User2} alt="" className="cbsa-card-img" />
                                <h6 className="cbsa-card-h6">Malena Buchholz</h6>
                                <p className="cbsa-card-p">Graphic Designer</p>
                            </div>
                            <div className="cbsa-card">
                                <img src={User2} alt="" className="cbsa-card-img" />
                                <h6 className="cbsa-card-h6">Malena Buchholz</h6>
                                <p className="cbsa-card-p">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body-sec2">
                    <div className="content-body-sec2-recentpost">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Most viewed post</h4>
                        </div>
                        <div className="db-post-container">
                            <div className="db-post-container-header">
                                <div className="dbpch-left">
                                    <img src={User2} alt="User" width={50} height={50} />
                                    <div className="dbpch-left-user">
                                        <h6 className="dbpch-l-h6">Social Media</h6>
                                        <p className="dbpch-l-p">Fjolla Berisha</p>
                                    </div>
                                </div>
                                <div className="dbpch-center">
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Location</p>
                                        <h6 className="dbpch-c-value">Prishtina</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Type</p>
                                        <h6 className="dbpch-c-value">Full-Time</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbpch-center-tags">
                                        <p className="dbpch-c-tag">Category</p>
                                        <h6 className="dbpch-c-value">Graphic Designer</h6>
                                    </div>
                                </div>
                                <FaBookmark size={25} color="#455bef" />
                            </div>
                            <div className="db-post-container-body">
                                <p className="dbpcb-p">
                                    Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                                    <br />
                                    <br />
                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                                    <br />
                                    <br />

                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                                </p>
                            </div>
                            <div className="footer-line"></div>
                            <div className="db-post-footer">
                                <div className="dbp-footer-info">
                                    <p className="tag">Kerkoj</p>
                                    <p className="value">1 freelancer</p>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbp-footer-info">
                                    <div className="tag">Afati</div>
                                    <div className="value">3 ditë</div>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbp-footer-info">
                                    <div className="tag">Budget</div>
                                    <div className="value">4100$</div>
                                </div>
                                <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                                    <p className='a-d-p'>Apply</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-body-sec2-appls">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Suggested</h4>
                        </div>
                        <div className="cbsa-wrap">

                            <div className="cbsa-card2">
                                <img src={User2} alt="" className="cbsa-card-img2" />
                                <h6 className="cbsa-card-h62">Malena Buchholz</h6>
                                <p className="cbsa-card-p2">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Posts() {
    const navigate = useNavigate()
    return (
        <div className="posts-business">
            <h4>Ongoing posts</h4>
            <div className="ongoing-posts">
                <div className="db-post-container">
                    <div className="db-post-container-header">
                        <div className="dbpch-left">
                            <img src={User2} alt="User" width={50} height={50} />
                            <div className="dbpch-left-user">
                                <h6 className="dbpch-l-h6">Social Media</h6>
                                <p className="dbpch-l-p">Fjolla Berisha</p>
                            </div>
                        </div>
                        <div className="dbpch-center">
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Location</p>
                                <h6 className="dbpch-c-value">Prishtina</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Type</p>
                                <h6 className="dbpch-c-value">Full-Time</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Category</p>
                                <h6 className="dbpch-c-value">Graphic Designer</h6>
                            </div>
                        </div>
                        <FaBookmark size={25} color="#455bef" />
                    </div>
                    <div className="db-post-container-body">
                        <p className="dbpcb-p">
                            Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                            <br />
                            <br />
                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                            <br />
                            <br />

                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                        </p>
                    </div>
                    <div className="footer-line"></div>
                    <div className="db-post-footer">
                        <div className="dbp-footer-info">
                            <p className="tag">Kerkoj</p>
                            <p className="value">1 freelancer</p>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Afati</div>
                            <div className="value">3 ditë</div>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Budget</div>
                            <div className="value">4100$</div>
                        </div>
                        <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                            <p className='a-d-p'>Apply</p>
                        </button>
                    </div>
                </div>
                <div className="db-post-container">
                    <div className="db-post-container-header">
                        <div className="dbpch-left">
                            <img src={User2} alt="User" width={50} height={50} />
                            <div className="dbpch-left-user">
                                <h6 className="dbpch-l-h6">Social Media</h6>
                                <p className="dbpch-l-p">Fjolla Berisha</p>
                            </div>
                        </div>
                        <div className="dbpch-center">
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Location</p>
                                <h6 className="dbpch-c-value">Prishtina</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Type</p>
                                <h6 className="dbpch-c-value">Full-Time</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Category</p>
                                <h6 className="dbpch-c-value">Graphic Designer</h6>
                            </div>
                        </div>
                        <FaBookmark size={25} color="#455bef" />
                    </div>
                    <div className="db-post-container-body">
                        <p className="dbpcb-p">
                            Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                            <br />
                            <br />
                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                            <br />
                            <br />

                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                        </p>
                    </div>
                    <div className="footer-line"></div>
                    <div className="db-post-footer">
                        <div className="dbp-footer-info">
                            <p className="tag">Kerkoj</p>
                            <p className="value">1 freelancer</p>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Afati</div>
                            <div className="value">3 ditë</div>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Budget</div>
                            <div className="value">4100$</div>
                        </div>
                        <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                            <p className='a-d-p'>Apply</p>
                        </button>
                    </div>
                </div>
            </div>
            <h4>All posts</h4>
            <div className="ongoing-posts">
                <div className="db-post-container">
                    <div className="db-post-container-header">
                        <div className="dbpch-left">
                            <img src={User2} alt="User" width={50} height={50} />
                            <div className="dbpch-left-user">
                                <h6 className="dbpch-l-h6">Social Media</h6>
                                <p className="dbpch-l-p">Fjolla Berisha</p>
                            </div>
                        </div>
                        <div className="dbpch-center">
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Location</p>
                                <h6 className="dbpch-c-value">Prishtina</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Type</p>
                                <h6 className="dbpch-c-value">Full-Time</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Category</p>
                                <h6 className="dbpch-c-value">Graphic Designer</h6>
                            </div>
                        </div>
                        <FaBookmark size={25} color="#455bef" />
                    </div>
                    <div className="db-post-container-body">
                        <p className="dbpcb-p">
                            Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                            <br />
                            <br />
                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                            <br />
                            <br />

                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                        </p>
                    </div>
                    <div className="footer-line"></div>
                    <div className="db-post-footer">
                        <div className="dbp-footer-info">
                            <p className="tag">Kerkoj</p>
                            <p className="value">1 freelancer</p>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Afati</div>
                            <div className="value">3 ditë</div>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Budget</div>
                            <div className="value">4100$</div>
                        </div>
                        <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                            <p className='a-d-p'>Apply</p>
                        </button>
                    </div>
                </div>
                <div className="db-post-container">
                    <div className="db-post-container-header">
                        <div className="dbpch-left">
                            <img src={User2} alt="User" width={50} height={50} />
                            <div className="dbpch-left-user">
                                <h6 className="dbpch-l-h6">Social Media</h6>
                                <p className="dbpch-l-p">Fjolla Berisha</p>
                            </div>
                        </div>
                        <div className="dbpch-center">
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Location</p>
                                <h6 className="dbpch-c-value">Prishtina</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Type</p>
                                <h6 className="dbpch-c-value">Full-Time</h6>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbpch-center-tags">
                                <p className="dbpch-c-tag">Category</p>
                                <h6 className="dbpch-c-value">Graphic Designer</h6>
                            </div>
                        </div>
                        <FaBookmark size={25} color="#455bef" />
                    </div>
                    <div className="db-post-container-body">
                        <p className="dbpcb-p">
                            Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture the magic of our wedding day!
                            <br />
                            <br />
                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate
                            <br />
                            <br />

                            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you! ..... Show more
                        </p>
                    </div>
                    <div className="footer-line"></div>
                    <div className="db-post-footer">
                        <div className="dbp-footer-info">
                            <p className="tag">Kerkoj</p>
                            <p className="value">1 freelancer</p>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Afati</div>
                            <div className="value">3 ditë</div>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="dbp-footer-info">
                            <div className="tag">Budget</div>
                            <div className="value">4100$</div>
                        </div>
                        <button onClick={() => navigate(`/details-page/1`)} className="dbp-apply-details">
                            <p className='a-d-p'>Apply</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessDashboard