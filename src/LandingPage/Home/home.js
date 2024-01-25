import React, { useState } from "react";
import "./home.scss";
import MainImageSection1 from "../../assets/images/section1imgmain.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DummyMember from "../../assets/images/dummymember.avif";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import Posts from "../../assets/images/sec4post.png";
import Members from "../../assets/images/members.png";
import Footer from "../components/footer";
import DmsImg from "../../assets/images/dmsImg.png";
import DmsImgShqip from "../../assets/images/for_freelancers_sq.png";
import { connect } from "react-redux";
import { setLang } from "../../redux/Functions/actions";
import { FaLaptopCode } from "react-icons/fa6";
import signleImg from "../../assets/images/single-profile.png";
import { FaPhotoVideo } from "react-icons/fa";
import { AiTwotoneDatabase } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import img1 from "../../assets/profiles/1.png"
import img2 from "../../assets/profiles/2.png";
import img3 from "../../assets/profiles/3.png";
import img4 from "../../assets/profiles/4.jpg";
import img5 from "../../assets/profiles/5.png";
import img6 from "../../assets/profiles/6.png";
import img7 from "../../assets/profiles/7.png";
import img8 from "../../assets/profiles/8.png";
import img9 from "../../assets/profiles/9.png";
import img10 from "../../assets/profiles/10.png";



const Home = (props) => {
  const categories = [
    "Developer",
    "Graphic Designer",
    "Video Editor",
    "Cyber Secutiry",
    "Drone Operator",
    "Interior Designer",
    "Dev Ops",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 6, //PC
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    swipe:false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // max width
        settings: {
          slidesToShow: 2, // MOBILE
        },
      },
    ],
  };
  return (
    <>
      <div className="asd">
        <div className="container mb-5">
          {/* SECTION 1 */}
          <div class="card bg-light text-black section1overlay">
            <div className="img-div">
              <img
                src={MainImageSection1}
                class="card-img sec1img"
                alt="Laptop lady"
              />
            </div>
            <div class="card-img-overlay">
              <div className="imageText">
                <div className="col">
                  <h1 class="card-title-line1">
                    {props?.language == true
                      ? "Gjeni projektin"
                      : "Find your next"}
                  </h1>
                  <h1 class="card-title-line2">
                    {props?.language == true
                      ? "tuaj emocionues!"
                      : "exciting project!"}
                  </h1>
                </div>
                <div className="col-5">
                  <p class="card-text imageDesc text-muted">
                    {props?.language == true
                      ? "Freelanceri është i dizajnuuar të lidh punëdhenësit me freelancerët më të mirë në Kosovë!"
                      : "Freelanceri is designed to connect employers with top quality freelancers all around Kosova!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inputs">
            <div className="positioning">
              <input
                className="searchinputJob"
                placeholder="Job title.."
                type="text"
                name=""
                id=""
                disabled
              />
              <input
                disabled
                className="searchinputLocation"
                placeholder="City, Location.."
                type="text"
                name=""
                id=""
              />
              <button disabled className="searchbtn">
                search
              </button>
            </div>
          </div>
          {/* SECTION 1 */}

          {/* Slider */}
          <center className="category-slider mt-4">
            <Slider {...sliderSettings}>
              {categories?.map((category, index) => (
                <>
                  <button key={index} className="categoriesbtn">
                    {category}
                  </button>
                </>
              ))}
            </Slider>
          </center>
          {/* Slider */}

          {/* SECTION 2 */}
          <div className="mt-5 mb-5">
            <div className="row">
              <div className="col-sm-4">
                <div className="card-title-line2">
                  {props?.language == true
                    ? "Kategoritë e Njohura"
                    : "Popular Categories"}
                </div>
                <span className="descCategory">
                  {props?.language == true
                    ? "Ju mund te shikoni më shumë"
                    : "You can always see more"}{" "}
                  <p className="colorsplit">
                    {props?.language == true ? "kategori!" : "categories!"}{" "}
                  </p>
                </span>
              </div>

              <div className="col-sm-4 cats">
                <div className="card-outline">
                  <div className="card-header">
                    <div className="title-side">
                      <FaLaptopCode size={25} />
                      <h5 className="card-profession-text">
                        Software Developer
                      </h5>
                    </div>
                    <FaRegBookmark
                      role="button"
                      className="text-primary"
                      size={20}
                    />
                  </div>
                  <div className="card-body-wrapper">
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img1} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Back End</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img2} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Front End</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MAPING */}

              <div className="col-sm-4">
                <div className="card-outline">
                  <div className="card-header">
                    <div className="title-side">
                      <PiPaintBrushDuotone size={25} />
                      <h5 className="card-profession-text">Graphic Designer</h5>
                    </div>
                    <FaRegBookmark
                      role="button"
                      className="text-primary"
                      size={20}
                    />
                  </div>
                  <div className="card-body-wrapper">
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img3} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Brand identity</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img4} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Ui/Ux</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card-outline">
                  <div className="card-header">
                    <div className="title-side">
                      <FaPhotoVideo size={25} />
                      <h5 className="card-profession-text">Video Editor</h5>
                    </div>
                    <FaRegBookmark
                      role="button"
                      className="text-primary"
                      size={20}
                    />
                  </div>
                  <div className="card-body-wrapper">
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img5} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Videographer</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img6} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Colorist</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card-outline">
                  <div className="card-header">
                    <div className="title-side">
                      <AiTwotoneDatabase size={25} />
                      <h5 className="card-profession-text">Dev Ops</h5>
                    </div>
                    <FaRegBookmark
                      role="button"
                      className="text-primary"
                      size={20}
                    />
                  </div>
                  <div className="card-body-wrapper">
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img7} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Tester</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img8} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>White hat</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card-outline">
                  <div className="card-header">
                    <div className="title-side">
                      <FaNetworkWired size={25} />
                      <h5 className="card-profession-text">Network Engineer</h5>
                    </div>
                    <FaRegBookmark
                      role="button"
                      className="text-primary"
                      size={20}
                    />
                  </div>
                  <div className="card-body-wrapper">
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img9} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Network specialist</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="body-content">
                        <div className="identity-side">
                          <img src={img10} alt="" height={45} width={45} />
                          <div className="name">
                            <h6>Network specialist</h6>
                            <p>Freelanceri</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt
                          role="button"
                          className="text-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION 2 */}

          {/* SECTION 3 */}
          
          <div className="container howitworks">
            <div className="how-title">
              <h1>{props?.language == true ? "Si Funksionon" : "How It Works"}</h1>
              <p>{props?.language == true ? "Në" : "In"}<span> {props?.language == true ? "3 Hapa" : "3 very easy"}</span> {props?.language == true ? "të leht" : "steps!"}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="how-card">
                  <h1 className="how-number">01</h1>
                  <h3>{props?.language == true
                      ? "Regjistroni Llogarinë Tuaj"
                      : "Register Your Account"}</h3>
                  <p>{props?.language == true
                      ? "Regjistrohuni në platformë si punëdhënës ose si profesionist i pavarur falas."
                      : "Register on the platform as an employer or as a freelancer for free."}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="how-card">
                  <h1 className="how-number">02</h1>
                  <h3>{props?.language == true
                      ? "Ngarkoni Portofolion Tuaj"
                      : "Upload Your Portfolio"}</h3>
                  <p>{props?.language == true
                      ? "Rregullo portfolion si freelancer apo si biznes."
                      : "Manage your portfolio as a freelancer or as a business."}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="how-card">
                  <h1 className="how-number">03</h1>
                  <h3>{props?.language == true
                      ? "Apliko Per Punë!"
                      : "Apply For Jobs!"}</h3>
                  <p>{props?.language == true
                      ? "Fillo të punosh!"
                      : "Start working!"}</p>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION 3 */}
        </div>
        {/* SECTION 4 */}
        <div className="grayArea pb-5 pt-5">
          <div className="d-flex justify-content-center">
            <div className="grayArea">
              <div className="label d-flex justify-content-center">
                <center className="freelanceri-for">
                  <span className="text-wrapper">
                    Freelanceri
                    <br />
                  </span>
                  <span className="span">
                    {props?.language == true
                      ? "per Punëdhënës"
                      : "for Employers"}
                  </span>
                </center>
              </div>
              <br />
              <p className="elevate-your mt-5">
                {props?.language == true
                  ? "Ngritni projektet tuaja me ne! Përdorni një grup profesionistësh të lirë të aftë për zgjidhje me kosto efektive, fleksibilitet dhe perspektiva novatore. Bashkohuni tani për të transformuar biznesin tuaj dhe për të zhbllokuar suksesin!"
                  : "Elevate your projects with us! Tap into a pool of skilled freelancers for cost-effective solutions,flexibility, and innovative perspectives. Join now to transform your business and unlock success"}
              </p>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row gap-1">
              <div class="col ">
                <div class="card-container card-white">
                  <div class="card-title">
                    {props?.language == true
                      ? "Qasje në profile të ndryshme"
                      : "Access to Diverse Talent"}
                  </div>
                  <div class="card-description">
                    {props?.language == true
                      ? "Përdorni qasjen në një grup të madh të talenteve me ekspertizë të larmishme të përshtatura për nevojat specifike të projektit."
                      : "Tap into a global pool of skilled freelancers with diverse expertise tailored to specific project needs."}
                  </div>
                </div>
              </div>
              <div class="col ">
                <div class="card-container card-blue">
                  <div class="card-title">
                    {props?.language == true
                      ? "Efiçenca e kostos"
                      : "Cost-Efficiency"}
                  </div>
                  <div class="card-description text-light">
                    {props?.language == true
                      ? "Punësoni profesionistë të pavarur nga platforma jonë dhe ulni kostot tradicionale të punësimit."
                      : "Hire freelancers from our platform and cut traditional employment costs."}
                  </div>
                </div>
              </div>
              <div class="col ">
                <div class="card-container card-white">
                  <div class="card-title">
                    {props?.language == true
                      ? "Fleksibiliteti dhe rritja"
                      : "Flexibility and Scalability"}
                  </div>
                  <div class="card-description">
                    {props?.language == true
                      ? "Rritu lehtësisht duke punësuar freelancer kur kërkesat e projektit ndryshojnë, duke siguruar përdorimin optimal të burimeve."
                      : "Easily scale up or down by hiring freelancers as project demands fluctuate, ensuring optimal resource utilization."}
                  </div>
                </div>
              </div>
              <div class="col mt-3">
                <div class="card-container card-white">
                  <div class="card-title">
                    {props?.language == true
                      ? "Rezulat më i shpejtë"
                      : "Faster results"}
                  </div>
                  <div class="card-description">
                    {props?.language == true
                      ? "Përfitoni nga përfundimi i shpejtë i projektit me oraret fleksibël të punonjësve të pavarur, duke përshpejtuar kohën totale të projektit."
                      : "Gain speedy project completion with freelancers' flexible schedules, hastening overall timelines."}
                  </div>
                </div>
              </div>
              <div class="col mt-3">
                <div class="card-container card-white">
                  <div class="card-title">
                    {props?.language == true
                      ? "Sigurimi i cilësisë"
                      : "Quality Assurance"}
                  </div>
                  <div class="card-description">
                    {props?.language == true
                      ? "Përdorni sistemin vlerësimev në platformë për të zgjedhur punonjës të pavarur me përvojë të provuar për punë cilësore."
                      : "Use platform feedback and ratings to select freelancers with proven records for high-quality work."}
                  </div>
                </div>
              </div>
              <div class="col mt-3">
                <div class="card-container card-white">
                  <div class="card-title">
                    {props?.language == true
                      ? "Inovacion dhe perspektiva të freskëta"
                      : "Innovation and Fresh Perspectives"}
                  </div>
                  <div class="card-description">
                    {props?.language == true
                      ? "Hyni në inovacion me punonjës të pavarur, duke përdorur perspektivat e ndryshme për ide dhe zgjidhje të reja."
                      : "Tap into innovation with freelancers, leveraging diverse perspectives for fresh ideas and solutions."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center  mt-5">
            <button
              className="btn btn-md text-light"
              onClick={() => (window.location.href = "/register")}
              style={{ backgroundColor: "#455BEF" }}
            >
              {props?.language == true ? "Gjeni një talent" : "Find a Talent"}
            </button>
          </div>
        </div>
        <div className="container asd pb-5">
          <div className="row rows">
            <div className="col-6 col-6s">
              <div className="col cols mb-5">
                <h1 className="TalentText TalentTexts">
                  <span className="split" style={{ color: "#455BEF" }}>
                    Freelanceri{" "}
                  </span>
                  {props?.language == true ? " per Talentët" : "for Talents"}{" "}
                </h1>
              </div>
              <div className="col cols mb-5">
                <p className="text-muted text-muteds">
                  {props?.language == true
                    ? "Hapni një botë mundësish dhe ngrini karrierën tuaj të pavarur – bashkohuni me platformën tonë sot për t'u lidhur me klientë të ndryshëm, për të siguruar pagesa në kohë, për të ndërtuar një rrjet të fortë profesional dhe për të hyrë në burime të vlefshme për zhvillimin e vazhdueshëm të aftësive."
                    : "Unlock a world of opportunities and elevate your freelance career – join our platform today to connect with diverse clients, ensure timely payments, build a strong professional network, and access valuable resources for continuous skill development."}
                </p>
              </div>
              <div className="col cols">
                <button
                  className="btn btn-md text-light"
                  onClick={() => (window.location.href = "/register")}
                  style={{ backgroundColor: "#455BEF" }}
                >
                  {props?.language == true
                    ? "Bëhuni një Talent"
                    : "Become a Talent"}
                </button>
              </div>
            </div>
            <div className="col-6 col-6s pt-5">
              {props?.language == true ? (
                <img src={DmsImgShqip} className="dmsimg" />
              ) : (
                <img src={DmsImg} className="dmsimg" />
              )}
            </div>
          </div>
        </div>
        {/* <div className="grayArea">
                    <div className="mb-5 pb-5">
                        <div className="d-flex">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="TalentText">
                                            Are You Looking <br /> For A Talent?
                                        </div>
                                        <div className="mt-4 responsive">
                                            You can <span className="colorsplit" > create an application </span> so talents can see what you need. <br /> You’ll get a notification for every talent that applys.<span className="colorsplit">Find the best one.</span>
                                        </div>
                                        <div className="col mt-5">
                                            <div className="sec4Btns gap-3">
                                                <button className="FindTalentBtn">Find a Talent</button>
                                                <button className="BecomeTalentBtn">Become a Talent</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex justify-content-end">
                                            <img src={Posts} className="PostSec4 d-flex justify-content-end" alt="posts" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* SECTION 4 */}
        {/* <div className="mb-5">
                    <div className="d-flex">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="d-flex justify-content-end">
                                        <img src={Members} className="PostSec4 d-flex justify-content-end" alt="posts" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="TalentText">
                                            Most Rated <br /> Talents!
                                        </div>
                                    </div>
                                    <center>
                                        <div className="mt-4">
                                            Here are some of our talents who have been most <br /> active and got the <span className="colorsplit" > most rated</span> profiles.
                                        </div>
                                    </center>
                                    <div className="mt-5">
                                        <div className="sec4Btns gap-3">
                                            <button className="BecomeTalentBtn">Find a Talent</button>
                                            <button className="FindTalentBtn">Become a Talent</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div > */}
        <div className="grayArealastsec">
          <div className="d-flex justify-content-center">
            <h1 className="TalentText">
              {props?.language == true
                ? "Eksploro dhe Gjej"
                : "Explore And Find"}{" "}
              <br />
              {props?.language == true
                ? "Një punë ose Talent"
                : "A Job Or A Talent"}
            </h1>
          </div>
          <center>
            <div className="mt-4 LastSec">
              <span className="colorsplit ">Freelanceri</span>
              {props?.language == true
                ? "është platforma, startup-et mund të marrin ndihmë me rekrutimin e tyre"
                : "is the platform, startups can get assitance with their recruitment of"}{" "}
              <br />{" "}
              {props?.language == true
                ? "talent si dhe lidhje me investitorët."
                : "talent as well as connection with investors."}
            </div>
          </center>
          <div className="d-flex justify-content-center gap-3 mt-5">
            {/* <button className="BecomeTalentBtn">Find a Talent</button>
                        <button className="FindTalentBtn">Become a Talent</button> */}
            <button
              className="FindTalentBtn"
              onClick={() => (window.location.href = "/register")}
            >
              {props?.language == true ? "Regjistrohu" : "Register"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
// export default Home;
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
