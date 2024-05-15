import './dashboard.scss'
import Logo from "../../assets/images/logo.png"
import Star from "../../assets/images/star.png"
import axios from "../../axios"
import { useState, useEffect } from 'react'
import { FaBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { setLang } from '../../redux/Functions/actions'
import { connect } from 'react-redux'


const FreelancerDashboard = (props) => {
    const [activeApl, setActiveApl] = useState([])
    const [closedApl, setClosedApl] = useState([]);
    const [proposalState, setProposalState] = useState("Active");
    const [contractState, setContractState] = useState("Active");
    const [activeContract, setActiveContract] = useState([]);
    const [finishedContract, setFinishedContract] = useState([]);


    // Get Applications

    const getActiveApplications = () => {
        axios.get(`/application/freelancer/active/${userData._id}`)
            .then((response) => {
                setActiveApl(response.data);
            })
            .catch((error) => {
                console.log('Error fetching applications:', error);
            });
    }

    // Get Contracts

    const getActiveContracts = () => {
        axios.get(`/contract/freelancer/active/${userData._id}`)
            .then((response) => {
                setActiveContract(response.data);
            })
            .catch((error) => {
                console.log("Active Contracts errors:", error);
            })
    }

    const getFinishedContracts = () => {
        axios.get(`/contract/freelancer/finished/${userData._id}`)
            .then((response) => {
                setFinishedContract(response.data)
            })
            .then((error) => {
                console.log("Finished Contracts Error:", error);
            })
    }



    const handleActiveProposal = () => {
        setProposalState("Active");
    }

    const handleClosedProposal = () => {
        setProposalState("Closed");
        console.log(proposalState);
    }


    const handleActiveContract = () => {
        setContractState("Active");
    }

    const [reviewsList, setReviewList] = useState([]);
    const [avgRating, setAvgRating] = useState(null);
    const [fullReview, setFullReview] = useState();

    const getReviews = () => {
        axios.get(`/rating/freelancer/${userData._id}`)
            .then((response) => {
                console.log(response.data);
                setFullReview(response.data);
                setReviewList(response.data.ratings);
                setAvgRating(response.data.averageRating)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleFinishedContract = () => {
        setContractState("Finished");
        getFinishedContracts();
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
    useEffect(() => {
        if (userData && userData._id) {
            getActiveApplications();
            getActiveContracts();
            getReviews();
        }
    }, [userData]);


    const navigate = useNavigate();
    return (
        <>
            <div className="freelancer-dashboard">
                <p className='freelancer-dashboard-title'>{props.language == true ? "Mirë se vini" : "Welcome back"}</p>
                <div className="freelancer-dashboard-wrap">
                    <div className="freelancer-dashboard-main">
                        <div className="freelancer-dashboard-main-earnings">
                            <h4 className='fdme-h3'>Total Net Earnings</h4>

                            <div className="fdme-stats">
                                <div className="fdme-stat-item">
                                    <h6>Applications</h6>
                                    <h4 className='fdme-stat-item-value'>{activeApl?.length}</h4>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="fdme-stat-item">
                                    <h6>Contracts</h6>
                                    <h4 className='fdme-stat-item-value'>{activeContract.length + finishedContract.length}</h4>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="fdme-stat-item">
                                    <h6>Ratings</h6>
                                    <h4 className='fdme-stat-item-value'>{reviewsList?.length}</h4>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="fdme-stat-item">
                                    <h6>Average Rating</h6>
                                    <h4 className='fdme-stat-item-value'>{avgRating == null ? 0 : avgRating}</h4>

                                </div>

                            </div>
                        </div>
                        <div className="freelancer-dashboard-main-proposals">
                            <div className="fdmp-head">
                                <h4>Applications Sent</h4>
                                {/* <h6 className='fdmp-head-h6'>View all</h6> */}
                            </div>
                            <div className="horiz-barrier"></div>
                            <div className="fdmp-options">
                                <div className="fdmp-options">
                                    <h6 className={`fdmp-single-opt ${proposalState === "Active" ? "fdmp-active" : "fdmp-closed"}`} onClick={handleActiveProposal} style={{ cursor: "pointer" }}>Active</h6>
                                    <h6 className={`fdmp-single-opt ${proposalState === "Closed" ? "fdmp-active" : "fdmp-closed"}`} onClick={handleClosedProposal} style={{ cursor: "pointer" }}>Closed</h6>
                                </div>

                            </div>
                            <div className="horiz-barrier-2"></div>
                            {proposalState == "Active" ? (
                                <>
                                    {activeApl.length === 0 ?
                                        (
                                            <><p className='null-message'>No applications found</p></>
                                        ) :
                                        (
                                            <>
                                                {activeApl.map((application) => (
                                                    <div className="bookmark-post-container" >
                                                        <div className="bookmark-post-container-header">
                                                            <div className="bpch-left">
                                                                <div className="bpch-left-user">
                                                                    <h6 className="bpch-l-h6">{application?.postId?.title}</h6>
                                                                    <p className="bpch-l-p">{application?.freelancerId?.firstName} {application?.freelancerId?.lastName}</p>
                                                                </div>
                                                            </div>
                                                            {/* <div className="bpch-center">
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Location</p>
                                                                    <h6 className="bpch-c-value">{application?.duration}</h6>
                                                                </div>
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Experience</p>
                                                                    <h6 className="bpch-c-value">{application?.postId?.experienceLevel}</h6>
                                                                </div>
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Category</p>
                                                                    <h6 className="bpch-c-value">{application?.postId?.profession?.category}</h6>
                                                                </div>
                                                            </div> */}
                                                            <p></p>
                                                        </div>
                                                        <div className="bookmark-post-container-body">
                                                            <p className="jpcb-p">
                                                                {application?.postId?.description}
                                                            </p>
                                                        </div>
                                                        <div className="footer-line"></div>
                                                        <div className="bookmark-post-footer">
                                                            <div className="bp-footer-info">
                                                                <p className="tag">Category</p>
                                                                <p className="value">{application?.postId?.profession?.category}</p>
                                                            </div>
                                                            <div className="vert-barrier"></div>
                                                            <div className="bp-footer-info">
                                                                <div className="tag">Duration</div>
                                                                <div className="value">{application?.postId?.duration}</div>
                                                            </div>
                                                            <div className="vert-barrier"></div>
                                                            <div className="bp-footer-info">
                                                                <div className="tag">Experience</div>
                                                                <div className="value">{application?.postId?.experienceLevel}</div>
                                                            </div>
                                                            <button onClick={() => navigate(`/details-page/${application?.postId?._id}`)} className="bp-apply-details">
                                                                <p className='a-d-p'>View</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )
                                    }
                                </>
                            ) :
                                (
                                    <>
                                        {closedApl.length === 0 ? (
                                            <><p className='null-message'>No closed applications found</p></>
                                        ) : (
                                            <>
                                                {closedApl.map((application) => (
                                                    <div className="bookmark-post-container" >
                                                        <div className="bookmark-post-container-header">
                                                            <div className="bpch-left">
                                                                <div className="bpch-left-user">
                                                                    <h6 className="bpch-l-h6">{application?.postId?.title}</h6>
                                                                    <p className="bpch-l-p">{application?.freelancerId?.firstName} {application?.freelancerId?.lastName}</p>
                                                                </div>
                                                            </div>
                                                            <div className="bpch-center">
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Location</p>
                                                                    <h6 className="bpch-c-value">{application?.postId?.city.city}</h6>
                                                                </div>
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Experience</p>
                                                                    <h6 className="bpch-c-value">{application?.postId?.experienceLevel}</h6>
                                                                </div>
                                                                <div className="vert-barrier"></div>
                                                                <div className="bpch-center-tags">
                                                                    <p className="bpch-c-tag">Category</p>
                                                                    <h6 className="bpch-c-value">{application?.postId?.profession?.category}</h6>
                                                                </div>
                                                            </div>
                                                            <p></p>
                                                        </div>
                                                        <div className="bookmark-post-container-body">
                                                            <p className="jpcb-p">
                                                                {application?.postId?.description}
                                                            </p>
                                                        </div>
                                                        <div className="footer-line"></div>
                                                        <div className="bookmark-post-footer">
                                                            <div className="bp-footer-info">
                                                                <p className="tag">Kerkoj</p>
                                                                <p className="value">{application?.postId?.neededWorkers} freelancer</p>
                                                            </div>
                                                            <div className="vert-barrier"></div>
                                                            <div className="bp-footer-info">
                                                                <div className="tag">Afati</div>
                                                                <div className="value">{application?.postId?.duration} ditë</div>
                                                            </div>
                                                            <div className="vert-barrier"></div>
                                                            <div className="bp-footer-info">
                                                                <div className="tag">Budget</div>
                                                                <div className="value">{application?.postId?.budget}$</div>
                                                            </div>
                                                            <button onClick={() => navigate(`/details-page/${application?.postId?._id}`)} className="bp-apply-details">
                                                                <p className='a-d-p'>View</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )
                                        }

                                    </>
                                )
                            }
                        </div>
                        <div className="freelancer-dashboard-main-clients">
                            <div className="fdmc-head">
                                <h4>Clients</h4>
                                {/* <h6 className='fdmc-head-h6'>View all</h6> */}
                            </div>
                            <div className="horiz-barrier"></div>
                            <div className="fdmc-options">
                                <h6 className={`fdmc-single-opt ${contractState === "Active" ? "fdmc-active" : "fdmc-closed"}`} onClick={handleActiveContract} style={{ cursor: "pointer" }}>Active</h6>
                                <h6 className={`fdmc-single-opt ${contractState === "Finished" ? "fdmc-active" : "fdmc-closed"}`} onClick={handleFinishedContract} style={{ cursor: "pointer" }}>Closed</h6>
                            </div>
                            <div className="horiz-barrier-2"></div>
                            <div className="clients-grid">
                                {contractState === "Active" ?
                                    (
                                        <>
                                            {activeContract.length > 0 ? (
                                                activeContract.map((ac) => (
                                                    <div class="grid-item">
                                                        <div className="client-info">
                                                            <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                                            <div className="client-info-data">
                                                                <h5>{ac?.business?.companyName}</h5>
                                                                <p>{ac?.post?.title}</p>
                                                            </div>
                                                        </div>
                                                        <div className="message-option-client">
                                                            <p>View</p>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className='null-message'>No active contracts found</div>
                                            )}
                                        </>
                                    ) :
                                    (
                                        <>
                                            {finishedContract.length > 0 ? (
                                                finishedContract.map((fc) => (
                                                    <div class="grid-item">
                                                        <div className="client-info">
                                                            <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                                            <div className="client-info-data">
                                                                <h5>{fc?.business?.companyName}</h5>
                                                                <p>{fc?.post?.title}</p>
                                                            </div>
                                                        </div>
                                                        <div className="message-option-client">
                                                            <p>View</p>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className='null-message'>No finished contracts found</div>
                                            )}
                                        </>
                                    )}

                            </div>
                        </div>
                        <div className="freelancer-dashboard-main-reviews">
                            <div className="fdmr-head">
                                <h4>Reviews</h4>
                                {/* <h6 className='fdmr-head-h6'>View all</h6> */}
                            </div>
                            <div className="horiz-barrier"></div>
                            <div className="reviews-list">
                                <div className="reviews-list-main">
                                    {reviewsList?.map((review, index) => (
                                        <>
                                            <div className="review-item">
                                                <div className="review-item-head">
                                                    <img src={Logo} alt='company-image' height={60} width={60} className='client-logo' />
                                                    <div className="review-item-head-data">
                                                        <h6>{review?.businessId?.companyName}</h6>
                                                        <p>{review?.businessId?.companyType} • {review?.rating} stars</p>
                                                    </div>
                                                </div>
                                                <div className="review-item-body">
                                                    <p>
                                                        {review?.comment}
                                                    </p>
                                                </div>
                                            </div>
                                            {index !== reviewsList?.length - 1 && <div className="horiz-barrier"></div>}
                                        </>
                                    ))}
                                </div>
                                <div className="reviews-list-side">
                                    <div className="rls-main">
                                        {avgRating !== null ? (
                                            <>
                                                <h5 className='rls-main-h5'>{avgRating.toFixed(2)}</h5>
                                                <div className="stars">
                                                    <StarRatings
                                                        rating={avgRating}
                                                        starDimension="30px"
                                                        starSpacing="5px"
                                                        starRatedColor="#455bef"
                                                        starHoverColor="#455bef"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <p>Ratings not found yet..</p>
                                        )}
                                    </div>

                                    <div className="horiz-line"></div>
                                    <div className="rls-ratings">
                                        <div className="stars-count">
                                            <p>5 stars</p>
                                            <p>{fullReview?.averageRating}</p>
                                        </div>
                                        <div className="stars-count">
                                            <p>4 stars</p>
                                            <p>{fullReview?.four}</p>
                                        </div>
                                        <div className="stars-count">
                                            <p>3 stars</p>
                                            <p>{fullReview?.three}</p>
                                        </div>
                                        <div className="stars-count">
                                            <p>2 stars</p>
                                            <p>{fullReview?.two}</p>
                                        </div>
                                        <div className="stars-count">
                                            <p>1 Star</p>
                                            <p>{fullReview?.one}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="freelancer-dashboard-side">
                        <div className="freelancer-dashboard-side-container">
                            <div className="fdsc-head">
                                <h3>Blogs</h3>
                            </div>
                            <div className="horiz-barrier"></div>
                            <div className="fdsc-article">
                                <div className="fdsc-article-nr">
                                    <p>1</p>
                                </div>
                                <h5>Getting started with Freelanceri</h5>
                                <p>The new window of global work opportunitites</p>
                                <p className='fdsc-article-link' onClick={() => navigate("/blogs")}>Read more</p>

                            </div>
                            <div className="horiz-barrier-article"></div>
                            <div className="fdsc-article">
                                <div className="fdsc-article-nr">
                                    <p>2</p>
                                </div>
                                <h5>Freelanceri for professionals</h5>
                                <p>We offer training programs and workshops to enter the market.</p>
                                <p className='fdsc-article-link' onClick={() => navigate("/blogs")}>Read more</p>
                            </div>
                            <div className="horiz-barrier-article"></div>
                            <div className="fdsc-article">
                                <div className="fdsc-article-nr">
                                    <p>3</p>
                                </div>
                                <h5>How to get your first project</h5>
                                <p>The most important bit, your first project.</p>
                                <p className='fdsc-article-link' onClick={() => navigate("/blogs")}>Read more</p>
                            </div>
                        </div>
                        <div className="freelancer-dashboard-side-contact">
                            <div className="fdsc-head">
                                <h3>Contact</h3>
                            </div>
                            <div className="horiz-barrier"></div>
                            <div className="fdsc-body">
                                <p>Contact Freelanceri support 7 days a week. We are serious about your Growth</p>
                                <div className="horiz-barrier-contact"></div>
                                <p className='fdsc-body-p'>Email: <span style={{ color: "#455bef", fontWeight: '500' }}>platforma.freelanceri@gmail.com</span></p>
                                <div className="horiz-barrier-contact"></div>
                                <p className='fdsc-body-p'>Contact us and we will reach out to you soon to hear about your needs</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(FreelancerDashboard);
