import "./applicationForm.scss";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from "../../axios"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

const ApplicationForm = ({ closeModal }) => {
  const [portfolioFile, setPortfolioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPortfolioFile(file);
  };
  const navigate = useNavigate();

  const [projectPrice, setProjectPrice] = useState(0);

  const handleProjectPriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setProjectPrice(price);
  };

  const feePerFreelancer = projectPrice * 0.1;
  const profit = projectPrice - feePerFreelancer;


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


  const [durationOffer, setDurationOffer] = useState("Më pak se 1 javë");
  const [coverLetter, setCoverLetter] = useState("");
  const [cv, setCv] = useState("CV Example");
  const [postId, setPostId] = useState()
  const [businessId, setBusinessId] = useState(null);
  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const handleSubmit = () => {
    const applData = {
      postId: jobDetail?._id,
      freelancerId: userData._id,
      businessId: jobDetail?.userId._id,
      freelancerPrice: projectPrice,
      coverLetter: coverLetter,
      duration: durationOffer,
      state: "Under Review",
      cv: cv
    }
    axios.post("/application", applData)
      .then((response) => {
        console.log('Application sent successfully', response.data);
        setBusinessId("");
        setCoverLetter("");
        setCv("");
        setPostId("");
        setProjectPrice("");
        setDurationOffer("")
        console.log("===============", { applData })
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



  useEffect(() => {
    console.log("User data:", userData);
    console.log("User ID:", userData._id);
    console.log("First Name:", userData.firstName);
    console.log("Email:", userData.email);

  }, []);


  return (
    <div className="modal">
      <div className="modal-content">
        {/* Header Section */}
        <div className="header d-flex justify-content-between align-items-center mb-3">
          <div className="modal-header-title">
            <h2>Apliko per postim</h2>
            <h6>{jobDetail?.title} - {jobDetail?.userId?.firstName} {jobDetail?.userId?.lastName}</h6>
          </div>
          <div className="profile-info d-flex align-items-center">
            <IoClose size={40} onClick={() => navigate(-1)} cursor={"pointer"} />

          </div>
        </div>

        <div className="separator"></div>

        <div className="horizontal-text-fields">
          <div className="text-field mr-2">
            <p>Cmimi total i projektit</p>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="0.00€"
              value={projectPrice}
              onChange={handleProjectPriceChange}

            />
          </div>
          <div className="text-field mr-2">
            <p>10% tarifa per freelancerin</p>
            <input
              type="text"
              className="form-control fc2 mt-1"
              value={`${feePerFreelancer.toFixed(2)}€`}
              readOnly

            />
          </div>
          <div className="text-field">
            <p>Ju do te perfitoni</p>
            <input
              type="text"
              className="form-control mt-1"
              value={`${profit.toFixed(2)}€`}
              readOnly
            />
          </div>
        </div>

        <div className="separator"></div>

        <div className="text-field dropdown-field">
          <p>Kohezgjatje e projektit</p>
          <select className="form-control" onChange={(e) => setDurationOffer(e.target.value)} value={durationOffer}>
            <option value="Më pak se 1 javë">Më pak se 1 javë</option>
            <option value="2 javë">2 javë</option>
            <option value="Më pak se 1 muaj">Më pak se 1 muaj</option>
            <option value="Më pak se 3 muaj">Më pak se 3 muaj</option>
          </select>
        </div>

        <div className="separator"></div>

        <div className="text-field additional-text">
          <p>Letra e motivimit</p>
          <textarea
            type="text"
            className="form-control"
            placeholder="Letra e motivimit..."
            multiple
            max={30}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
        </div>

        <div className="apply-button">
          <button className="btn-apply" onClick={handleSubmit}>
            Apliko
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
