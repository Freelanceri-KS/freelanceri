import "./bookmarks.scss";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import User2 from "../../assets/profiles/2.png";
import axios from "../../axios"
import localStorage from "redux-persist/es/storage";
import { useState, useEffect } from "react";



const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [expiredBookmarks, setExpiredBookmarks] = useState([]);
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
    const getMyBookmarks = () => {
        axios.get(`/bookmark/freelancer/${userData._id}`)
            .then((response) => {
                console.log(response.data)
                setBookmarks(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        if (userData && userData._id) {
            getMyBookmarks();
        }
    }, [userData])


    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
    const removeBookmark = (postId) => {
        axios.delete(`/bookmark/${postId}`)
            .then((response) => {
                console.log(response.data);
                setBookmarks(bookmarks.filter(bm => bm._id !== postId)); // Update local bookmarks state

            })
            .catch((error) => {
                console.log(error);
            })
        getMyBookmarks();
    }

    const navigate = useNavigate();

    return (
        <div className="bookmarks">
            <div className="container">
                <h3>Active posts</h3>
                <div className="active-posts">
                    <div className="active-posts-grid">
                        {bookmarks.length === 0 ? (
                            <>
                                <div className="bookmark-msg">
                                    <p >No bookmarked posts</p>

                                </div>
                            </>
                        ) : (
                            <>
                                {bookmarks.map((bm) => (
                                    <div className="bookmark-post-container">
                                        <div className="bookmark-post-container-header">
                                            <div className="bpch-left">
                                                <img src={User2} alt="User" width={50} height={50} />
                                                <div className="bpch-left-user">
                                                    <h6 className="bpch-l-h6">{bm?.postId?.title}</h6>
                                                    <p className="bpch-l-p">{bm?.freelancerId?.firstName} {bm?.freelancerId?.lastName}</p>
                                                </div>
                                            </div>
                                            <div className="bpch-center">
                                                <div className="vert-barrier"></div>
                                                <div className="bpch-center-tags">
                                                    <p className="bpch-c-tag">Location</p>
                                                    <h6 className="bpch-c-value"></h6>
                                                </div>
                                                <div className="vert-barrier"></div>
                                                <div className="bpch-center-tags">
                                                    <p className="bpch-c-tag">Type</p>
                                                    <h6 className="bpch-c-value"></h6>
                                                </div>
                                                <div className="vert-barrier"></div>
                                                <div className="bpch-center-tags">
                                                    <p className="bpch-c-tag">Category</p>
                                                    <h6 className="bpch-c-value"></h6>
                                                </div>
                                            </div>
                                            <FaBookmark size={25} color="#455bef" onClick={() => removeBookmark(bm._id)} />
                                        </div>
                                        <div className="bookmark-post-container-body">
                                            <p className="jpcb-p">
                                                {bm?.postId?.description}
                                            </p>
                                        </div>
                                        <div className="footer-line"></div>
                                        <div className="bookmark-post-footer">
                                            <div className="bp-footer-info">
                                                <p className="tag">Kerkoj</p>
                                                <p className="value">{bm?.postId?.neededWorkers} freelancer</p>
                                            </div>
                                            <div className="vert-barrier"></div>
                                            <div className="bp-footer-info">
                                                <div className="tag">Afati</div>
                                                <div className="value">{bm?.postId?.duration} dite</div>
                                            </div>
                                            <div className="vert-barrier"></div>
                                            <div className="bp-footer-info">
                                                <div className="tag">Budget</div>
                                                <div className="value">{bm?.postId?.budget}€</div>
                                            </div>
                                            <button
                                                onClick={
                                                    bm?.postId?.state === "Approved"
                                                        ? () => navigate(`/details-page/${bm?.postId?._id}`)
                                                        : () => { }
                                                }
                                                className={bm?.postId?.state === "Approved" ? "bp-apply-details" : "bp-apply-details-disabled"}
                                            >
                                                <p className='a-d-p'>Apply</p>
                                            </button>


                                        </div>
                                    </div>

                                ))}</>
                        )}
                    </div>
                </div>
                {/* <h3>Expired posts</h3> */}
                {/* <div className="expired-posts">
                    <div className="expired-posts-grid">
                        <div className="bookmark-post-container" onClick={() => navigate("/details-page/1")}>
                            <div className="bookmark-post-container-header">
                                <div className="bpch-left">
                                    <img src={User2} alt="User" width={50} height={50} />
                                    <div className="bpch-left-user">
                                        <h6 className="bpch-l-h6">Social Media</h6>
                                        <p className="bpch-l-p">Fjolla Berisha</p>
                                    </div>
                                </div>
                                <div className="bpch-center">
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Location</p>
                                        <h6 className="bpch-c-value">Prishtina</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Type</p>
                                        <h6 className="bpch-c-value">Full-Time</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Category</p>
                                        <h6 className="bpch-c-value">Graphic Designer</h6>
                                    </div>
                                </div>
                                <FaBookmark size={25} color="#909090" />
                            </div>
                            <div className="bookmark-post-container-body">
                                <p className="jpcb-p">
                                    I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                                    <br />
                                    <br />
                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
                                </p>
                            </div>
                            <div className="footer-line"></div>
                            <div className="bookmark-post-footer">
                                <div className="bp-footer-info">
                                    <p className="tag">Kerkoj</p>
                                    <p className="value">1 freelancer</p>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="bp-footer-info">
                                    <div className="tag">Afati</div>
                                    <div className="value">3 ditë</div>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="bp-footer-info">
                                    <div className="tag">Budget</div>
                                    <div className="value">4100$</div>
                                </div>
                                <button onClick={() => navigate(`/details-page/1`)} className="bp-apply-details">
                                    <p className='a-d-p'>Apply</p>
                                </button>
                            </div>
                        </div>
                        <div className="bookmark-post-container" onClick={() => navigate("/details-page/1")}>
                            <div className="bookmark-post-container-header">
                                <div className="bpch-left">
                                    <img src={User2} alt="User" width={50} height={50} />
                                    <div className="bpch-left-user">
                                        <h6 className="bpch-l-h6">Social Media</h6>
                                        <p className="bpch-l-p">Fjolla Berisha</p>
                                    </div>
                                </div>
                                <div className="bpch-center">
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Location</p>
                                        <h6 className="bpch-c-value">Prishtina</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Type</p>
                                        <h6 className="bpch-c-value">Full-Time</h6>
                                    </div>
                                    <div className="vert-barrier"></div>
                                    <div className="bpch-center-tags">
                                        <p className="bpch-c-tag">Category</p>
                                        <h6 className="bpch-c-value">Graphic Designer</h6>
                                    </div>
                                </div>
                                <FaBookmark size={25} color="#909090" />
                            </div>
                            <div className="bookmark-post-container-body">
                                <p className="jpcb-p">
                                    I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                                    <br />
                                    <br />
                                    We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
                                </p>
                            </div>
                            <div className="footer-line"></div>
                            <div className="bookmark-post-footer">
                                <div className="bp-footer-info">
                                    <p className="tag">Kerkoj</p>
                                    <p className="value">1 freelancer</p>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="bp-footer-info">
                                    <div className="tag">Afati</div>
                                    <div className="value">3 ditë</div>
                                </div>
                                <div className="vert-barrier"></div>
                                <div className="bp-footer-info">
                                    <div className="tag">Budget</div>
                                    <div className="value">4100$</div>
                                </div>
                                <button onClick={() => navigate(`/details-page/1`)} className="bp-apply-details">
                                    <p className='a-d-p'>Apply</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    );
}

export default Bookmarks