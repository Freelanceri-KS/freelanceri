import "./ftap.scss";
import appForm from "../../assets/images/appform.jpg";
import Logo from "../../assets/images/logo2.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FullTimeAP = () => {
    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState(null);
    useEffect(() => {
        const getJobDetail = async () => {
            try {
                const response = await axios.get(`/posts/${id}`);
                setJobDetail(response.data);
            } catch (error) {
                console.error('Error fetching job detail:', error);
            }
        };
        getJobDetail();
    }, [id]);


    const [coverLetter, setCoverLetter] = useState("");
    const [businessId, setBusinessId] = useState(null);
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    const navigate = useNavigate();
    const handleSubmit = () => {
        const applData = {
            postId: jobDetail?._id,
            freelancerId: userData._id,
            businessId: jobDetail?.userId._id,
            coverLetter: coverLetter,
            state: "Under Review",
        }
        axios.post("/application", applData)
            .then((response) => {
                setBusinessId("");
                setCoverLetter("");
                navigate("/");
                toast.success("Applied for post successfully")
            })
            .catch((error) => {
                console.log("Error creating application", error)
                if (error.response && error.response.data.error === "Application already exists") {
                    return toast.error("Application already exists")
                } else {
                    return toast.error("An error occurred while creating the application")
                }
            })
    }





    return (
        <div className="full-time-ap">
            <div className="ftap-left">
                <div className="ftap-left-content">
                    <h4>Enter more information</h4>
                    <p style={{ color: "#455bef", fontWeight: "500", fontSize: "18px" }}>{jobDetail?.title} • {jobDetail?.experienceLevel} • {jobDetail?.userId?.companyName}</p>
                    <textarea name="coverletter" placeholder="Cover letter..." cols={55} rows={8} className="mt-3 ftap-ta" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)}></textarea>
                    <p className="consent">By submitting this application, I consent to sharing all my profile data with the hiring company for their consideration. This includes my education, work history, skills, and other relevant information.</p>
                    <button className="ftap-submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
            <div className="ftap-right">
                <div className="ftap-right-content">
                    <div className="ftap-rc-head">
                        <img src={Logo} alt="Logo" width={250} />
                    </div>
                    <div className="ftap-rc-footer">
                        {/* <div className="containers"></div> */}
                        <h3 className="frf-h3">Unlock your potential with our platform, connecting talented professionals with top companies across the World.</h3>
                        <p className="frf-p">- Freelanceri</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullTimeAP;