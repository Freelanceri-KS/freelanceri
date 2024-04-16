import './business-dashboard.scss'
import Graph from "../assets/graph.png"
import { FiPlusCircle } from "react-icons/fi";
import Ads from "../assets/banners/ads.png";
import { FaBookmark } from "react-icons/fa6";
import User2 from "../assets/profiles/2.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "../axios"
import { IoSearchOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";
import { setLang, setLoggedInBusiness, setLoggedInFreelancer } from "../redux/Functions/actions";


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
                        <div className="create-post" onClick={() => handleOptionClick("CreatePost")}>
                            <p>Create post <FiPlusCircle color="white" size={25} />
                            </p>
                        </div>
                        <ul>
                            <li>
                                <a href="" onClick={() => handleOptionClick('Posts')} className={
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
                    </div>
                </div>
            </div>
        </>
    );
}


function Contracts() {
    const navigate = useNavigate();

    return (
        <div className="contract-db">
            <h4>Ongoing Contract</h4>
            <div className="ongoing-contracts">
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
                <div className="ongoing-contract-item">
                    <div className="oci-head">
                        <img src={User2} alt="User" width={70} height={70} className='oci-head-img' />
                        <div className="oci-head-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className="oci-body">
                        <p>Start date: 10/04/2024</p>
                        <p>End date: 10/04/2024</p>
                    </div>
                    <div className="oci-footer" onClick={() => navigate("/contract")}>
                        <p>View contract</p>
                    </div>
                </div>
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

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts'));
        if (storedPosts) {
            setPosts(storedPosts);
        } else {
            getPosts();
        }
    }, []);

    const getPosts = () => {
        axios.get('/posts/myposts/660b170df00fffca9933298a')
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
                    <div className="db-post-container" onClick={() => navigate(`/details-page/${post._id}`)}>
                        <div className="db-post-container-header">
                            <div className="dbpch-left">
                                <img src={User2} alt="User" width={50} height={50} />
                                <div className="dbpch-left-user">
                                    <h6 className="dbpch-l-h6">{post.title}</h6>
                                    <p className="dbpch-l-p">{post.userId.firstName} {post.userId.lastName}</p>
                                </div>
                            </div>
                            <div className="dbpch-center">
                                <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Location</p>
                                    <h6 className="dbpch-c-value">{post.city.city}</h6>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Experience</p>
                                    <h6 className="dbpch-c-value">{post.experienceLevel}</h6>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="dbpch-center-tags">
                                    <p className="dbpch-c-tag">Category</p>
                                    <h6 className="dbpch-c-value">{post.profession.category}</h6>
                                </div>
                            </div>
                            <FaBookmark size={25} color="#455bef" />
                        </div>
                        <div className="db-post-container-body">
                            <p className="dbpcb-p">
                                {post.description}
                            </p>
                        </div>
                        <div className="footer-line"></div>
                        <div className="db-post-footer">
                            <div className="dbp-footer-info">
                                <p className="tag">Kerkoj</p>
                                <p className="value">{post.neededWorkers} freelancer</p>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbp-footer-info">
                                <div className="tag">Afati</div>
                                <div className="value">{post.duration} ditë</div>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="dbp-footer-info">
                                <div className="tag">Budget</div>
                                <div className="value">{post.budget}$</div>
                            </div>
                            <button className="dbp-apply-details">
                                <p className='a-d-p'>Apply</p>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
            {/* <h4>All posts</h4>
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
            </div> */}
        </div>
    );
}

const Applications = () => {

    useEffect(() => {
        getBusinessAplication();
    }, []);

    const [businessAppls, setBusinessAppls] = useState([]);
    const [appCount, setAppCount] = useState(0); // Initialize appCount state

    const getBusinessAplication = () => {
        axios.get("application/business/660b170df00fffca9933298a")
            .then((response) => {
                setBusinessAppls(response.data);
                setAppCount(response.data.length); // Update appCount state
                console.log("Response: ", response.data);
            })
            .catch((error) => {
                console.log("Error fetching applications: ", error);
            });
    };

    const navigate = useNavigate();

    return (
        <>
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
                        <h1 className="stat-nr">{appCount}</h1>
                    </div>
                </div>
                <div className="business-applications">
                    <h4 className='business-applications-title'>Applications</h4>
                    <div className="search-filter-bar" id='business-sfb'>
                        <div class="input-with-icon">
                            <input type="text" class="form-control" placeholder=" Job title..." />
                            <span class="icon-prefix"><IoSearchOutline size={20} />
                            </span>
                        </div>

                        <div className="search-button">Search</div>
                    </div>
                    <h4 className='business-applications-title'>Ongoing applications</h4>
                    <div className="business-applications-grid">
                        {businessAppls.map((apl) => (
                            <div className="business-applications-grid-item">
                                <div className="bagi-head">
                                    <img src={User2} alt="User" width={80} height={80} />
                                    <div className="bagi-head-identity">
                                        <h5>{apl?.freelancerId?.firstName} {apl?.freelancerId?.lastName}</h5>
                                        <p>{apl?.freelancerId?.profession[0]}, {apl?.freelancerId?.profession[1]}</p>
                                    </div>
                                </div>
                                <p className='bagi-position'>Position: {apl?.postId?.title}</p>
                                <div className="bagi-footer" onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                    <p>View profile</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <h4 className='business-applications-title-exp'>Expired applications</h4>
                    <div className="business-applications-grid">
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp">
                                <p>View profile</p>
                            </div>
                        </div>
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp">
                                <p>View profile</p>
                            </div>
                        </div>
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp">
                                <p>View profile</p>
                            </div>
                        </div>
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp">
                                <p>View profile</p>
                            </div>
                        </div>
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp">
                                <p>View profile</p>
                            </div>
                        </div>
                        <div className="business-applications-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>Name Surname</h5>
                                    <p>Job title</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Position: Mobile App Developer</p>
                            <div className="bagi-footer-exp" onClick={() => navigate("/profile-check/1")}>
                                <p>View profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const Find = () => {
    return (
        <>
            <div className="search-filter-bar">
                <div class="input-with-icon">
                    <input type="text" class="form-control" placeholder=" Emri Mbiemri" />
                    <span class="icon-prefix"><IoSearchOutline size={20} />
                    </span>
                </div>
                <div className="vert-barrier"></div>
                <div class="input-with-icon">
                    <input type="text" class="form-control" placeholder="Profesioni..." />
                    <span class="icon-prefix"><CiLocationOn size={20} />
                    </span>
                </div>
                <div className="vert-barrier"></div>
                <div className="search-button">Search</div>
            </div>
            <div className="business-find">
                <h4 className='business-find-title'>Best of Developers</h4>
                <div className="business-find-bestof-grid">
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                </div>
                <h4 className='business-find-title'>Best of Graphic Designers</h4>
                <div className="business-find-bestof-grid">
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                </div>
                <h4 className='business-find-title'>Best of Graphic Designers</h4>
                <div className="business-find-bestof-grid">
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="business-find-bestof-grid-item">
                        <div className="bfbgi-img">
                            <img src={User2} alt="User" width={80} height={80} />
                        </div>
                        <div className="bfbgi-identity">
                            <h5>Full name</h5>
                            <p>Profession</p>
                        </div>
                        <div className="bfbgi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Profile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get('/business/660b170df00fffca9933298a')
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
                <img src="https://preview.redd.it/for-anyone-that-wanted-to-have-the-aang-picture-on-this-v0-rwy8095bx8ba1.jpg?width=640&crop=smart&auto=webp&s=d09057e988597782c9f38ce6bbfe8f59bcdf8ea9" alt="Avatar" className="profile-picture rounded-circle"></img>
                <div className="col-md-7">
                    <h4 className='p-1'>{user?.firstName} {user?.lastName}</h4>
                    <h5 className='p-1'>{user?.companyName}</h5>
                    <strong className='p-1'>{user?.companyType}</strong>
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
                        <p>+{user?.phone}</p>
                    </div>
                    {/* <div class="col-sm">
                        <strong>Country</strong>
                        <p>Kosova</p>
                    </div> */}
                    <div class="col-sm">
                        <strong>City</strong>
                        <p>{user?.city}</p>
                    </div>
                    <div class="col-sm ">
                        <strong>Email</strong>
                        <p>{user?.email}</p>
                    </div>
                    <div class="col-sm ">
                        <strong>Website</strong>
                        <p>{user?.website}</p>
                    </div>
                </div>
            </div>
            <hr />


            <h3 className='mb-4 mt-3'>Money invested</h3>


            <div className="content">
                <div className="content-header">
                    <div className="stat">
                        <h6 className="stat-name">This week</h6>
                        <h1 className="stat-nr">/</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">This month</h6>
                        <h1 className="stat-nr">/</h1>
                    </div>
                    <div className="header-barrier"></div>
                    <div className="stat">
                        <h6 className="stat-name">This Year</h6>
                        <h1 className="stat-nr">/</h1>
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
    const [userId, setUserId] = useState("660b170df00fffca9933298a");
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
            userId: userId,
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
                setNumFreelancers("");
                setBudget("");
                setSelectedCity("");
                setSelectedExperience("");
                setExpiresAt("")
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
                    <input type="text" placeholder='7 days' className='grid-item-input' value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
                <div className="cp-first-grid-item">
                    <h6>No. of Freelancers</h6>
                    <input
                        type="number"
                        placeholder='7 days'
                        className='grid-item-input'
                        value={numFreelancers}
                        onChange={(e) => setNumFreelancers(parseInt(e.target.value, 10))}
                    />
                </div>
                <div className="cp-first-grid-item">
                    <h6>Budget</h6>
                    <input type="number" placeholder='7 days' className='grid-item-input' value={budget} onChange={(e) => setBudget(parseInt(e.target.value, 10))} />
                </div>
            </div>

            <div className="cp-first-grid" id='secgrid'>
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

export default BusinessDashboard;