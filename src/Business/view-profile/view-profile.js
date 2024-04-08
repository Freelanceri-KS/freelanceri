import "./view-profile.scss"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const ViewProfile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    return (
        <div className="view-profile">
            <div className="view-profile-side">
                <div className="vp-left">
                    <div className="vp-left-container">
                        <div className="vp-left-container-header">
                            <MdOutlineArrowBackIosNew size={30} color='#455bef' />
                            <h5>Go back</h5>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="vp-left-container-profile">
                            <div className="vp-cp-left">
                                <img src={User} alt="User profile picture" height={60} className='dccp-image' />
                                <div className="vp-cp-data">
                                    <p className='vp-cp-data-p'>Posted by:</p>
                                    <h6 className='vp-cp-data-h6'>Malena Buchholz</h6>
                                </div>
                            </div>
                            <div className="vp-cp-data-time">
                                <p className='vp-cp-data-p'>12/04/2024</p>
                                <p className='vp-cp-data-p'>04:32pm</p>
                            </div>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="vp-left-email">
                            <p className='vp-cp-data-p'>Email</p>
                            <h5>+383 45 296 605</h5>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="vp-left-linkedin">
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>MalenaBuccholz</h5>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>MalenaBuccholz</h5>
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
                                <h5>Full name</h5>
                                <p>Profession</p>
                            </div>
                        </div>
                        <p>Rating: 4.5</p>
                    </div>
                    <div className="vpm-body">
                        <div className="vpm-center-profile">
                            <div className="experience">
                                <div className="label">
                                    <h6>Experience</h6>
                                </div>
                                <div className="data-container">
                                    <div className="data-section">
                                        <div className="names">
                                            <p className="name-profession">experience?.title</p>
                                            <p className="name-company">experience?.company</p>
                                        </div>
                                        <div className="dates">
                                            <p className="start-date">experience?.startDate</p>
                                            <p className="end-date">experience?.endDate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="education mt-2">
                                <div className="label">
                                    <h6>Education</h6>
                                </div>
                                <div className="data-container">

                                    <div className="data-section">
                                        <div className="names">
                                            <p className="name-profession">education?.title</p>
                                            <p className="name-company">education?.institution</p>
                                        </div>
                                        <div className="dates">
                                            <p className="start-date">education?.startDate</p>
                                            <p className="end-date">education?.endDate</p>
                                        </div>
                                    </div>
                                    <p>No education available</p>
                                </div>
                            </div>
                            <div className="certification mt-2">
                                <div className="label">
                                    <h6>Certifications</h6>
                                </div>
                                <div className="data-container">
                                    <div className="data-section">
                                        <div className="names">
                                            <p className="name-profession">Junior Geeks</p>
                                            <p className="name-company">Innovation Center of Kosova</p>
                                        </div>
                                        <div className="dates">
                                            <p className="start-date">04/03/2023</p>
                                            <p className="end-date">14/03/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rating">
                                <h6>Ratings</h6>
                                <div className="rating-list">
                                    <div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                                            <div className="rli-head-id">
                                                <h5>Full name</h5>
                                                <p>Rating</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima placeat rerum, tenetur dolore soluta vel fugiat aut aspernatur nemo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                                            <div className="rli-head-id">
                                                <h5>Full name</h5>
                                                <p>Rating</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima placeat rerum, tenetur dolore soluta vel fugiat aut aspernatur nemo.
                                            </p>
                                        </div>
                                    </div><div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                                            <div className="rli-head-id">
                                                <h5>Full name</h5>
                                                <p>Rating</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima placeat rerum, tenetur dolore soluta vel fugiat aut aspernatur nemo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                                            <div className="rli-head-id">
                                                <h5>Full name</h5>
                                                <p>Rating</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima placeat rerum, tenetur dolore soluta vel fugiat aut aspernatur nemo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rating-list-item">
                                        <div className="rli-head">
                                            <img src={User} alt="User" height={60} width={60} style={{ borderRadius: "50%" }} />
                                            <div className="rli-head-id">
                                                <h5>Full name</h5>
                                                <p>Rating</p>
                                            </div>
                                        </div>
                                        <div className="rli-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima placeat rerum, tenetur dolore soluta vel fugiat aut aspernatur nemo.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-profile-main-post">
                    <div className="vpmp-post-controll-main">
                        <div className="post-controll-main-head">
                            <p className="post-controll-title">Interior Designer</p>
                            <div className="post-controll-options">
                                <button className="pc-accept">Accept</button>
                                <button className="pc-reject">Reject</button>
                            </div>
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
                </div>
            </div>
        </div>
    )
}


export default ViewProfile;