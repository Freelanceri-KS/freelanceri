import React, { useEffect, useState } from "react";
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
import guypc from "../../assets/pcguy.png"
import collaboration from "../../assets/icons/collaboration.png"
import community from "../../assets/icons/community.png"
import verified from "../../assets/icons/verified.png"
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import quote from "../../assets/icons/quotes.png"
import Success from "../../assets/drini.jpg"



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
    swipe: false,
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

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  })
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
                      ? "Freelanceri lidh bizneset me"
                      : "Find your next"}
                  </h1>
                  <h1 class="card-title-line2">
                    {props?.language == true
                      ? "freelancerët më të mirë në Kosovë!"
                      : "exciting project!"}
                  </h1>
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
                <div className="card-title-line3">
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
        <div className="for-talents">

          <div className="for-talent-container">
            <div className="ftc-textcontainer">
              <div className="ftc-tag">
                <p>{props?.language == true ? "Për talentet" : "For talents"}</p>
              </div>
              <div className="ftc-content">
                <p className="ftc-content-p">{props?.language == true ? "Gjeni projektin" : "Find your perfect"}{!isMobile && (<br />)} {props?.language == true ? "tuaj ideal" : "project"}</p>
                <p className="ftc-content-p2">{props?.language == true ? "Zbulo shumë mundësi për të shfaqur aftësitë dhe ekspertizën tënde në platformën tonë. Pavarësisht nëse je një profesionist i përvojësuar apo sapo ke filluar, platforma jonë ofron një gamë të gjerë të projekteve që presin për prekjen unike tënde." : "Unlock endless opportunities to showcase your skills and expertise on our platform. Whether you're a seasoned professional or just starting out, our platform offers a diverse range of projects waiting for your unique touch."}</p>
              </div>
            </div>
            <div className="ftc-image"></div>
          </div>

        </div>
        <div className="for-businesses">
          <p className="for-businesses-title">{props?.language == true ? "Pse të na zgjidhni ne?" : "Why choose us?"}</p>
          <p className="for-businesses-dsc">
            {props?.language ? (
              <>
                Zgjidhni ne për cilësi të pashembullt, shërbim të jashtëzakonshëm dhe një përkushtim për të<br />kaluar pritshmëritë tuaja çdo herë.
              </>
            ) : (
              <>
                Choose us for unmatched quality, exceptional service, and a commitment to <br /> exceeding your expectations every time.
              </>
            )}
          </p>
          <div className="for-business-body">
            <img src={guypc} alt="guy on pc" className="for-business-img" />
            <div className="fbb-features">
              <div className="fbb-feature-1">
                <div className="feature-icon">
                  <img src={collaboration} alt="Collaboration" height={50} width={50} className="feature-icon-img" />
                </div>
                <div className="feature-text">
                  <h4>{props?.language == true ? "Rekrutim" : "Recruiting"}</h4>
                  <p className="feature-text-p">{props?.language == true ? "Platforma jonë ofron sherbime rekrutuese për kompanitë e regjistruara, duke pasur një databazë të pasuruar më freelancer që na mundëson gjetjën e profilit adekuat për nëvojat e biznesit." : "Our platform offers recruiting services for registered companies, having an enriched database of freelancers that enables us to find the profile adequate for business needs."}</p>
                </div>
              </div>
              <div className="fbb-feature-2">
                <div className="feature-icon">
                  <img src={community} alt="Collaboration" height={50} width={50} className="feature-icon-img" />
                </div>
                <div className="feature-text">
                  <h4>{props?.language == true ? "Përkrahje dhe komunitet" : "Support and Community"}</h4>
                  <p className="feature-text-p">{props?.language == true ? "Bashkohuni me një komunitet të gjallë të freelancereve dhe klientëve që janë të pasionuar për punën e tyre. Ekipi ynë është në dispozicion për të ju ndihmuar kurdo që të keni paqartësi" : "Our user-friendly platform ensures a seamless collaberation experience. Communicate with freelancers, share files and track project progress effortlessly."}</p>
                </div>
              </div>
              <div className="fbb-feature-1">
                <div className="feature-icon">
                  <img src={verified} alt="Collaboration" height={50} width={50} className="feature-icon-img" />
                </div>
                <div className="feature-text">
                  <h4>{props?.language == true ? "Menaxhim Projekti" : "Project Management"}</h4>
                  <p className="feature-text-p">{props?.language == true ? "Ndër shërbimet e shumta që ofron Freelancer për bizneset, veçoria më unike që mund të shërbejë dhe të plotësojë nevojat e shumta të kompanive që kanë nevojë është menaxhimi i projekteve." : "Among the many services that Freelancer offers for businesses, the most unique feature that can serve and meet the many needs of companies that need it is project management."}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fb-feedbacks">
            <div className="feedback-tag">
              <h1 className="fb-tag-h1">{props?.language == true ? (<>Çfarë thonë{!isMobile && (<br />)} klientët tanë</>) : (<>What our{!isMobile && (<br />)} customers say</>)}</h1>
              {!isMobile && (<div className="feedback-tag-arrows">
                <div className="arrow-1">
                  <FaRegArrowAltCircleLeft size={50} color="white" />
                </div>
                <div className="arrow-2">
                  <FaRegArrowAltCircleRight size={50} color="white" />
                </div>
              </div>)}
            </div>
            <div className="feedback-content">
              <img src={quote} alt="Quote" height={50} className="feedback-content-img" />
              <p>{props?.language == true ? "Freelanceri e bënë kërkimin tim për punë! Platforma e tyre ofron një gamë të gjerë të listave të vendeve të punës, duke përfshirë mundësi prestigjioze si Zyra e Presidentit. Ajo që i veçon është mbështetja e tyre e personalizuar - ata më ndihmuan të krijoj një CV të spikatur dhe më udhëhoqën gjatë gjithë procesit. Falë Freelancerit, gjeta punën time të ëndrrave! Nëse jeni serioz për gjetjen e pozicioneve të nivelit të lartë, mos kërkoni më larg se Freelanceri. Ata janë 'Real Deal'!" : "Freelanceri made my job search a breeze! Their platform offers a wide range of job listings, including prestigious opportunities like The President's Office. What sets them apart is their personalized support - they helped me craft a standout resume and guided me through the entire process. Thanks to Freelanceri, I landed my dream job! If you're serious about finding top-tier positions, look no further than Freelanceri. They're the real deal!"}</p>
              <div className="feedback-profile">
                <img src={Success} alt="User" height={60} width={65} className="rounded-circle" />
                <div className="feedback-user-data">
                  <h5>Drin Bajgora</h5>
                  <p>Employed at President's Office by Freelanceri</p>
                </div>
              </div>
            </div>
          </div>
        </div>


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
