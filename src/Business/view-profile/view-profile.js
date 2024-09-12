import "./view-profile.scss"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";
import { getDataFromLocalStorage } from "../../Helpers/localStorage";
import React from "react"
const ViewProfile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const getProfile = async () => {
        axios.get(`/freelancer/${id}`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [profileRating, setProfileRating] = useState(null);
    const getFreelancerRatings = async () => {
        axios.get(`/rating/freelancer/${id}`)
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
        axios.get(`/freelancer-professions/freelancer/${id}`)
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
        axios.get(`/experience/freelancer/${id}`)
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
        axios.get(`/education/freelancer/${id}`)
            .then((response) => {
                setEducation(response.data);

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getFreelancerRatings();
        getExperience();
        getEducation();
        getFreelancerProfessions();
        getProfile();
    }, [])
    const navigate = useNavigate();
    return (
        <div className="view-profile">
            <div className="view-profile-side">
                <div className="vp-left">
                    <div className="vp-left-container">
                        <div className="vp-left-container-header" onClick={() => navigate(-1)} style={{ "cursor": "pointer" }}>
                            <MdOutlineArrowBackIosNew size={30} color='#455bef' />
                            <h5>Go back</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-container-profile">
                            <div className="vp-cp-left">
                                <div className="vp-cp-data">
                                    <h5 className='vp-cp-data-h6'>{profile?.firstName + " " + profile?.lastName}</h5>
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
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>{profile?.socials?.linkedIn}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>Github</p>
                            <h5>{profile?.socials?.github}</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>Behance</p>
                            <h5>{profile?.socials?.behance}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vpm-wrapper">
                <div className="view-profile-main">
                    <div className="vpm-header">
                        <div className="vpmh-left">
                            <div className="vpmh-left-id">
                                <h5>{profile?.firstName} {profile?.lastName}</h5>
                                {/* <p>{profile?.profession[0]?.category}</p> */}
                            </div>
                        </div>
                        <p>Rating: {profileRating?.averageRating}</p>
                    </div>
                    <div className="vpm-body">
                        <div className="vpm-center-profile">
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
                                    {profileRating && profileRating.length > 0 ? (
                                        profileRating?.map((fr) => (
                                            <div className="rating-list-item" key={fr?._id}>
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
                                        ))
                                    ) : (
                                        <p className="no-rating">No ratings available.</p>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="view-profile-main-post">
                    <div className="vpmp-post-controll-main">
                        <div className="post-controll-main-head">
                            <p className="post-controll-title">Interior Designer</p>
                        </div>
                        <div className="post-controll-main-details">
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Location</div>
                                <div className="pcmd-item-value">Prishtina</div>
                            </div>
                            {!isMobile && (
                                <div className="vert-barrier"></div>
                            )}
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Kerkon</div>
                                <div className="pcmd-item-value">3 freelancer</div>
                            </div>
                            {!isMobile && (
                                <div className="vert-barrier"></div>
                            )}
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Type</div>
                                <div className="pcmd-item-value">Design</div>
                            </div>
                            {!isMobile && (
                                <div className="vert-barrier"></div>
                            )}
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Category</div>
                                <div className="pcmd-item-value">Remote</div>
                            </div>
                            {!isMobile && (
                                <div className="vert-barrier"></div>
                            )}
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Afati</div>
                                <div className="pcmd-item-value">3 javë</div>
                            </div>
                            {!isMobile && (
                                <div className="vert-barrier"></div>
                            )}
                            <div className="pcmd-item">
                                <div className="pcmd-item-tag">Bugjeti</div>
                                <div className="pcmd-item-value">2.400$</div>
                            </div>

                        </div>
                        <div className="post-controll-main-description">
                            <p>I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                                <br /><br />
                                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you!
                                <br /><br />
                                About My Room:<br />
                                Size: [Dimensions]
                                Current Style: [Brief description, e.g., minimalist, eclectic]
                                Desired Vibes: [Mention the ambiance you're aiming for]
                                <br /><br />
                                Let's make this room transformation a collaborative masterpiece! Your ideas could be the missing piece to my dream space.
                                <br /><br />
                                About My Room:
                                Size: [Dimensions]
                                Current Style: [Brief description, e.g., minimalist, eclectic]
                                Desired Vibes: [Mention the ambiance you're aiming for]
                                <br /><br />
                                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you!</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default ViewProfile;