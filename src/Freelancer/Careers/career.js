import "./career.scss"
import Mentoring from "../../assets/icons/career/help.png";
import Exposure from "../../assets/icons/career/effect.png";
import Training from "../../assets/icons/career/training.png";
import Growth from "../../assets/icons/career/growth-chart.png";
import React from "../../assets/icons/trainings/react.png"
import Flutter from "../../assets/icons/trainings/flutter.png"
import NodeJs from "../../assets/icons/trainings/nodejs.png"
import Python from "../../assets/icons/trainings/python.png"
import Ae from "../../assets/icons/trainings/design/ae.png"
import Ai from "../../assets/icons/trainings/design/ai.jpg"
import Pr from "../../assets/icons/trainings/design/pr.png"
import Ps from "../../assets/icons/trainings/design/ps.png"

const Career = () => {
    return (
        <div className="career">
            <div className="career-s1">
                <h3>Create the <span style={{ color: "#455bef", fontWeight: "600" }}>career</span> you love</h3>
                <p>We're looking for creative minds to help them build their careers and give them opportunities</p>
                <button className="career-s1-btn"> View opportunities</button>
            </div>
            <div className="container">
                <div className="career-video">
                    <div className="career-video-container">
                        <div className="career-video-container-img">

                        </div>
                    </div>
                </div>
            </div>
            <div className="career-values">
                <div className="cvc">
                    <div className="career-values-left">
                        <h6>Our values</h6>
                        <div className="cvl-underline"></div>
                        <div className="cvl-p">
                            <p>
                                At <span style={{ fontWeight: "700" }}>Freelanceri</span>, our values are centered around empowering freelancers to thrive in their careers. We believe in providing comprehensive support through <span style={{ fontWeight: "700" }}>training, mentoring, and resources</span> tailored to their needs.</p>
                        </div>
                    </div>
                    <div className="career-values-right">
                        <div className="cvr-item">
                            <div className="cvri-box">
                                <img src={Training} alt="Training" className="cvri-box-img" />
                            </div>
                            <div className="cvri-txt">
                                <p className="cvri-p">Courses</p>
                                <p className="cvri-p2">We provide courses on Software Development, Graphic Design, Trading and other ICT Skills.</p>
                            </div>
                        </div>
                        <div className="cvr-item">
                            <div className="cvri-box">
                                <img src={Mentoring} alt="Mentoring" className="cvri-box-img" />
                            </div>
                            <div className="cvri-txt">
                                <p className="cvri-p">Mentoring</p>
                                <p className="cvri-p2">We provide 1 on 1 mentoring for all young proffesionals who want growth in their early careers.</p>
                            </div>
                        </div>
                        <div className="cvr-item">
                            <div className="cvri-box">
                                <img src={Exposure} alt="Mentoring" className="cvri-box-img" />
                            </div>
                            <div className="cvri-txt">
                                <p className="cvri-p">Exposure</p>
                                <p className="cvri-p2">Freelanceri ensures exposure for the most rated Freelancer that have made contract through the platform</p>
                            </div>
                        </div>
                        <div className="cvr-item">
                            <div className="cvri-box">
                                <img src={Growth} className="cvri-box-img" />
                            </div>
                            <div className="cvri-txt">
                                <p className="cvri-p">Growth</p>
                                <p className="cvri-p2">Grow you professional presence through services and opportunities Freelanceri provides. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="trainings">
                    <h3>Trainings</h3>
                    <div className="trainings-underline"></div>
                    <p className="trainings-dsc">Our platform offers a diverse array of courses tailored to meet the needs of freelancers across various domains. From Software Development and Graphic Design to Video Editing, Trading, and other essential ICT Skills, we provide comprehensive training programs designed to enhance professional expertise and proficiency.</p>
                    <div className="t-grid">
                        <div className="t-grid-item">
                            <img src={React} alt="ReactJs" width={70} height={70} />
                            <h3 className="t-grid-item-h3">ReactJs</h3>
                            <p className="t-grid-item-p">Extensive ReactJs training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Flutter} alt="Flutter" width={70} height={70} />
                            <h3 className="t-grid-item-h3">Flutter</h3>
                            <p className="t-grid-item-p">Extensive Flutter training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={NodeJs} alt="NodeJs" width={70} height={70} />
                            <h3 className="t-grid-item-h3">NodeJs</h3>
                            <p className="t-grid-item-p">Extensive NodeJS training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Python} alt="Python" width={70} height={70} />
                            <h3 className="t-grid-item-h3">Python</h3>
                            <p className="t-grid-item-p">Extensive Python training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Ae} alt="ReactJs" width={70} height={70} />
                            <h3 className="t-grid-item-h3">After Effects</h3>
                            <p className="t-grid-item-p">Extensive After Effects training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Ai} alt="Flutter" width={70} height={70} />
                            <h3 className="t-grid-item-h3">Illustrator</h3>
                            <p className="t-grid-item-p">Extensive Illustrator training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Pr} alt="NodeJs" width={70} height={70} />
                            <h3 className="t-grid-item-h3">Premiere Pro</h3>
                            <p className="t-grid-item-p">Extensive Premiere Pro training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                        <div className="t-grid-item">
                            <img src={Ps} alt="Python" width={70} height={70} />
                            <h3 className="t-grid-item-h3">Photoshop</h3>
                            <p className="t-grid-item-p">Extensive Photoshop training from Zero to Hero, with the most qualified trainers in industry.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="career-cta">
                <div className="career-cta-box">
                    <div className="ccb-left">
                        <h1>Get started <br />with Freelanceri Career</h1>
                        <p className="ccb-left-p">We would greatly appreciate it if you could share with us additional information regarding the specific training program you are looking to enhance.</p>
                    </div>
                    <div className="ccb-right">
                        <input type="Full name" placeholder="Full name" className="career-input" />
                        <input type="Email" placeholder="Email" className="career-input" />
                        <select className="career-select">
                            <option value="">Select a city</option>
                            <option value="">Select a city</option>
                            <option value="">Select a city</option>
                            <option value="">Select a city</option>
                        </select>
                        <div className="ccbr-row">
                            <input type="checkbox" id="confirmed" name="confirmed" value="confirmed" className="checkbox" />
                            <label>By participating, you're signing up to stay updated on our newest courses and special promotions.</label>
                        </div>
                        <button className="career-submit-btn">Submit</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}


export default Career;

{/* <p className="cvri-p2">Freelanceri ensures exposure for the most rated Freelancer that have made contract through the platform</p> */ }
