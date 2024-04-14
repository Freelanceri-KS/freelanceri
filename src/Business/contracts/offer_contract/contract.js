import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";

import "./contract.scss"
const Contract = () => {
    return (
        <div className="contracts">
            <div className="container">
                <h4>Propose a contract</h4>

                <div className="paper">
                    <div className="paper-head">
                        <p>Kujtim Gjokaj [ Developer , Designer]</p>
                        <div className="vert-barrier"></div>
                        <p>Post: Full Stack Developer</p>
                    </div>
                    <div className="paper-horiz-barrier"></div>
                    <div className="paper-body">
                        <h6 className="contract-details-h6">Contract details</h6>
                        <h6 className="paper-body-h6">Title</h6>
                        <input type="text" placeholder="Title" className="paper-body-input" />
                        <h6 className="paper-body-h6">Description</h6>
                        <textarea type="text" placeholder="Description" className="paper-body-textarea" rows={5} cols={10} />
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
                                    value="option1"
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
                                    value="option1"
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
                                    <input type="text" class="form-control" placeholder=" Project description" />
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder="01/01/2024" />
                                    <span class="icon-prefix"><MdOutlineCalendarMonth size={20} />
                                    </span>
                                </div>
                                <div className="vert-barrier"></div>
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder=" 0.00" />
                                    <span class="icon-prefix"><FaEuroSign size={20} />

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paper-footer">
                        <p className="paper-footer-p">When the client accepts the offer, you will receive confirmation.</p>
                        <div className="paper-footer-buttons">
                            <button className="pfb-1">Send to client</button>
                            <p className="pfb-cancel">Cancel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract