import React, { useState } from "react";
import "./applicationForm.scss";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ApplicationForm = ({ closeModal }) => {
  const [portfolioFile, setPortfolioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPortfolioFile(file);
  };
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Header Section */}
        <div className="header d-flex justify-content-between align-items-center mb-3">
          <h2>Apliko per postim</h2>
          <div className="profile-info d-flex align-items-center">
            <IoClose size={40} onClick={()=>navigate(-1)} cursor={"pointer"} />

          </div>
        </div>

        <div className="separator"></div>

        <div className="horizontal-text-fields">
          <div className="text-field mr-2">
            <p>Cmimi total i projektit</p>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="0.00€"

            />
          </div>
          <div className="text-field mr-2">
            <p>10% tarifa per freelancerin</p>
            <input
              type="text"
              className="form-control fc2 mt-1"
              value="0.00€"
              readOnly

            />
          </div>
          <div className="text-field">
            <p>Ju do te perfitoni</p>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="0.00€"
              readOnly
            />
          </div>
        </div>

        <div className="separator"></div>

        <div className="text-field dropdown-field">
          <p>Kohezgjatje e projektit</p>
          <select className="form-control">
            <option value="Option 1">1 javë</option>
            <option value="Option 2">1 muaj</option>
            <option value="Option 3">3 muaj</option>
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
          />
        </div>

        <div className="apply-button">
          <div className="text-field">
            <div className="portfolio-text">
              <p>Ngarko Portfolion</p>
              <label className="custom-file-upload">
                Choose File
                <input
                  type="file"
                  className="form-control-file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <button className="btn-apply" onClick={closeModal}>
            Apliko
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
