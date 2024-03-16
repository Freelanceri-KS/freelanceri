import "./profile.scss"
import { FiEdit } from "react-icons/fi";
import ProfilePic from "../../assets/profiles/1.png"

const Profile = () => {
    return (
        <div className="profile">
            <div className="left">
                <div className="account">
                    <div className="left-side">
                    <img src={ProfilePic} alt="profile-pic" className="profile-pic" />
                    <div className="identity">
                        <h5>Kujtim Gjokaj</h5>
                        <p>Full Stack Developer</p>
                    </div>
                    </div>
                    <FiEdit size={25}/>
                </div>

                <div className="account-details">
                    <div className="account-details-head">
                        <h5>Personal Information</h5>
                        <FiEdit size={25}/>
                    </div>
                    <div className="account-details-body">
                        <div className="data-slot">
                            <p>Email</p>
                            <p className="value">gjokajkujtim9@gmail.com</p>
                        </div>
                        <div className="data-slot">
                            <p>Phone</p>
                            <p className="value">+383 45 296 605</p>
                        </div>
                        <div className="data-slot">
                            <p>Address</p>
                            <p className="value">Prishtina, Kosova.</p>
                        </div>
                        <div className="data-slot">
                            <p>Bio</p>
                            <p className="value">Prishtina, Kosova.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-profile">
                <div className="experience">
                    <div className="label">
                        <h3>Experience</h3>
                        <FiEdit size={25} />
                    </div>
                    <div className="data-container">
                        <div className="data-section">
                            <div className="names">
                                <p className="name-profession">Graphic Designer</p>
                                <p className="name-company">City Design</p>
                            </div>
                            <div className="dates">
                                <p className="start-date">29.01.2003</p>
                                <p className="end-date">29.02.2025</p>
                            </div>
                        </div>
                        <div className="barrier"></div>
                        <div className="data-section">
                            <div className="names">
                                <p className="name-profession">Graphic Designer</p>
                                <p className="name-company">City Design</p>
                            </div>
                            <div className="dates">
                                <p className="start-date">29.01.2003</p>
                                <p className="end-date">29.02.2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education mt-5">
                    <div className="label">
                        <h3>Education</h3>
                        <FiEdit size={25} />
                    </div>
                    <div className="data-container">
                        <div className="data-section">
                            <div className="names">
                                <p className="name-profession">Computer Science</p>
                                <p className="name-company">Universum</p>
                            </div>
                            <div className="dates">
                                <p className="start-date">29.01.2003</p>
                                <p className="end-date">29.02.2025</p>
                            </div>
                        </div>
                        <div className="barrier"></div>
                        <div className="data-section">
                            <div className="names">
                                <p className="name-profession">Student</p>
                                <p className="name-company">Gjin Gazulli</p>
                            </div>
                            <div className="dates">
                                <p className="start-date">29.01.2003</p>
                                <p className="end-date">29.02.2025</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills mt-5">
                    <div className="label">
                        <h3>Skills</h3>
                        <FiEdit size={25} />
                    </div>
                    <div className="data-container" id="skill-container">
                        <div className="skill-box">Flutter</div>
                        <div className="skill-box">NodeJs</div>
                        <div className="skill-box">MongoDB</div>
                        <div className="skill-box">ReactJS</div>
                        <div className="skill-box">Wordpress</div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="upload-cv">
                    <p className="upload-cv-p">Download CV</p>
                </div>
                <div className="portfolio">
                    <p className="portfolio-p">Portfolio</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;