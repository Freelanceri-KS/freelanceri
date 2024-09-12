import React, { useEffect, useState, useRef } from "react";
import "./home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { connect } from "react-redux";
import { setLang } from "../../redux/Functions/actions";
import home1 from "../../assets/home/home-1.png";
import home2 from "../../assets/home/home-2.png";
import ventureup from "../../assets/home/partners/ventureup.png";
import arraclick from "../../assets/home/partners/arra.png";
import wifimg from "../../assets/home/aboutus.png";
import done from "../../assets/icons/accept.png";
import xandidate from "../../assets/home/partners/xandidateai.png";
import graph from "../../assets/home/graph.jpg";
import vectlogo from "../../assets/images/vectlogo.png";
import consulting from "../../assets/home/conversation.png";
import development from "../../assets/home/web-design.png";
import education from "../../assets/home/graduation-cap.png";
import beetroot from "../../assets/home/partners/beetroot.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from "../../axios";
import { toast } from "react-toastify";
import tectigon from "../../assets/home/partners/tectigon.png"

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const [email, setEmail] = useState(null);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  })

  const createMail = () => {
    const payload = {
      email: email
    }
    axios.post(`/home-email`, payload)
      .then((response) => {
        toast.success("Email has been saved, our team will contact you shortly.");
        console.log(response.data);
        setEmail("");
      })
      .catch((error) => {
        console.error('Error creating mail:', error);
      });
  };

  const initialStates = {
    freelancerPlatform: false,
    postProject: false,
    qualityOfWork: false,
    findAndBid: false,
    freelancerSelection: false,
    platformFee: false,
    Tarifa: false
  };

  const [isExpanded, setExpanded] = useState(initialStates);

  const toggleExpansion = (key) => {
    setExpanded((prevStates) => ({
      ...initialStates,
      [key]: !prevStates[key],
    }));
  };

  const benefits = useRef(null);

  const scrollToDiv = () => {
    if (benefits.current) {
      benefits.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleEmailClick = () => {
    const email = "platforma.freelanceri@gmail.com";
    const subject = "Contacting from website about...";
    const body = "";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <div className="landing">
        <div className="home-1">
          <div className="home-1-wrapper">
            <img src={home1} alt="First home image" className="home-img-1" />
            <div className="home-center-div">
              <p className="hcd-maintxt">AI-Enabled Hiring Platform: Revolutionizing Talent Acquisition</p>
              <p className="hcd-subtext mt-3">Connect, Collaborate, and Innovate with Like-Minded Professionals Worldwide in Our AI-Driven Employment Ecosystem.</p>
              <div className="email-sub mt-4">
                <input type="text" name="email" id="email" placeholder="Enter your email" className="es-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="es-btn" style={{ cursor: 'pointer' }} onClick={createMail}>
                  Join us
                </div>
              </div>
            </div>
            <img src={home2} alt="Second home image" className="home-img-2" />
          </div>
        </div>
        <div className="partners">
          <p className="partners-maintxt mb-3">Our trusted partners</p>
          <div className="partners-row">
            <img src={ventureup} alt="Venture Up" width={165} height={165} className="mx-1" />
            <img src={arraclick} alt="Arra Click" width={165} height={165} className="mx-1" />
            <img src={xandidate} alt="Xandidate" width={165} height={165} className="mx-1" />
            <img src={beetroot} alt="Beetroot Academy Kosova" width={165} height={165} className="mx-1" />
            <img src={tectigon} alt="Tectigon Academy" width={165} height={165} className="mx-1" />
          </div>
        </div>
        <div className="what-is-freelanceri">
          <h2 className="wif-h2">What is Freelanceri?</h2>
          <p>Understand what we provide and how we operate.</p>
          <div className="wif-main mt-5 mb-5">
            <div className="wif-main-wrapper">
              <div className="wif-main-left">
                <h4 style={{ fontWeight: "600" }}>Connect with the industry leaders.</h4>
                <p className="mt-3">A one-stop-shop for entrepreneurial talent. Hire from the best pool of talent over the globe, covering all kind of expertise ranging from Steve Woz (the techy) and Steve jobs (the visionary) to Elon Musk (🚀), we have covered all areas expertise.</p>
                <div className="learn-more mt-5">
                  Learn more
                </div>
              </div>
              <div className="wif-main-right">
                <img src={wifimg} alt="Freelanceri" className="wif-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="for-freelancers">
          <div className="ff-wrapper">
            <div className="ffw-cards">
              <div className="ffw-card-1">
                <p className="ffwc1-p">$33,000</p>
                <div className="ffwc1-c d-flex align-items-center">
                  <img src={done} alt="Done" className="mx-2" width={20} height={20} />
                  <p className="ffwc1-p">
                    Earned
                  </p>
                </div>
              </div>
              <div className="ffw-card-2 mt-5">
                <p className="ffwc1-p">New projects</p>
                <div className="ntf">10</div>
              </div>
            </div>
            <div className="ffw-text">
              <h2>Meet with Global Opportunities</h2>
              <p className="mt-4">
                Explore global work opportunities on our AI-powered platform. Connect with employers worldwide, receive personalized job recommendations, and access consulting and education services. Join our community to advance your career globally.</p>
            </div>
          </div>
        </div>
        <div className="chart">
          <h1 className="chart-h1">Grow your business by using Freelanceri <br />AI services</h1>
          <p className="chart-p">Partner up with Freelanceri to use our AI based solution which will make your business thrive</p>
          <img src={graph} alt="Graph" style={{ borderRadius: '10px' }} className="graph-img" />
        </div>
        <div className="home-services" ref={benefits}>
          <h1 className="home-services-h1">Everything you need to make<br />your business successful</h1>
          <p className="home-services-p">What do you get when you join us?</p>
          <p className="home-services-p">Access our exclusive network with professionals and services as listed below.</p>
          <div className="services-grid">
            <div className="sg-card">
              <img src={vectlogo} alt="Hiring AI" width={50} height={50} />
              <h4>Hiring with AI</h4>
              <p style={{ color: "#909090" }}>AI tools in hiring streamline recruitment and ensure unbiased selections, transforming team building.</p>
            </div>
            <div className="sg-card">
              <img src={consulting} alt="Hiring AI" width={50} height={50} />
              <h4>Consulting</h4>
              <p style={{ color: "#909090" }}>AI-driven consulting optimizes strategies and enhances decision-making with data-driven insights.</p>
            </div>
            <div className="sg-card">
              <img src={development} alt="Hiring AI" width={50} height={50} />
              <h4>Development</h4>
              <p style={{ color: "#909090" }}>AI tools in project development boost efficiency, optimize processes, and enhance outcomes.</p>
            </div>
            <div className="sg-card">
              <img src={education} alt="Hiring AI" width={50} height={50} />
              <h4>Education</h4>
              <p style={{ color: "#909090" }}>Effective training enhances skills, boosts engagement, and improves performance.</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="questions-wrapper">
            <div className="qw-right">
              <h1 className="qwr-h1">Frequently answered questions</h1>
              <div className={`question-container ${isExpanded.freelancerPlatform ? "expanded" : ""}`}>
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("freelancerPlatform")}
                >
                  <h5>
                    How does the platform work for freelancers?
                  </h5>
                  {isExpanded.freelancerPlatform ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.freelancerPlatform && (
                  <p>
                    Our platform facilitates connections between clients seeking freelance services and freelancers. Clients can post projects, freelancers can bid, and if a suitable match isn't found, clients can request assistance, and the platform will leverage its network to find the right freelancers.
                  </p>
                )}
              </div>
              <div className={`question-container ${isExpanded.postProject ? "expanded" : ""}`}>
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("postProject")}
                >
                  <h5>
                    How can I post a project or look for freelancers as a client?
                  </h5>
                  {isExpanded.postProject ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.postProject && (
                  <p>
                    As a client, simply log in to your account, go to the dashboard, and click on the 'Post a Project' button. Fill in the details of your project, set your budget, and publish the project to start receiving proposals from freelancers.
                  </p>
                )}
              </div>
              <div className={`question-container ${isExpanded.qualityOfWork ? "expanded" : ""}`}>
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("qualityOfWork")}
                >
                  <h5>What measures are in place to ensure the quality of work?</h5>
                  {isExpanded.qualityOfWork ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.qualityOfWork && (
                  <p>
                    We encourage clients to leave reviews and ratings for freelancers upon project completion. This feedback system helps maintain a high standard of quality, and clients can make informed decisions based on the experiences of others.
                  </p>
                )}
              </div>
              <div className={`question-container ${isExpanded.findAndBid ? "expanded" : ""}`}>
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("findAndBid")}
                >
                  <h5>How do freelancers find and bid on projects?"</h5>
                  {isExpanded.findAndBid ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.findAndBid && (
                  <p>
                    Freelancers can browse available projects on the platform and submit proposals for those that match their skills and interests. They can showcase their expertise, provide quotes, and communicate with clients to secure projects.
                  </p>
                )}
              </div>
            </div>
            <div className="qw-left">
              <div className="qwl-card" >
                <h3>We are here to help you</h3>
                <h4 className="qwl-card-h4">Chat with us?</h4>
                <div className="qwl-card-btn" onClick={handleEmailClick} style={{ cursor: "pointer" }}>
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
