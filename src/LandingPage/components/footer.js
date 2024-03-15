import React from "react";
import './footer.scss'
const Footer = () => {
    return (
        <>
            <div className="footeri">
                <div class="container">
                    <div class="row testing">
                        <div class="col copyright">
                            @2024 Freelanceri. All Rights Reserved
                        </div>
                        <div class="col-sm">
                            <ul className="list footerlist d-flex gap-4">
                                <li>About</li>
                                <li>Privacy & Policy</li>
                                <li>Blog</li>
                                <li>Partners</li>
                            </ul>
                        </div>

                        <div class="col">
                            <div className="col d-flex justify-content-end">Terms & Condition</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer