import { useState } from "react";
import "./contact.scss"
import axios from "axios";
import { setLang } from "../../redux/Functions/actions";
import { connect } from "react-redux";


const Contact = (props) => {


    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [industry, setIndustry] = useState("");
    const [businessName, setBusinessName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            fullName,
            email,
            description,
            industry,
            businessName
        }


        axios.post(process.env.REACT_APP_API + "/contact", payload)
            .then((response) => {
                console.log(response.data);
                setFullName("");
                setBusinessName("");
                setEmail("");
                setIndustry("");
                setDescription("");
            })
            .catch((error) => {
                console.log("Error posting data: ", error);
                console.log(payload);
            })
    }

    return (
        <div className="contact">
            <div className="row">
                <div className="col-sm-4 image"></div>
                <div className="col-sm-8 contact-fields">
                    <h1 className="contact-us-title">{props?.language == true ? "Na kontaktoni" : "Contact Us"}</h1>
                    <p className="contact-us-subtitle">
                        {props.language == true ?
                            ("Nëse jeni punëdhënës (Biznes ose Individ) apo Freelancer dhe keni pyetje ose nevoja për rekrutim, plotësoni këtë formular dhe ne do t'ju kontaktojmë së shpejti")
                            : ("If you're an employer (Business or Individual) or a Freelancer and you have questions or recruiting needs, fill this form and we will contact you shortly")}
                    </p>

                    <form action="post" method="post">
                        <div className="inputs">
                            <div className="right-inputs">
                                <input
                                    type="text"
                                    placeholder={props.language == true ? "Emri i plotë" : "Full Name"}
                                    name="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                  <input
                                    type="text"
                                    placeholder={props.language == true ? "Emri i Biznesit (opsionale)" : "Business Name (optional)"}
                                    name="Business name"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="left-inputs">
                            <input
                                    type="text"
                                    placeholder={props.language == true ? "Industria e Biznesit" : "Business Industry"}
                                    name="Business Industry"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    required
                                />
                                <textarea
                                    name="description"
                                    cols="30"
                                    rows="5"
                                    placeholder={props.language == true ? "Përshkrimi" : "Description"}
                                    value={description}
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </form>
                    <button className="send-btn-contact" onClick={handleSubmit}>{props?.language==true?"Dërgo":"Submit"}</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.data.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLang: (data) => dispatch(setLang(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
