import "./pricings.scss"
import Switch from "react-switch";
import { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Pricing = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    const handleEmailClick = () => {
        const email = "platforma.freelanceri@gmail.com";
        const subject = "Contacting from website about...";
        const body = "";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };
    return (
        <div className="pricing">
            <div className="p-wrapper">
                <h1 className="pw-h1">Pricing to suit all</h1>
                <p className="pw-p">Grow your business with Freelanceri</p>
                <div className="switch mt-5">
                    <h5 style={{ color: "#909090" }}>Monthly</h5>
                    <Switch
                        className="switch mx-3"
                        checked={checked}
                        size="large"
                        onChange={handleChange}
                        width={65}
                        height={35}
                        checkedHandleIcon={null}
                        uncheckedHandleIcon={null}
                        checkedIcon={null}
                        uncheckedIcon={null}
                        onColor="#455bef"
                        offColor="#455bef"
                    />
                    <h5 style={{ color: "#909090" }}>Yearly</h5>
                </div>
                <div className="pw-cards">
                    <div className="pw-card-1">
                        <h4 className="mt-3">Basic Membership</h4>
                        <p className="mt-3" style={{ color: "#909090" }}>Get limited features that align with needs of your business.</p>
                        <div className="pwc1-price d-flex justify-content-start align-items-center mt-4">
                            <h1 style={{ color: "#455bef", fontWeight: "700" }}>1 Free month</h1>
                            {/* <div className="pwc-dsc">
                                <p className="mx-3" style={{ color: "#909090" }}>{checked ? "per year | billed yearly" : "per month | billed monthly"}</p>
                                <p className="mx-3" style={{ color: "#909090", fontSize: "12px" }}>Instant access to basic features</p>
                            </div> */}
                        </div>
                        <p className="mt-4">Basic includes:</p>
                        <div className="price-features mt-4">
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>{checked ? "12" : "1"} posts per {checked ? "year" : "month"}.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Access to a limited pool of professionals</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Basic project management tools.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Email support with a 24h response time.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center" style={{ visibility: "hidden" }}>
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Job promotion in our socials channels.</p>
                            </div>
                        </div>
                        <div className="get-started-btn mt-3 mb-3" onClick={handleEmailClick}>
                            Get Started Now
                        </div>
                    </div>
                    <div className="pw-card-1">
                        <h4 className="mt-3">Standard Membership</h4>
                        <p className="mt-3" style={{ color: "#909090" }}>Get standard features that align with needs of your business.</p>
                        <div className="pwc1-price d-flex justify-content-start align-items-center mt-4">
                            <h1 style={{ color: "#455bef", fontWeight: "700" }}>€{checked ? "897" : "77"}</h1>
                            <div className="pwc-dsc">
                                <p className="mx-3" style={{ color: "#909090" }}>{checked ? "per year | billed yearly" : "per month | billed monthly"}</p>
                                <p className="mx-3" style={{ color: "#909090", fontSize: "12px" }}>Instant access to basic features</p>
                            </div>
                        </div>
                        <p className="mt-4">Standard includes:</p>
                        <div className="price-features mt-4">
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>{checked ? "36" : "3"} posts per {checked ? "year" : "month"}.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Access to a limited pool of professionals</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Standard project management tools.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Access to 2 hours of consulting services per month.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="#909090" className="m-1" />
                                <p>Email support with a 24h response time.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center" style={{ visibility: "hidden" }}>
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Job promotion in our socials channels.</p>
                            </div>
                        </div>
                        <div className="get-started-btn mt-3 mb-3" onClick={handleEmailClick}>
                            Get Started Now
                        </div>
                    </div>
                    <div className="pw-card-2">
                        <h4 className="mt-3">Premium Membership</h4>
                        <p className="mt-3" style={{ color: "#eaeaea" }}>Get unlimited features that align with needs of your business.</p>
                        <div className="pwc1-price d-flex justify-content-start align-items-center mt-4">
                            <h1 style={{ color: "white", fontWeight: "700" }}>€{checked ? "1497" : "127"}</h1>
                            <div className="pwc-dsc">
                                <p className="mx-3" style={{ color: "#eaeaea" }}>per month | billed monthly</p>
                                <p className="mx-3" style={{ color: "#eaeaea", fontSize: "12px" }}>Instant access to premium features</p>
                            </div>
                        </div>
                        <p className="mt-4">Premium includes:</p>
                        <div className="price-features mt-4">
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Unlimited job posts per month.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Advanced AI algorithms for candidate matching</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Full access to the pool of candidates.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Access to {checked ? "unlimited" : "4"} hours of consulting services {checked?"":"per month"}.</p>
                            </div>
                            <div className="pf d-flex justify-content-start align-items-center">
                                <IoCheckmarkDoneCircleOutline size={25} color="white" className="m-1" />
                                <p>Job promotion in our socials channels.</p>
                            </div>
                        </div>
                        <div className="get-started-btn2 mt-3 mb-3" onClick={handleEmailClick}>
                            Get Started Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;