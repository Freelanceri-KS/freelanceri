import "./profile-check.scss"
// import User from "../../../assets/images/user1.png"
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
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!dataFetched) {
                    const profileResponse = await axios.get(`/application/${id}`);
                    setProfileDetail(profileResponse.data);
                    setDataFetched(true);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id, dataFetched]);
    const [profileRating, setProfileRating] = useState(null);
    const getFreelancerRatings = async () => {
        axios.get(`/rating/freelancer/${profileDetail?.freelancerId?._id}`)
            .then((response) => {
                setProfileRating(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //PROFESSIONS
    const [freelancerProfessions, setFreelancerProfessions] = useState([]);
    const getFreelancerProfessions = () => {
        axios.get(`/freelancer-professions/freelancer/${profileDetail?.freelancerId?._id}`)
            .then((response) => {
                setFreelancerProfessions(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //EXPERIENCES
    const [experiences, setExperiences] = useState([]);
    const getExperience = () => {
        axios.get(`/experience/freelancer/${profileDetail?.freelancerId?._id}`)
            .then((response) => {
                setExperiences(response.data);
            })
            .catch((error) => {
                console.log("Experience error:", error);
            })
    }


    // EDUCATION

    const [education, setEducation] = useState([]);
    const getEducation = () => {
        axios.get(`/education/freelancer/${profileDetail?.freelancerId?._id}`)
            .then((response) => {
                setEducation(response.data);

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [profile, setProfile] = useState(null);

    const getProfile = async () => {
        axios.get(`/freelancer/${profileDetail?.freelancerId?._id}`)
            .then((response) => {
                console.log(response.data);
                setProfile(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        if (profileDetail) {
            getFreelancerRatings();
            getExperience();
            getEducation();
            getFreelancerProfessions();
            getProfile();
        }
    }, [profileDetail]);

    const rejectProfile = () => {
        const payload = {
            state: "Rejected"
        };
        axios.patch(`/application/${id}`, payload)
            .then((response) => {
                toast.success("Freelancer's offer has been rejected")
                navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const acceptProfile = () => {
        const payload = {
            state: "Accepted"
        };
        axios.patch(`/application/${id}`, payload)
            .then((response) => {
                toast.success("Freelancer's offer has been accepted")
                // navigate(`/contract/${id}`);
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
                                <div className="vp-cp-data">
                                    <h5 className='vp-cp-data-h6'>{profile?.firstName} {profile?.lastName}</h5>
                                </div>
                            </div>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-email">
                            <p className='vp-cp-data-p'>Email</p>
                            <h5>{profile?.email}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-linkedin">
                            <p className='vp-cp-data-p'>Github</p>
                            <h5>{profile?.socials?.github}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>{profile?.socials?.linkedIn}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-check-main">
                <div className="pcm-header">
                    <div className="pcmh-left">
                        {/* <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} /> */}
                        <div className="pcmh-left-id">
                            <h5>{profile?.firstName} {profile?.lastName}</h5>
                            <p>
                                <p>
                                    {(profile?.freelancerId?.profession[0]?.category || profile?.freelancerId?.profession[1]?.category) && (
                                        <>
                                            {profile?.freelancerId?.profession[0]?.category}
                                            {profile?.freelancerId?.profession[1]?.category && `, ${profile?.freelancerId?.profession[1]?.category}`}
                                        </>
                                    )}
                                </p>

                            </p>
                        </div>
                    </div>
                    <div className="pcmh-right">
                        <p>Rating: {profileRating?.averageRating}</p>
                        {profileDetail && profileDetail?.state !== "Accepted" || "Rejected" && (
                            <div className="post-controll-options">
                                <button className="pc-accept" onClick={acceptProfile}>Accept</button>
                                <button className="pc-reject" onClick={rejectProfile}>Reject</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pcm-subhead">
                    {/* <div className="pcm-subhead-content">
                        <div className="psc-item">
                            <p>Oferta</p>
                            <h4 className="psc-item-h4">{profileDetail?.freelancerPrice}€</h4>
                        </div>
                        <div className="vert-barrier"></div>
                        <div className="psc-item">
                            <p>Afati</p>
                            <h4 className="psc-item-h4">{profileDetail?.duration}</h4>
                        </div>

                    </div> */}
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
                                {experiences && experiences.length > 0 ? (
                                    experiences.map((experience, index) => (
                                        <div className="data-section">
                                            <div className="names">
                                                <p className="name-profession">{experience?.titull}</p>
                                                <p className="name-company">{experience?.cmp}</p>
                                            </div>
                                            <div className="dates">
                                                <p className="start-date">
                                                    {experience?.startDate.substring(0, 10)}
                                                </p>
                                                <p className="end-date">
                                                    {experience?.endDate.substring(0, 10)}
                                                </p>
                                            </div>
                                            {index !== experiences.length - 1 && <div className="barrier"></div>}
                                        </div>
                                    ))
                                ) : (
                                    <p>No experiences available</p>
                                )}


                            </div>
                        </div>
                        <div className="education mt-2">
                            <div className="label">
                                <h6>Education</h6>
                            </div>
                            <div className="data-container">

                                {education && education.length > 0 ? (
                                    education.map((edu, index) => (
                                        <div className="data-section mt-1">
                                            <div className="names">
                                                <p className="name-profession">{edu?.titull}</p>
                                                <p className="name-company">{edu?.uni}</p>
                                            </div>
                                            <div className="dates">
                                                <p className="start-date">
                                                    {edu?.startDate ? edu.startDate.substring(0, 10) : ''}
                                                </p>
                                                <p className="end-date">
                                                    {edu?.endDate ? edu.endDate.substring(0, 10) : ''}
                                                </p>
                                            </div>
                                            {index !== education.length - 1 && <div className="horiz-barrier"></div>}
                                        </div>
                                    ))
                                ) : (
                                    <p>No education available</p>
                                )}

                            </div>
                        </div>
                        <div className="education mt-2 mb-5">
                            <div className="label">
                                <h3>Professions</h3>
                            </div>
                            <div className="data-container">
                                <div className="mt-3">
                                    <div>
                                        <div className="mt-3">
                                            {freelancerProfessions && freelancerProfessions.length > 0 && (
                                                freelancerProfessions.map((fp, index) => (
                                                    <div key={index}>
                                                        {fp.profId.map((profession, profIndex) => (
                                                            <div className="skill-box" key={profIndex}>
                                                                {profession.category}

                                                            </div>
                                                        ))}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating">
                            <h6>Ratings</h6>
                            <div className="rating-list">
                                {profileRating?.ratings.map((fr) => (
                                    <div className="rating-list-item">
                                        <div className="rli-head">
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