import "./post-details.scss"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"
import User2 from "../../assets/profiles/2.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../axios";

const PostDetail = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();

    const { id } = useParams();
    const [jobDetail, setApplicationDetail] = useState(null);
    useEffect(() => {
        const getApplicationDetail = async () => {
            try {
                const response = await axios.get(`/posts/business/${id}`);
                setApplicationDetail(response.data);
            } catch (error) {
                console.error('Error fetching job detail:', error);
            }
        };


        getApplicationDetail();
    }, [id]);
    return (
        <div className="post-detail">
            <div className="post-detail-side">
                <div className="vp-left">
                    <div className="vp-left-container">
                        <div className="vp-left-container-header">
                            <MdOutlineArrowBackIosNew size={30} color='#455bef' />
                            <h5>Go back</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-container-profile">
                            <div className="vp-cp-left">
                                <img src={User} alt="User profile picture" height={60} className='dccp-image' style={{ borderRadius: "50%" }} />
                                <div className="vp-cp-data">
                                    <h6 className='vp-cp-data-h6'>Malena Buchholz</h6>
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
                            <h5>+383 45 296 605</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-linkedin">
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>MalenaBuccholz</h5>
                        </div>
                        {!isMobile && (<div className="horiz-barrier"></div>)}
                        <div className="vp-left-instagram">
                            <p className='vp-cp-data-p'>LinkedIn</p>
                            <h5>MalenaBuccholz</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-detail-main-wrapper">
                <div className="post-detail-main">
                    <div className="post-detail-main-head">
                        <p className="post-detail-title">{jobDetail?.populatedPost?.title}</p>
                        <div className="post-detail-options">
                            <button className="pd-accept">Accept</button>
                            <button className="pd-reject">Reject</button>
                        </div>
                    </div>
                    <div className="post-detail-main-details">
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Location</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.city?.city}</div>
                        </div>
                        {!isMobile && (
                            <div className="vert-barrier"></div>
                        )}
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Kerkon</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.neededWorkers} freelancer</div>
                        </div>
                        {!isMobile && (
                            <div className="vert-barrier"></div>
                        )}
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Experience</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.experienceLevel}</div>
                        </div>
                        {!isMobile && (
                            <div className="vert-barrier"></div>
                        )}
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Category</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.profession?.category}</div>
                        </div>
                        {!isMobile && (
                            <div className="vert-barrier"></div>
                        )}
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Afati</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.duration} ditë</div>
                        </div>
                        {!isMobile && (
                            <div className="vert-barrier"></div>
                        )}
                        <div className="pdmd-item">
                            <div className="pdmd-item-tag">Bugjeti</div>
                            <div className="pdmd-item-value">{jobDetail?.populatedPost?.budget}$</div>
                        </div>

                    </div>
                    <div className="post-detail-main-description">
                        {jobDetail?.populatedPost?.description}
                    </div>
                </div>
                <h4 className="af-title">Accepted freelancers</h4>
                <div className="accepted-freelancers-grid">
                    <div className="accepted-freelancers-grid-item">
                        <div className="bagi-head">
                            <img src={User2} alt="User" width={80} height={80} />
                            <div className="bagi-head-identity">
                                <h5>Name Surname</h5>
                                <p>Job title</p>
                            </div>
                        </div>
                        <p className='bagi-position'>Position: Mobile App Developer</p>
                        <div className="bagi-footer" onClick={() => navigate("/profile-check")}>
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="accepted-freelancers-grid-item">
                        <div className="bagi-head">
                            <img src={User2} alt="User" width={80} height={80} />
                            <div className="bagi-head-identity">
                                <h5>Name Surname</h5>
                                <p>Job title</p>
                            </div>
                        </div>
                        <p className='bagi-position'>Position: Mobile App Developer</p>
                        <div className="bagi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                    <div className="accepted-freelancers-grid-item">
                        <div className="bagi-head">
                            <img src={User2} alt="User" width={80} height={80} />
                            <div className="bagi-head-identity">
                                <h5>Name Surname</h5>
                                <p>Job title</p>
                            </div>
                        </div>
                        <p className='bagi-position'>Position: Mobile App Developer</p>
                        <div className="bagi-footer">
                            <p>View profile</p>
                        </div>
                    </div>
                </div>
                <h4 className="af-title">All applications</h4>
                <div className="accepted-freelancers-grid">
                    {jobDetail?.applications.map((apl) => (
                        <div className="accepted-freelancers-grid-item">
                            <div className="bagi-head">
                                <img src={User2} alt="User" width={80} height={80} />
                                <div className="bagi-head-identity">
                                    <h5>{apl.freelancerId.firstName} {apl.freelancerId.lastName}</h5>
                                    <p>{apl?.freelancerId?.profession[0]}, {apl?.freelancerId?.profession[1]}</p>
                                </div>
                            </div>
                            <p className='bagi-position'>Pozicioni: {apl?.postId?.title}</p>
                            <div className="bagi-footer" key={apl?._id} onClick={() => navigate(`/profile-check/${apl?._id}`)}>
                                <p>View profile</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default PostDetail