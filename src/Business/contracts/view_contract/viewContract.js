import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./viewContract.scss"
import axios from "../../../axios"
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { toast } from "react-toastify";


const ViewContract = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [contractDetail, setContractDetail] = useState(null);
    const [rating, setRating] = useState(2.5);
    const [comment, setComment] = useState("");
    const [check, setCheck] = useState(false); // Initialize to false

    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    const payload = {
        state: "Finished"
    };

    const updateState = () => {
        axios.patch(`/contract/${id}`, payload)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        navigate(-1);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const checkRating = async () => {
        if (contractDetail && userData) {
            const payload = {
                freelancerId: contractDetail.freelancer?._id,
                businessId: userData._id,
            };

            try {
                const response = await axios.post("/rating/check", payload);
                setCheck(response.data.rated);
                console.log("Check state:", response.data.rated);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const sendRating = async () => {
        const payload = {
            freelancerId: contractDetail?.freelancer?._id,
            businessId: userData?._id,
            comment,
            rating
        };

        try {
            const response = await axios.post("/rating", payload);
            console.log(response.data);
            setComment("");
            setRating(0);
            toast.success("Freelancer has been rated!");
            checkRating();
            console.log("Is rated:", check);
        } catch (error) {
            console.log("Freelancer ID: ", contractDetail?.freelancer?._id);
            console.log(error);
        }
    };

    useEffect(() => {
        const getContractDetail = async () => {
            try {
                const response = await axios.get(`/contract/${id}`);
                setContractDetail(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching contract detail:', error);
            }
        };

        getContractDetail();
        checkRating(); // Call checkRating immediately after fetching contract details
    }, [id]);

    useEffect(() => {
        checkRating(); // Call checkRating whenever contractDetail or userData changes
    }, [contractDetail, userData]);


    return (
        <div className="contracts">
            <div className="container">
                <h4>Propose a contract</h4>
                <div className="paper">
                    <div className="paper-head">
                        <p>{contractDetail?.freelancer?.firstName} {contractDetail?.freelancer?.lastName} [{contractDetail?.freelancer?.profession.join(", ")}]</p>
                        <div className="vert-barrier"></div>
                        <p>Post: {contractDetail?.post?.title}</p>
                    </div>
                    <div className="paper-horiz-barrier"></div>
                    <div className="paper-body">
                        <h6 className="contract-details-h6">Contract details</h6>
                        <h6 className="paper-body-h6">Title</h6>
                        <input type="text" placeholder={contractDetail?.title} className="paper-body-input" disabled />
                        <h6 className="paper-body-h6">Description</h6>
                        <textarea type="text" placeholder={contractDetail?.description} className="paper-body-textarea" rows={5} cols={10} disabled />
                        {/* <h6 className="paper-body-h6">Attachments</h6>
                        <div className="attachment">
                            <p>Drag or <span style={{ color: "#455bef" }}>Upload</span> projects files</p>
                        </div> */}
                        <h6 className="paper-body-h6">Terms</h6>
                        <div className="terms">
                            <div className="terms-project">
                                <input
                                    type="radio"
                                    name="option"
                                    className="radio-button"
                                    checked
                                />
                                <div className="terms-project-description">
                                    <h6> By project</h6>
                                    <p>Receive your full payment at the end, when all work has been submitted.</p>
                                </div>
                            </div>

                        </div>
                        {/* By project shit */}
                        <h6 className="paper-body-h6">Payment terms</h6>
                        <div className="payment-term-project">
                            <div className="pt-search-filter-bar">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder={contractDetail?.projectDescription} disabled />
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder={contractDetail?.projectDate.substring(0, 10)} disabled />
                                    <span class="icon-prefix"><MdOutlineCalendarMonth size={20} />
                                    </span>
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder={contractDetail?.projectOffer} disabled />
                                    <span class="icon-prefix"><FaEuroSign size={20} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paper-footer">
                        <p className="paper-footer-p">When the client accepts the offer, you will receive confirmation.</p>
                        {!check && (
                            <>
                                <div className="paper-rating">
                                    <h6 className="paper-body-h6" id="rating-title">Rate freelancer</h6>
                                    <textarea className="rating-dsc" id="" cols="70" rows="6" placeholder="I loved working with them..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                </div>
                                <StarRatings
                                    rating={rating}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor="#455bef"
                                    starHoverColor="#455bef"
                                    isAggregateRating="false"
                                    changeRating={handleRatingChange}
                                />

                            </>
                        )}
                        <div className="paper-footer-buttons">
                            {contractDetail?.state === "Finished" ? (
                                <>
                                    {!check && (
                                        <button className="pfb-1" onClick={sendRating}>Rate Freelancer</button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <button className="pfb-1" onClick={() => updateState()}>Finish contract</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContract