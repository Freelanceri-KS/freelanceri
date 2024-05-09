import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./contract.scss"
import axios from "../../../axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Contract = () => {
    const { id } = useParams();
    const [contractDetail, setContractDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getContractDetail = async () => {
            try {
                const response = await axios.get(`/application/${id}`);
                setContractDetail(response.data);
                // Extract the date part from the response and set it as the project date
                const dateFromDatabase = response.data.projectDate;
                if (dateFromDatabase) {
                    const parsedDate = new Date(dateFromDatabase);
                    // Check if the parsedDate is valid
                    if (!isNaN(parsedDate.getTime())) {
                        const formattedDate = parsedDate.toISOString().split('T')[0];
                        setProjectDate(formattedDate);
                    } else {
                        console.error("Invalid date value:", dateFromDatabase);
                    }
                } else {
                    console.error("Date value not present in database response.");
                }
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
        const [year, month, day] = projectDate.split('-').map(Number);
        const projectDateAsDate = new Date(year, month - 1, day);
        if (!isNaN(projectDateAsDate.getTime())) {
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
                projectDate: formattedProjectDate,
                state: "Contracted"
            };
            const appPayload = {
                state: "Contracted"
            }
            axios.patch(`/application/${id}`, appPayload)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
            axios.post("/contract", payload)
                .then((response) => {
                    console.log(response.data);
                    toast.success("Contract has been created!")
                    navigate("/")
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error.message)
                });
        } else {
            console.error("Invalid date value:", projectDate);
        }
    };

    const today = new Date().toISOString().split('T')[0];

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
                                    checked
                                />
                                <div className="terms-project-description">
                                    <h6> By project</h6>
                                    <p>Receive your full payment at the end, when all work has been submitted.</p>
                                </div>
                            </div>
                        </div>
                        <h6 className="paper-body-h6">Set your payment terms</h6>
                        <div className="payment-term-project">
                            <div className="pt-search-filter-bar">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder=" Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={contractDetail?.postId?.duration}
                                        placeholder={contractDetail?.postId?.duration}
                                    />

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
                            <p className="pfb-cancel" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>Cancel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract