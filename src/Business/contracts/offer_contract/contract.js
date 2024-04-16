import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./contract.scss"
import axios from "../../../axios"

const Contract = () => {
    const { id } = useParams();
    const [contractDetail, setContractDetail] = useState(null);

    useEffect(() => {
        const getContractDetail = async () => {
            try {
                const response = await axios.get(`/application/${id}`);
                setContractDetail(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching contract detail:', error);
            }
        };
        getContractDetail();
    }, [id]);


    const [projectType, setProjectType] = useState("Project Based");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectDate, setProjectDate] = useState("");
    const [projectOffer, setProjectOffer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Split the date string into day, month, and year parts
        const [day, month, year] = projectDate.split('-').map(Number);

        // Create a new Date object with the parsed day, month, and year
        const projectDateAsDate = new Date(year, month - 1, day);

        // Check if the Date object is valid
        if (!isNaN(projectDateAsDate.getTime())) {
            // Format projectDate as ISO string
            const formattedProjectDate = projectDateAsDate.toISOString();

            const payload = {
                freelancer: contractDetail?.freelancerId?._id,
                business: contractDetail?.businessId?._id,
                post: contractDetail?.postId?._id,
                projectType,
                title: contractDetail?.postId?.title,
                description: contractDetail?.postId?.description,
                projectDescription,
                projectOffer,
                projectDate: formattedProjectDate, // Include the formatted projectDate
            };

            axios.post("/contract", payload)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    console.log("Pejllodi", payload);
                });
        } else {
            console.error("Invalid date value:", projectDate);
            // Handle the case where projectDate is not a valid date
        }
    };



    return (
        <div className="contracts">
            <div className="container">
                <h4>Propose a contract</h4>

                <div className="paper">
                    <div className="paper-head">
                        <p>{contractDetail?.freelancerId?.firstName} {contractDetail?.freelancerId?.lastName} [{contractDetail?.freelancerId?.skills.join(", ")}]</p>
                        <div className="vert-barrier"></div>
                        <p>Post: {contractDetail?.postId?.title}</p>
                    </div>
                    <div className="paper-horiz-barrier"></div>
                    <div className="paper-body">
                        <h6 className="contract-details-h6">Contract details</h6>
                        <h6 className="paper-body-h6">Title</h6>
                        <input type="text" placeholder={contractDetail?.postId?.title} className="paper-body-input" disabled />
                        <h6 className="paper-body-h6">Description</h6>
                        <textarea type="text" placeholder={contractDetail?.postId?.description} className="paper-body-textarea" rows={5} cols={10} disabled />
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
                                    value={projectType}
                                    className="radio-button"
                                />
                                <div className="terms-project-description">
                                    <h6> By project</h6>
                                    <p>Receive your full payment at the end, when all work has been submitted.</p>
                                </div>
                            </div>
                            <div className="terms-milestone">
                                <input
                                    type="radio"
                                    name="option"
                                    value={projectType}
                                    onChange={() => setProjectType("By Milestone")}
                                />
                                <div className="terms-milestone-description">
                                    <h6> By milestone</h6>
                                    <p>Get your full payment based on the tasks you complete during the project.</p>
                                </div>
                            </div>
                        </div>
                        {/* By project shit */}
                        <h6 className="paper-body-h6">Set your payment terms</h6>
                        <div className="payment-term-project">
                            <div className="pt-search-filter-bar">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder=" Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder="01/01/2024" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} />
                                    <span class="icon-prefix"><MdOutlineCalendarMonth size={20} />
                                    </span>
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder=" 0.00" value={projectOffer} onChange={(e) => setProjectOffer(e.target.value)} />
                                    <span class="icon-prefix"><FaEuroSign size={20} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paper-footer">
                        <p className="paper-footer-p">When the client accepts the offer, you will receive confirmation.</p>
                        <div className="paper-footer-buttons">
                            <button className="pfb-1" onClick={handleSubmit}>Send to client</button>
                            <p className="pfb-cancel">Cancel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract