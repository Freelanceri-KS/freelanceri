import './business-dashboard.scss'
import Graph from "../assets/graph.png"
import { FiPlusCircle } from "react-icons/fi";
import Ads from "../assets/banners/ads.png";
import { FaBookmark } from "react-icons/fa6";
import User2 from "../assets/profiles/freelancer.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "../axios"
import { IoSearchOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";
import { setLang, } from "../redux/Functions/actions";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDataFromLocalStorage } from '../Helpers/localStorage';
import { toast } from 'react-toastify';
import Recruit from "../assets/icons/help/recruitment.png"
import Tick1 from "../assets/icons/help/check.png"
import Tick2 from "../assets/icons/help/check2.png"
import Tick3 from "../assets/icons/help/check3.png"

const BusinessDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('Posts');
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div className="business-dashboard">
                <div className="wrap">
                    <div className="options">
                        <div className="create-post" onClick={() => handleOptionClick("CreatePost")} style={{ cursor: "pointer" }}>
                            <p>Create post <FiPlusCircle color="white" size={25} />
                            </p>
                        </div>
                        <ul>
                            <li>
                                <a href="#" onClick={() => handleOptionClick('Posts')} className={
                                    selectedOption === 'Posts'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                }>
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
                                    selectedOption === 'Find'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Find')}>
                                    Find
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Contracts'
                                        ? 'selected-text'
                                        : 'unselected-text'
                                } onClick={() => handleOptionClick('Contracts')}>
                                    Contracts
                                </a>
                            </li>
                            <div className="barrier"></div>
                            <li>
                                <a href="#" className={
                                    selectedOption === 'Help'
                                        ? 'selected-text'
                                        : 'unselected-text-2'
                                } onClick={() => handleOptionClick('Help')}>
                                    Let us help you
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
                        {selectedOption === 'Applications' && (
                            <Applications />
                        )}
                        {selectedOption === 'Find' && (
                            <Find />
                        )}
                        {selectedOption === 'Profile' && (
                            <Profile />
                        )}
                        {selectedOption === "Contracts" && (
                            <Contracts />
                        )}
                        {selectedOption === "CreatePost" && (
                            <CreatePost />
                        )}
                        {selectedOption === "Help" && (
                            <Help />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


function Help() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    return (
        <div className="help">
            <div className="help-head-wrapper">
                <div className="help-head">
                    <h4 className='help-head-h4'>Couldn't find what you were {!isMobile && (<br />)}
                        looking for?
                    </h4>
                    <p className='help-head-p'>Let us provide you with the services that help you</p>
                </div>
            </div>
            <div className="help-services-grid">
                <div className="help-services-item">
                    <div className="hsi-body">
                        <div className="hsi-body-left">
                            <div className="hsi-body-left-image-circle">
                                <img src={Recruit} alt="Recruitment" />
                            </div>
                            <p className='hbl-p'>Our services</p>
                            <p className='hbl-p2'>Recruitment</p>
                        </div>
                        <div className="hsi-body-center">

                            <div className="hbc-service">
                                <img src={Tick1} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Talent Haunt</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick1} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Recruiting</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick1} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Team creation</h6>
                            </div>



                        </div>
                        <div className="hsi-body-right">
                            <div className="hbc-service">
                                <img src={Tick1} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Interviewing</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick1} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Candidate Testing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="hsi-footer">
                        <h5 className='hsi-footer-h4'>Contact Us</h5>
                    </div>
                </div>
                <div className="help-services-item-2">
                    <div className="hsi-body">
                        <div className="hsi-body-left">
                            <div className="hsi-body-left-image-circle">
                                <img src={Recruit} alt="Recruitment" />
                            </div>
                            <p className='hbl-p'>Our services</p>
                            <p className='hbl-p2'>Consulting</p>
                        </div>
                        <div className="hsi-body-center">
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Business Strategy </h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Marketing and Branding</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>HR Consulting</h6>
                            </div>
                        </div>
                        <div className="hsi-body-right">
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Financial Consulting</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Digital Transformation </h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick2} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Sustainability & CSR </h6>
                            </div>
                        </div>
                    </div>
                    <div className="hsi-footer-2">
                        <h5 className='hsi-footer-h4'>Contact Us</h5>
                    </div>
                </div>
                <div className="help-services-item-3">
                    <div className="hsi-body">
                        <div className="hsi-body-left">
                            <div className="hsi-body-left-image-circle">
                                <img src={Recruit} alt="Recruitment" />
                            </div>
                            <p className='hbl-p'>Our services</p>
                            <p className='hbl-p2'>Project Management</p>
                        </div>
                        <div className="hsi-body-center">
                            <div className="hbc-service">
                                <img src={Tick3} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Project Planning and Execution</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick3} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Risk Management</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick3} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Software Development</h6>
                            </div>
                        </div>
                        <div className="hsi-body-right">
                            <div className="hbc-service">
                                <img src={Tick3} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Social Media Management</h6>
                            </div>
                            <div className="hbc-service">
                                <img src={Tick3} alt="Tick" width={40} height={40} />
                                <h6 className='hbc-service-h5'>Advertising</h6>
                            </div>
                        </div>
                    </div>
                    <div className="hsi-footer-3">
                        <h5 className='hsi-footer-h4'>Contact Us</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Contracts(props) {
    const navigate = useNavigate();


    const [activeContracts, setActiveContracts] = useState([]);
    const [finishedContracts, setFinishedContracts] = useState([]);

    const getActiveContracts = () => {
        axios.get("/contract/active")
            .then((response) => {
                console.log(response.data);
                setActiveContracts(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const getFinishedContracts = () => {
        axios.get("/contract/finished")
            .then((response) => {
                console.log(response.data);
                setFinishedContracts(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getActiveContracts();
        getFinishedContracts();
    }, []);

    return (
        <div className="contract-db">
            <h4>{props.language === true ? "Kontratat aktive" : "Active Contracts"}</h4>
            <div className="ongoing-contracts">
                {activeContracts.length === 0 ? (
                    <div className="no-data-message">
                        <p>No active contracts available.</p>
                    </div>
                ) : (
                    activeContracts.map((contract) => (
                        <div className="ongoing-contract-item" onClick={() => navigate(`/view-contract/${contract?._id}`)}>
                            <div className="oci-head">
                                <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                                <div className="oci-head-identity">
                                    <h5>{contract?.freelancer?.firstName} {contract?.freelancer?.lastName}</h5>
                                    <p>{contract?.freelancer?.profession[0]?.category}, {contract?.freelancer?.profession[1]?.category}</p>
                                </div>
                            </div>
                            <div className="oci-body">
                                <p>Project offer: {contract?.projectOffer}</p>
                                <p>Deadline: {contract?.projectDate.substring(0, 10)}</p>
                            </div>
                            <div className="oci-footer">
                                <p>View contract</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <h4 className="finished">Finished Contracts</h4>
            <div className="ongoing-contracts">
                {finishedContracts.length === 0 ? (
                    <div className="no-data-message">
                        <p>No finished contracts available.</p>
                    </div>
                ) : (
                    finishedContracts.map((contract) => (
                        <div className="ongoing-contract-item" onClick={() => navigate(`/view-contract/${contract?._id}`)}>
                            <div className="oci-head">
                                <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                                <div className="oci-head-identity">
                                    <h5>{contract?.freelancer?.firstName} {contract?.freelancer?.lastName}</h5>
                                    <p>{contract?.freelancer?.profession[0]?.category}, {contract?.freelancer?.profession[1]?.category}</p>
                                </div>
                            </div>
                            <div className="oci-body">
                                <p>Project offer: {contract?.projectOffer}</p>
                                <p>Duration: {contract?.post?.duration}</p>
                            </div>
                            <div className="oci-footer">
                                <p>View contract</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

function Overview() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const [businessAppls, setBusinessAppls] = useState([]);

    useEffect(() => {
        getPosts();
        getBusinessAplication();
    }, []);

    const getPosts = () => {
        axios.get('/posts/myposts/660b170df00fffca9933298a')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };

    const getBusinessAplication = () => {
        axios.get("application/business/660b170df00fffca9933298a")
            .then((response) => {
                // Slice the response data to get the last 4 applications
                const lastFourApplications = response.data.slice(-4);
                setBusinessAppls(lastFourApplications);
                console.log("Response: ", lastFourApplications);
            })
            .catch((error) => {
                console.log("Error fetching applications: ", error);
            });
    };

    const firstPost = posts.length > 0 ? posts[0] : null;

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
                        {firstPost && (
                            <div key={firstPost._id} className="db-post-container" onClick={() => navigate(`/post-detail/${firstPost._id}`)}>
                                <div className="db-post-container-header">
                                    <div className="dbpch-left">
                                        <img src={User2} alt="User" width={50} height={50} />
                                        <div className="dbpch-left-user">
                                            <h6 className="dbpch-l-h6">{firstPost.title}</h6>
                                            <p className="dbpch-l-p">{firstPost.userId.firstName} {firstPost.userId.lastName}</p>
                                        </div>
                                    </div>
                                    <div className="dbpch-center">
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Location</p>
                                            <h6 className="dbpch-c-value">{firstPost.city.city}</h6>
                                        </div>
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Experience</p>
                                            <h6 className="dbpch-c-value">{firstPost.experienceLevel}</h6>
                                        </div>
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Category</p>
                                            <h6 className="dbpch-c-value">{firstPost.profession.category}</h6>
                                        </div>
                                    </div>
                                    <FaBookmark size={25} color="#455bef" />
                                </div>
                                <div className="db-post-container-body">
                                    <p className="dbpcb-p">
                                        {firstPost.description}
                                    </p>
                                </div>
                                <div className="footer-line"></div>
                                <div className="db-post-footer">
                                    <div className="dbp-footer-info">
                                        <p className="tag">Kerkoj</p>
                                        <p className="value">{firstPost.neededWorkers} freelancer</p>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbp-footer-info">
                                        <div className="tag">Afati</div>
                                        <div className="value">{firstPost.duration} ditë</div>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbp-footer-info">
                                        <div className="tag">Budget</div>
                                        <div className="value">{firstPost.budget}$</div>
                                    </div>
                                    <button className="dbp-apply-details">
                                        <p className='a-d-p'>Apply</p>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="content-body-sec1-appls">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Applications</h4>
                        </div>
                        <div className="cbsa-grid">
                            {businessAppls.map((appls) => (
                                <div className="cbsa-card">
                                    <img src={User2} alt="" className="cbsa-card-img" />
                                    <h6 className="cbsa-card-h6">{appls?.freelancerId?.firstName} {appls?.freelancerId?.lastName}</h6>
                                    <p className="cbsa-card-p">{appls?.freelancerId?.profession[0]}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="content-body-sec2">
                    <div className="content-body-sec2-recentpost">
                        <div className="content-body-title">
                            <h4 className="container-title-dsc">Most viewed post</h4>
                        </div>
                        {firstPost && (
                            <div key={firstPost._id} className="db-post-container" onClick={() => navigate("/post-detail")}>
                                <div className="db-post-container-header">
                                    <div className="dbpch-left">
                                        <img src={User2} alt="User" width={50} height={50} />
                                        <div className="dbpch-left-user">
                                            <h6 className="dbpch-l-h6">{firstPost.title}</h6>
                                            <p className="dbpch-l-p">{firstPost.userId.firstName} {firstPost.userId.lastName}</p>
                                        </div>
                                    </div>
                                    <div className="dbpch-center">
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Location</p>
                                            <h6 className="dbpch-c-value">{firstPost.city.city}</h6>
                                        </div>
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Experience</p>
                                            <h6 className="dbpch-c-value">{firstPost.experienceLevel}</h6>
                                        </div>
                                        <div className="vert-barrier"></div>
                                        <div className="dbpch-center-tags">
                                            <p className="dbpch-c-tag">Category</p>
                                            <h6 className="dbpch-c-value">{firstPost.profession.category}</h6>
                                        </div>
                                    </div>
                                    <FaBookmark size={25} color="#455bef" />
                                </div>
                                <div className="db-post-container-body">
                                    <p className="dbpcb-p">
                                        {firstPost.description}
                                    </p>
                                </div>
                                <div className="footer-line"></div>
                                <div className="db-post-footer">
                                    <div className="dbp-footer-info">
                                        <p className="tag">Kerkoj</p>
                                        <p className="value">{firstPost.neededWorkers} freelancer</p>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbp-footer-info">
                                        <div className="tag">Afati</div>
                                        <div className="value">{firstPost.duration} ditë</div>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="dbp-footer-info">
                                        <div className="tag">Budget</div>
                                        <div className="value">{firstPost.budget}$</div>
                                    </div>
                                    <button className="dbp-apply-details">
                                        <p className='a-d-p'>Apply</p>
                                    </button>
                                </div>
                            </div>
                        )}
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
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get(`/posts/myposts/${userData._id}`)
            .then((response) => {
                setPosts(response.data);
                localStorage.setItem('posts', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };
    return (
        <div className="posts-business">
            <h4>All posts</h4>
            <div className="ongoing-posts">
                {posts.map((post) => (
                    <div className="db-post-container-2" onClick={() => navigate(`/details-page/${post._id}`)} key={post._id}>
                        <div className="db-post-container-header-2">
                            <div className="dbpch-left">
                                <img src={User2} alt="User" width={50} height={50} />
                                <div className="dbpch-left-user">
                                    <h6 className="dbpch-l-h6">{post?.title}</h6>
                                    <p className="dbpch-l-p">{post?.userId?.firstName} {post?.userId?.lastName}</p>
                                </div>
                            </div>
                            <div className="dbpch-center-2">
                                {/* <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Location</p>
                                    <h6 className="dbpch-c-value">{post?.city?.city}</h6>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Experience</p>
                                    <h6 className="dbpch-c-value">{post?.experienceLevel}</h6>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Category</p>
                                    <h6 className="dbpch-c-value">{post?.profession?.category}</h6>
                                </div> */}
                            </div>
                        </div>
                        <div className="db-post-container-body-2">
                            <p className="dbpcb-p">
                                {post?.description}
                            </p>
                        </div>
                        <div className="footer-line-2"></div>
                        <div className="db-post-footer-2">
                            <div className="dbp-footer-info">
                                <p className="tag">Location</p>
                                <p className="value">{post?.city?.city}</p>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbp-footer-info">
                                <div className="tag">Experience</div>
                                <div className="value">{post?.experienceLevel}</div>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbp-footer-info">
                                <div className="tag">Category</div>
                                <div className="value">{post?.profession?.category}</div>
                            </div>
                            <button className={post?.state === "Approved" ? "dbp-apply-details-2" : "dbp-apply-details-3"}>
                                <p className='a-d-p'>View</p>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

const Applications = () => {

    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    const [businessAppls, setBusinessAppls] = useState([]);
    const [appCount, setAppCount] = useState(0);

    const getURApplication = () => {
        axios.get(`application/under-review/${userData._id}`)
            .then((response) => {
                setBusinessAppls(response.data);
                setAppCount(response.data.length);
                console.log("Response: ", response.data);
            })
            .catch((error) => {
                console.log("Error fetching applications: ", error);
            });
    };


    const [rejectedApplications, setRejectedApps] = useState([]);

    const getRejectedApplications = () => {
        axios.get(`/application/rejected/${userData._id}`)
            .then((response) => {
                console.log("rejected apps:", response.data)
                setRejectedApps(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [accpetedApps, setAcceptedAps] = useState([]);

    const getAcceptedApps = () => {
        axios.get(`/application/accepted/${userData._id}`)
            .then((response) => {
                console.log("Accepted apps:", response.data)
                setAcceptedAps(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const [contractedApl, setContractedApl] = useState([]);

    const getContractedApls = () => {
        axios.get(`/application/contracted/${userData._id}`)
            .then((response) => {
                console.log(response.data);
                setContractedApl(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        getURApplication();
        getRejectedApplications();
        getAcceptedApps();
        getContractedApls();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="content">
                <div className="content-header">
                    <div className="stat">
                        <h6 className="stat-name">Under Review applications</h6>
                        <h1 className="stat-nr">{appCount}</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">Accepted Applications</h6>
                        <h1 className="stat-nr">{accpetedApps.length}</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">Contracted Freelancers</h6>
                        <h1 className="stat-nr">{contractedApl.length}</h1>
                    </div>
                </div>
                <div className="business-applications">
                    {/* <h4 className='business-applications-title'>Applications</h4> */}
                    {/* <div className="search-filter-bar" id='business-sfb'>
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder=" Job title..." />
                            <span class="icon-prefix"><IoSearchOutline size={20} />
                            </span>
                        </div>

                        <div className="search-button">Search</div>
                    </div> */}
                    <h4 className='business-applications-title'>Under review applications</h4>
                    <div className="business-applications-grid">
                        {businessAppls.map((apl) => (
                            <div className="business-applications-grid-item">
                                <div className="bagi-head">
                                    <img src={User2} alt="User" width={80} height={80} />
                                    <div className="bagi-head-identity">
                                        <h5>{apl?.freelancerId?.firstName} {apl?.freelancerId?.lastName}</h5>
                                        <p>
                                            <p>
                                                {(apl?.freelancerId?.profession[0]?.category || apl?.freelancerId?.profession[1]?.category) && (
                                                    <>
                                                        {apl.freelancerId.profession[0]?.category}
                                                        {apl.freelancerId.profession[1]?.category && `, ${apl.freelancerId.profession[1].category}`}
                                                    </>
                                                )}
                                            </p>

                                        </p>

                                    </div>
                                </div>
                                <p className='bagi-position'>Position: {apl?.postId?.title}</p>
                                <div className="bagi-footer" onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                    <p>View profile</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h4 className='business-applications-title-exp'>Accepted applications</h4>
                    <div className="business-applications-grid">

                        {accpetedApps.map((apl) => (
                            <div className="business-applications-grid-item">
                                <div className="bagi-head">
                                    <img src={User2} alt="User" width={80} height={80} />
                                    <div className="bagi-head-identity">
                                        <h5>{apl?.freelancerId?.firstName} {apl?.freelancerId?.lastName}</h5>
                                        <p>
                                            <p>
                                                {(apl?.freelancerId?.profession[0]?.category || apl?.freelancerId?.profession[1]?.category) && (
                                                    <>
                                                        {apl.freelancerId.profession[0]?.category}
                                                        {apl.freelancerId.profession[1]?.category && `, ${apl.freelancerId.profession[1].category}`}
                                                    </>
                                                )}
                                            </p>

                                        </p>
                                    </div>
                                </div>
                                <p className='bagi-position'>Position: {apl?.postId?.title}</p>
                                <div className="bagi-footer" onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                    <p>View profile</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h4 className='business-applications-title-exp'>Rejected applications</h4>
                    <div className="business-applications-grid">
                        {rejectedApplications.map((apl) => (
                            <div className="business-applications-grid-item">
                                <div className="bagi-head">
                                    <img src={User2} alt="User" width={80} height={80} />
                                    <div className="bagi-head-identity">
                                        <h5>{apl?.freelancerId?.firstName} {apl?.freelancerId?.lastName}</h5>
                                        <p>
                                            <p>
                                                {(apl?.freelancerId?.profession[0]?.category || apl?.freelancerId?.profession[1]?.category) && (
                                                    <>
                                                        {apl.freelancerId.profession[0]?.category}
                                                        {apl.freelancerId.profession[1]?.category && `, ${apl.freelancerId.profession[1].category}`}
                                                    </>
                                                )}
                                            </p>

                                        </p>
                                    </div>
                                </div>
                                <p className='bagi-position'>Position: {apl?.postId?.title}</p>
                                <div className="bagi-footer" onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                    <p>View profile</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h4 className='business-applications-title-exp'>Contracted applications</h4>
                    <div className="business-applications-grid">
                        {contractedApl.map((apl) => (
                            <div className="business-applications-grid-item">
                                <div className="bagi-head">
                                    <img src={User2} alt="User" width={80} height={80} />
                                    <div className="bagi-head-identity">
                                        <h5>{apl?.freelancerId?.firstName} {apl?.freelancerId?.lastName}</h5>
                                        <p>
                                            <p>
                                                {(apl?.freelancerId?.profession[0]?.category || apl?.freelancerId?.profession[1]?.category) && (
                                                    <>
                                                        {apl.freelancerId.profession[0]?.category}
                                                        {apl.freelancerId.profession[1]?.category && `, ${apl.freelancerId.profession[1].category}`}
                                                    </>
                                                )}
                                            </p>

                                        </p>
                                    </div>
                                </div>
                                <p className='bagi-position'>Position: {apl?.postId?.title}</p>
                                <div className="bagi-footer" onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                    <p>View profile</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}


const Find = () => {
    const [nameSearch, setNameSearch] = useState('');
    const [profiles, setProfiles] = useState(null);
    const [categoryQuery, setCategoryQuery] = useState('');

    const findProfiles = async () => {
        try {
            const response = await axios.get("/freelancer", { params: { search: nameSearch, category: categoryQuery } });
            console.log(response.data);
            setProfiles(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleNameChange = (event) => {
        setNameSearch(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategoryQuery(event.target.value)
    }

    useEffect(() => {
        findProfiles();
    }, [nameSearch, categoryQuery]); // Call findProfiles whenever nameSearch changes

    const navigate = useNavigate();

    return (
        <>
            <div className="search-filter-bar">
                <div className="input-with-icon">
                    <input type="text" className="form-control" placeholder="Emri Mbiemri" value={nameSearch} onChange={handleNameChange} />
                    <span className="icon-prefix"><IoSearchOutline size={20} /></span>
                </div>
                <div className="vert-barrier"></div>
                <div className="input-with-icon">
                    <input type="text" className="form-control" placeholder="Profesioni..." value={categoryQuery} onChange={handleCategoryChange} />
                    <span className="icon-prefix"><CiLocationOn size={20} /></span>
                </div>
                <div className="vert-barrier"></div>
                <div className="search-button">Search</div>
            </div>
            <div className="business-find">
                <div className="business-find-bestof-grid">
                    {profiles && profiles.map((profile) => (
                        <div key={profile._id} className="business-find-bestof-grid-item">
                            <div className="bfbgi-img">
                                <img src={User2} alt="User" width={80} height={80} />
                            </div>
                            <div className="bfbgi-identity">
                                <h5>{profile?.firstName} {profile?.lastName}</h5>
                                <p>{profile?.profession[0]?.category}</p>
                            </div>
                            <div className="bfbgi-footer">
                                <p onClick={() => navigate(`/view-profile/${profile?._id}`)} style={{ cursor: "pointer" }}>View profile</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const Profile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get('/business/summary/660b170df00fffca9933298a')
            .then((response) => {
                setUser(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };
    return (
        <>
            <div className="row align-items-center">
                <div className="profile-pic rounded-circle">
                    <p>{user?.business?.companyName[0]}</p>
                </div>
                <div className="col-md-7">
                    <h4 className='p-1'>{user?.business?.firstName} {user?.business?.lastName}</h4>
                    <h5 className='p-1'>{user?.business?.companyName}</h5>
                    <strong className='p-1'>{user?.business?.companyType}</strong>
                </div>
                <div className="col-md-2 text-end">
                    <FaEdit className='editIcon' />
                </div>
            </div>
            <hr />
            <div class="container">
                <div class="row gap-5">
                    <div class="col-sm">
                        <strong>Role</strong>
                        <p>{user?.role === 1 ? "Business" : "Individ"} </p>
                    </div>
                    <div class="col-sm">
                        <strong>Phone</strong>
                        <p>+{user?.business?.phone}</p>
                    </div>
                    <div class="col-sm">
                        <strong>City</strong>
                        <p>{user?.business?.city}</p>
                    </div>
                    <div class="col-sm ">
                        <strong>Email</strong>
                        <p>{user?.business?.email}</p>
                    </div>
                    <div class="col-sm ">
                        <strong>Website</strong>
                        <p>{user?.business?.website}</p>
                    </div>
                </div>
            </div>
            <hr />
            <h3 className='mb-4 mt-3'>Statistics</h3>
            <div className="content">
                <div className="content-header">
                    <div className="stat">
                        <h6 className="stat-name">Applications</h6>
                        <h1 className="stat-nr">{user?.applications?.length}</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">Contracts</h6>
                        <h1 className="stat-nr">{user?.contracts?.length}</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">Posts</h6>
                        <h1 className="stat-nr">{user?.postime?.length}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

function CreatePost() {
    const [professions, setProfessions] = useState([]);
    const [cities, setCities] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [duration, setDuration] = useState("");
    const [numFreelancers, setNumFreelancers] = useState("");
    const [budget, setBudget] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");
    const [selectedProfession, setSelectedProfession] = useState("");
    const [expiresAt, setExpiresAt] = useState("ASD");
    const [selectedWorkers, setSelectedWorkers] = useState([]);
    const [state, setState] = useState("Pending");
    useEffect(() => {
        getProfessions();
        getCity();
    }, []);

    const getProfessions = () => {
        if (professions.length === 0) {
            axios
                .get("/profession")
                .then((response) => {
                    setProfessions(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching professions:', error);
                });
        }
    };

    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    const getCity = () => {
        axios.get('/city')
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            });
    };

    const handleSubmit = () => {
        const postData = {
            userId: userData._id,
            title: title,
            description: description,
            requirements: requirements,
            duration: duration,
            neededWorkers: numFreelancers,
            budget: budget,
            city: selectedCity,
            profession: selectedProfession,
            experienceLevel: selectedExperience,
            expiresAt: expiresAt,
            state: state,
            selectedWorkers: selectedWorkers
        };

        axios.post('/posts', postData)
            .then((response) => {
                console.log('Post created successfully:', response.data);
                setTitle("");
                setDescription("");
                setRequirements("");
                setDuration("");
                setSelectedCity("");
                setSelectedExperience("");
                toast.success("Post created successfully!")
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    };

    return (
        <div className="create-post">
            <h4>Create a post</h4>
            <h6 className='cp-title'>Title</h6>
            <input type="text" placeholder='Title' className='title-input' value={title} onChange={(e) => setTitle(e.target.value)} />
            <h6 className='cp-title'>Requirements</h6>
            <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Requirements' value={requirements} onChange={(e) => setRequirements(e.target.value)}></textarea>
            <h6 className='cp-title'>Description</h6>
            <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <div className="cp-first-grid">
                <div className="cp-first-grid-item">
                    <h6>Duration</h6>
                    <select className="grid-item-input" onChange={(e) => setDuration(e.target.value)} value={duration}>
                        <option value="">Select duration</option>
                        <option value="7 ditë">7 ditë</option>
                        <option value="14 ditë">14 ditë</option>
                        <option value="30 ditë">30 ditë</option>
                    </select>
                </div>

                <div className="cp-first-grid-item">
                    <h6>City</h6>
                    <select className="grid-item-input" onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                            <option key={city._id} value={city._id}>{city.city}</option>
                        ))}
                    </select>
                </div>
                <div className="cp-first-grid-item">
                    <h6>Profession</h6>
                    <select className="grid-item-input" onChange={(e) => setSelectedProfession(e.target.value)} value={selectedProfession}>
                        {professions.map((profession) => (
                            <option key={profession._id} value={profession._id} style={{ color: "black" }} className='select-option'>
                                {profession.category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="cp-first-grid" id='secgrid'>

                <div className="cp-first-grid-item">
                    <h6>Experience needed</h6>
                    <select className="grid-item-input" onChange={(e) => setSelectedExperience(e.target.value)} value={selectedExperience}>
                        <option value="">Select experience level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
            </div>

            <div className="cp-btn">
                <p onClick={handleSubmit}>Create post</p>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        language: state.data.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLang: (data) => dispatch(setLang(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDashboard);