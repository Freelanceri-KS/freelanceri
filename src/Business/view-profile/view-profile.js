import "./view-profile.scss"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";
const ViewProfile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    const { id } = useParams();

    const [profile, setProfile] = useState(null);


    const getProfile = async () => {
        axios.get(`/freelancer/${id}`)
            .then((response) => {
                console.log(response.data)
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
                console.log(response.data)
                setProfileRating(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getFreelancerRatings();
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
                                <img src={User} alt="User profile picture rounded-circle" height={60} className='dccp-image' />
                                <div className="vp-cp-data">
                                    <h6 className='vp-cp-data-h6'>{profile?.firstName + " " + profile?.lastName}</h6>
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
                            <p className='vp-cp-data-p'>Facebook</p>
                            <h5>{profile?.socials?.facebook}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vpm-wrapper">
                <div className="view-profile-main">
                    <div className="vpm-header">
                        <div className="vpmh-left">
                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                            <div className="vpmh-left-id">
                                <h5>{profile?.firstName} {profile?.lastName}</h5>
                                <p>{profile?.profession[0]?.category}</p>
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
                                    {profile?.experiences.map((prf) => (
                                        <div className="data-section" key={prf?.freelancerId?.experiences[0]?.title}>
                                            <div className="names">
                                                <p className="name-profession">{prf?.titull}</p>
                                                <p className="name-company">{prf?.cmp}</p>
                                            </div>
                                            <div className="dates">
                                                <p className="start-date">{prf?.startDate?.substring(0, 10)}</p>
                                                <p className="end-date">{prf?.endDate ? prf?.endDate?.substring(0, 10) : ""}</p>

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

                                    {profile?.education.map((prf) => (
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
                                        {profile?.skills.map((skill) => (
                                            <div className="skill-box">{skill}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="rating">
                                <h6>Ratings</h6>
                                <div className="rating-list">
                                    {profileRating && profileRating.length > 0 ? (
                                        profileRating.map((fr) => (
                                            <div className="rating-list-item" key={fr._id}>
                                                <div className="rli-head">
                                                    <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} className="pccp-image" />
                                                    <div className="rli-head-id">
                                                        <h5>{fr.businessId?.companyName}</h5>
                                                        <p>{fr.rating}.0</p>
                                                    </div>
                                                </div>
                                                <div className="rli-body">
                                                    <p>{fr.comment}</p>
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