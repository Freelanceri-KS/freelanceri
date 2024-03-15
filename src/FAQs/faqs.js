import './faqs.scss'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../LandingPage/components/footer';
import singleprofile from "../assets/images/single-profile.png";
import { setLang } from "../redux/Functions/actions";
import { connect } from "react-redux";
import ExploreSection from '../pages/components/ExploreSection'
import { useState } from 'react';

const FAQs = (props) => {
  const initialStates = {
    freelancerPlatform: false,
    postProject: false,
    qualityOfWork: false,
    findAndBid: false,
    freelancerSelection: false,
    platformFee: false,
    Tarifa:false
  };

  const [isExpanded, setExpanded] = useState(initialStates);

  const toggleExpansion = (key) => {
    setExpanded((prevStates) => ({
      ...initialStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div className="faqs">
      <div className="wrapper">
        <p className="title">
          {props?.language
            ? "Pyetjet më të shpeshta"
            : " Frequently asked questions"}
        </p>

        <div className="container questions">
          <div className="row">
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.freelancerPlatform ? "expanded" : ""
                }`}
               >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("freelancerPlatform")}
                >
                  <h5>
                    {props?.language
                      ? "Si funksionon platforma per freelanceret"
                      : "How does the platform work for freelancers?"}
                  </h5>
                  {isExpanded.freelancerPlatform ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.freelancerPlatform && (
                  <p>
                    {props?.language
                      ? "Platforma jonë lidh klientët/bizneset dhe freelanceret. Klientët postojnë projekte dhe freelanceret japin oferta, ndersa në mungesë të përputhjes, klientët kërkojnë ndihmë nga platforma për të gjetur profilet adekuate për kërkesat e tyre."
                      : "Our platform facilitates connections between clients seeking freelance services and freelancers. Clients can post projects, freelancers can bid, and if a suitable match isn't found, clients can request assistance, and the platform will leverage its network to find the right freelancers."}
                  </p>
                )}
              </div>
            </div>
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.postProject ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("postProject")}
                >
                  <h5>
                    {props?.language
                      ? "Si mund të postoj një projekt ose të kërkoj freelancer si punëdhenës?"
                      : "How can I post a project or look for freelancers as a client?"}
                  </h5>
                  {isExpanded.postProject ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.postProject && (
                  <p>
                    {props?.language
                      ? "Si klient, thjesht hyni në llogarinë tuaj, shkoni te paneli i kontrollit dhe klikoni në butonin 'Postoni një projekt'. Plotësoni detajet e projektit tuaj, vendosni buxhetin tuaj dhe publikoni projektin për të filluar marrjen e propozimeve nga profesionistët e pavarur."
                      : "As a client, simply log in to your account, go to the dashboard, and click on the 'Post a Project' button. Fill in the details of your project, set your budget, and publish the project to start receiving proposals from freelancers."}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.qualityOfWork ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("qualityOfWork")}
                >
                  <h5>
                    {props?.language
                      ? "Çfarë masash janë marrë për të garantuar cilësinë e punës?"
                      : "What measures are in place to ensure the quality of work?"}
                  </h5>
                  {isExpanded.qualityOfWork ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.qualityOfWork && (
                  <p>
                    {props?.language
                      ? "Ne inkurajojmë klientët të lënë komente dhe vlerësime për freelancere pas përfundimit të projektit. Ky sistem vleresimesh ndihmon në ruajtjen e një standardi të lartë cilësie, dhe klientët mund të marrin vendime të informuara bazuar në përvojat e të tjerëve."
                      : "We encourage clients to leave reviews and ratings for freelancers upon project completion. This feedback system helps maintain a high standard of quality, and clients can make informed decisions based on the experiences of others."}
                  </p>
                )}
              </div>
            </div>
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.findAndBid ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("findAndBid")}
                >
                  <h5>
                    {props?.language
                      ? "Si gjejnë projekte dhe bëjnë oferta freelanceret?"
                      : "How do freelancers find and bid on projects?"}
                  </h5>
                  {isExpanded.findAndBid ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.findAndBid && (
                  <p>
                    {props?.language
                      ? "Freelanceret mund të gjejnë projektet e disponueshme në platformë dhe të bëjnë oferta për ato projekte që përputhen me aftësitë e tyre. Ata mund të shfaqin ekspertizën e tyre, të ofrojnë kuota dhe të komunikojnë me klientët për të siguruar projekte."
                      : "Freelancers can browse available projects on the platform and submit proposals for those that match their skills and interests. They can showcase their expertise, provide quotes, and communicate with clients to secure projects."}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.freelancerSelection ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("freelancerSelection")}
                >
                  <h5>
                    {props?.language
                      ? "Si përzgjidhen freelanceret për një projekt?"
                      : "How are freelancers selected for a project?"}
                  </h5>
                  {isExpanded.freelancerSelection ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.freelancerSelection && (
                  <p>
                    {props?.language
                      ? "Klientët shqyrtojnë propozimet e paraqitura nga freelanceret, duke marrë parasysh faktorë të tillë si aftësitë, përvoja dhe çmimi i ofertës. Ata gjithashtu mund të kontrollojnë profilin dhe vlerësimet mbi freelancerin. Pasi të jetë i kënaqur, klienti mund t'i japë projektin freelancerit të zgjedhur."
                      : "Clients review the proposals submitted by freelancers, considering factors such as skills, experience, and bid price. They can also check the freelancer's profile, ratings, and reviews. Once satisfied, the client can award the project to the chosen freelancer."}
                  </p>
                )}
              </div>
            </div>
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.platformFee ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("platformFee")}
                >
                  <h5>
                    {props?.language
                      ? "A ka një tarifë për përdorimin e platformës?"
                      : "Is there a fee for using the platform?"}
                  </h5>
                  {isExpanded.platformFee ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.platformFee && (
                  <p>
                    {props?.language
                      ? "Regjistrimi dhe përdorimi janë falas, por për transaksione të suksesshme të projektit ka një tarifë të vogël shërbimi. Kjo tarifë ndihmon në përmirësimin e platformës për t'i shërbyer më mirë komunitetit tonë në rritje të profesionistëve dhe klientëve. Inkurajojmë përdoruesit të përfitojnë nga periudha e promovimit falas, sepse pas një kohe të shkurtër do të ketë tarifa për përdoruesit."
                      : "While signing up and browsing projects is free, there is a small service fee for successful project transactions. This fee helps us maintain and improve the platform to better serve our growing community of freelancers and clients. Nevertheless, we encourage you to use the limited promotion period and use the platform for free. After a short period, there will be fees imposed for freelancers and clients for using the platform."}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.projects ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("projects")}
                >
                  <h5>
                    {props?.language
                      ? "A mund të punësoj freelancer për projekt afatgjatë?"
                      : "Can I hire freelancers for long-term projects?"}
                  </h5>
                  {isExpanded.projects ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.projects && (
                  <p>
                    {props?.language
                      ? "Absolutisht! Platforma jonë mbështet projekte afatshkurtra dhe afatgjata. Punonjësit e pavarur mund të punësohen për orë ose për kontrata me afat të caktuar, në varësi të natyrës së projektit."
                      : " Absolutely! Our platform supports both short-term and long-term projects. Freelancers can be hired on an hourly basis or for fixed-term contracts, depending on the nature of the project."}
                  </p>
                )}
              </div>
            </div>
            <div className="col-sm">
              <div
                className={`question-container ${
                  isExpanded.Tarifa ? "expanded" : ""
                }`}
              >
                <div
                  className="qc-header"
                  onClick={() => toggleExpansion("Tarifa")}
                >
                  <h5>
                    {props?.language
                      ? "A ka një tarifë për përdorimin e platformës?"
                      : "How do I handle disputes or issues during a project?"}
                  </h5>
                  {isExpanded.Tarifa ? (
                    <IoIosArrowUp size={25} color="#455bef" width={20} />
                  ) : (
                    <IoIosArrowDown size={25} color="#455bef" width={20} />
                  )}
                </div>
                {isExpanded.Tarifa && (
                  <p>
                    {props?.language
                      ? "Platforma jonë ofron një proces të zgjidhjes së mosmarrëveshjeve. Nëse lind ndonjë problem, të dyja palët mund të paraqesin shqetësimet e tyre dhe ekipi ynë do të ndërmjetësojë për të gjetur një zgjidhje të drejtë. Ne i japim përparësi transparencës dhe synojmë të krijojmë një përvojë pozitive për të gjithë përdoruesit."
                      : "Our platform provides a dispute resolution process. If any issues arise, both parties can submit their concerns, and our team will mediate to find a fair resolution. We prioritize transparency and aim to create a positive experience for all users."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
        {/* <p className="title">
          {props?.language
            ? "Nuk gjetët një përgjigje"
            : "Didn't find an answer?"}
        </p>
        <p className="subtitle">
          {props?.language
            ? "Kontakto një nga anëtaret e ekipit"
            : "Contact one of our team members"}
        </p>
        <div className="container profiles">
          <div className="row">
            <div className="col-sm profile-card">
              <img src={singleprofile} alt="" />
              <div className="title-small">
                <h5>Kujtim Gjokaj</h5>
                <p>CEO</p>
              </div>
              <p>gjokaj@gmail.com</p>
            </div>
            <div className="col-sm profile-card">
              <img src={singleprofile} alt="" />
              <div className="title-small">
                <h5>Kujtim Gjokaj</h5>
                <p>CEO</p>
              </div>
              <p>gjokaj@gmail.com</p>
            </div>
            <div className="col-sm profile-card">
              <img src={singleprofile} alt="" />
              <div className="title-small">
                <h5>Kujtim Gjokaj</h5>
                <p>CEO</p>
              </div>
              <p>gjokaj@gmail.com</p>
            </div>
            <div className="col-sm profile-card">
              <img src={singleprofile} alt="" />
              <div className="title-small">
                <h5>Kujtim Gjokaj</h5>
                <p>CEO</p>
              </div>
              <p>gjokaj@gmail.com</p>
            </div>
          </div>
        </div> */}
      </div>
      <ExploreSection />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.data.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FAQs);
