import React, { useState } from "react";
import "./applicationForm.scss";

const ApplicationForm = ({ closeModal }) => {
  const [portfolioFile, setPortfolioFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPortfolioFile(file);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Header Section */}
        <div className="header d-flex justify-content-between align-items-center mb-3">
          <h2>Apliko per postim</h2>
          <div className="profile-info d-flex align-items-center">
            <img
              src="profile.jpg"
              alt="User Profile"
              className="rounded-circle mr-2"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0">User Name</p>
          </div>
        </div>

        {/* Separator between Application Form and Text Fields */}
        <div className="separator"></div>

        {/* Horizontal Text Fields */}
        <div className="horizontal-text-fields">
          {/* Text Field 1 */}
          <div className="text-field mr-2">
            <p>Cmimi total i projektit</p>
            <input
              type="text"
              className="form-control"
              value="Text Field 1"
              readOnly
            />
          </div>
          {/* Text Field 2 */}
          <div className="text-field mr-2">
            <p>10% tarifa per freelancerin</p>
            <input
              type="text"
              className="form-control"
              value="Text Field 2"
              readOnly
            />
          </div>
          {/* Text Field 3 */}
          <div className="text-field">
            <p>Ju do te perfitoni</p>
            <input
              type="text"
              className="form-control"
              value="Text Field 3"
              readOnly
            />
          </div>
        </div>

        {/* Separator between Text Fields and Dropdown Text Field */}
        <div className="separator"></div>

        {/* Dropdown Text Field */}
        <div className="text-field dropdown-field">
          <p>Kohezgjatje e projektit</p>
          <select className="form-control">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        {/* Separator between Dropdown Text Field and Additional Text Field */}
        <div className="separator"></div>

        {/* Additional Text Field */}
        <div className="text-field additional-text">
          <p>Te dhena shtese</p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter additional text"
          />
        </div>

        {/* Upload Portfolio Field */}
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

        {/* Apply Button */}
        <div className="apply-button">
          <button className="btn-apply" onClick={closeModal}>
            Apliko
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
