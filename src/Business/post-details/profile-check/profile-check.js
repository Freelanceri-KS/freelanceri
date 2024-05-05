import "./profile-check.scss"
import User from "../../../assets/images/user1.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileCheck = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { id } = useParams();

    const [profileDetail, setProfileDetail] = useState(null);
    const [freelancerRating, setFreelancerRating] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!dataFetched) {
                    const profileResponse = await axios.get(`/application/${id}`);
                    setProfileDetail(profileResponse.data);
                    setDataFetched(true);
                }

                if (profileDetail) {
                    const freelancerId = profileDetail.freelancerId._id;
                    const ratingResponse = await axios.get(`/rating/freelancer/${freelancerId}`);
                    setFreelancerRating(ratingResponse.data);
                    console.log(profileDetail);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id, profileDetail, dataFetched]);

    const rejectProfile = () => {
        const payload = {
            state: "Rejected"
        };
        axios.patch(`/application/${id}`, payload)
            .then((response) => {
                console.log(response.data);
                toast.success("Freelancer's offer has been rejected")
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const acceptProfile = () => {
        const payload = {
            state: "Active"
        };
        axios.patch(`/application/${id}`, payload)
            .then((response) => {
                console.log(response.data);
                toast.success("Freelancer's offer has been accepted")
                navigate(`/contract/${id}`);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navigate = useNavigate();

    return (
        <div className="profile-check">
            <div className="profile-check-side">
                <div className="vp-left">
                    <div className="vp-left-container">
                        <div className="vp-left-container-header" onClick={() => navigate(-1)}>
                            <MdOutlineArrowBackIosNew size={30} color='#455bef' />
                            <h5>Go back</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-container-profile">
                            <div className="vp-cp-left">
                                <img src={User} alt="User profile picture" height={60} className='dccp-image' style={{ borderRadius: "50%" }} />
                                <div className="vp-cp-data">
                                    <h6 className='vp-cp-data-h6'>{profileDetail?.businessId?.companyName}</h6>
                                </div>
                            </div>
                            <div className="vp-cp-data-time">
                                <p className='vp-cp-data-p'>12/04/2024</p>
                                <p className='vp-cp-data-p'>04:32pm</p>
                            </div>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-email">
                            <p className='vp-cp-data-p'>Email</p>
                            <h5>{profileDetail?.businessId?.email}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-linkedin">
                            <p className='vp-cp-data-p'>Company</p>
                            <h5>{profileDetail?.businessId?.companyType}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>Website</p>
                            <h5>{profileDetail?.businessId?.website}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-check-main">
                <div className="pcm-header">
                    <div className="pcmh-left">
                        <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                        <div className="pcmh-left-id">
                            <h5>{profileDetail?.freelancerId?.firstName} {profileDetail?.freelancerId?.lastName}</h5>
                            <p>
                                <p>
                                    {(profileDetail?.freelancerId?.profession[0]?.category || profileDetail?.freelancerId?.profession[1]?.category) && (
                                        <>
                                            {profileDetail.freelancerId.profession[0]?.category}
                                            {profileDetail.freelancerId.profession[1]?.category && `, ${profileDetail.freelancerId.profession[1].category}`}
                                        </>
                                    )}
                                </p>

                            </p>
                        </div>
                    </div>
                    <div className="pcmh-right">
                        <p>Rating: {freelancerRating?.averageRating}</p>
                        {profileDetail && profileDetail.state !== "Contracted" && (
                            <div className="post-controll-options">
                                <button className="pc-accept" onClick={acceptProfile}>Accept</button>
                                <button className="pc-reject" onClick={rejectProfile}>Reject</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pcm-subhead">
                    <div className="pcm-subhead-content">
                        <div className="psc-item">
                            <p>Oferta</p>
                            <h4 className="psc-item-h4">{profileDetail?.freelancerPrice}€</h4>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="psc-item">
                            <p>Afati</p>
                            <h4 className="psc-item-h4">{profileDetail?.duration}</h4>
                        </div>

                    </div>
                </div>
                <div className="pcm-user-data">
                    <h6 className="pcm-user-data-h6">Cover letter</h6>
                    <p className="pcm-user-data-p">{profileDetail?.coverLetter}</p>
                    {/* <h6 className="pcm-user-data-h6">CV</h6>
                    <button className="pcm-user-data-cv-button"><MdOutlineFileUpload color="#455bef" size={20} />  Download CV</button> */}
                </div>
                <div className="pcm-body">
                    <div className="pcm-center-profile">
                        <div className="experience">
                            <div className="label">
                                <h6>Experience</h6>
                            </div>
                            <div className="data-container">
                                {profileDetail?.freelancerId?.experiences.map((prf) => (
                                    <div className="data-section" key={prf?.freelancerId?.experiences[0]?.title}>
                                        <div className="names">
                                            <p className="name-profession">{prf?.titull}</p>
                                            <p className="name-company">{prf?.cmp}</p>
                                        </div>
                                        <div className="dates">
                                            <p className="start-date">{prf?.startDate.substring(0, 10)}</p>
                                            <p className="end-date">{prf?.endDate ? prf.endDate.substring(0, 10) : ""}</p>

                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                        <div className="education mt-2">
                            <div className="label">
                                <h6>Education</h6>
                            </div>
                            <div className="data-container">

                                {profileDetail?.freelancerId?.education.map((prf) => (
                                    <div className="data-section">
                                        <div className="names">
                                            <p className="name-profession">{prf?.titull}</p>
                                            <p className="name-company">{prf?.uni}</p>
                                        </div>
                                        <div className="dates">
                                            <p className="start-date">{prf?.startDate.substring(0, 10)}</p>
                                            <p className="end-date">{prf?.endDate.substring(0, 10)}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="certification mt-2">
                            <div className="label">
                                <h6>Skills</h6>
                            </div>
                            <div className="data-container">
                                <div className="skill-section" id="skill-box">
                                    {profileDetail?.freelancerId?.skills.map((skill) => (
                                        <div className="skill-box">{skill}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="rating">
                            <h6>Ratings</h6>
                            <div className="rating-list">
                                {freelancerRating?.ratings.map((fr) => (
                                    <div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} className="pccp-image" />
                                            <div className="rli-head-id">
                                                <h5>{fr?.businessId?.companyName}</h5>
                                                <p>{fr?.rating}.0</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>{fr?.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCheck;