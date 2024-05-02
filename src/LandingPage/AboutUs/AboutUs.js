import './AboutUs.scss';
import ourmissionimg from "../../assets/images/our-mission-img.png";
import Footer from '../components/footer';
import { setLang } from "../../redux/Functions/actions";
import { connect } from "react-redux";
import ExploreSection from '../../LandingPage/explore/ExploreSection';
import User from "../../assets/profiles/1.png"

const AboutUs = (props) => {
  return (
    <div className="aboutus">
      <div className="wrapper">
        <div className="sec-1">
          <p className="title text-dark">
            {props?.language
              ?
              "Rreth Nesh"
              :
              "About Us"
            }
          </p>
          <div className="sec-1paragraph">
            <p>
              {props?.language == true ? (
                <>
                  Mirë se vini në{" "}
                  <span style={{ color: "#455bef" }}>Freelanceri</span>, ku
                  pasioni takon mundësinë dhe punëtorët e pavarur progresojnë!
                  Ne jemi më shumë se një platformë; jemi një komunitet i
                  gjallë i ndërtuar mbi besimin se çdo njeri ka të drejtën për
                  të kthyer aftësitë e tyre në{" "}
                  <span style={{ color: "#455bef" }}>sukses</span>.
                </>
              ) : (
                <>
                  Welcome to{" "}
                  <span style={{ color: "#455bef" }}>Freelanceri</span>, where
                  passion meets opportunity, and freelancers thrive! We are
                  more than just a platform; we're a vibrant community built
                  on the belief that everyone deserves the chance to turn
                  their skills into{" "}
                  <span style={{ color: "#455bef" }}>success</span>.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="sec-2">
          <div className="row">
            <div className="col-sm-6 our-mission">
              <p className="title">
                {props?.language
                  ? "Misioni yne"
                  : "Our mission"}

              </p>
              <p className="subtitle1">
                {props?.language == true
                  ? "Fuqizojmë talentët për sfidat e të ardhmes"
                  : "Empowering Freelancers for Tomorrow's Challenges"}
              </p>
              <p className="subtitle2">
                {props?.language == true
                  ? "Freelenceri jo vetëm që lejon profesionistët e pavarur të aplikojnë, por sugjeron në mënyrë aktive profesionistë të aftë për kompanitë, duke ridefinuar punësimin e pavarur. Misioni ynë është një qasje gjithëpërfshirëse ku profesionistët e pavarur marrin sugjerime të përshtatura bazuar në aftësitë e tyre unike, duke krijuar një përvojë dinamike të kërkimit të punës."
                  : "Freelenceri not only lets freelancers apply but actively suggests skilled professionals to companies, redefining freelancing. Our mission is a comprehensive approach where freelancers receive tailored suggestions based on their unique skills, creating a dynamic job-search experience."}
              </p>
            </div>
            <div className="col-sm-6 our-mission-2">
              <img src={ourmissionimg} className="ourMissionImg" alt="" />
            </div>
          </div>
        </div>
        <div className="our-team">
          <div className="our-team-title">
            <h1 className='ott-h1'>Our Team</h1>
            <p className='ott-p'>Contact our team via email for inquiries regarding business partnerships or collaboration opportunities. </p>
          </div>
          <div className="our-team-grid">
            <div className="otg-item">
              <img src={User} alt="Kujtim Gjokaj" width={100} height={100} className='otgi-img rounded-circle' />
              <h4 className='otgi-h3'>Kujtim Gjokaj</h4>
              <p className='otgi-p'>CEO & Founder</p>
              <p className='otgi-p2'>gjokajkujtim9@gmail.com</p>
            </div>
            <div className="otg-item">
              <img src={User} alt="Kujtim Gjokaj" width={100} height={100} className='otgi-img rounded-circle' />
              <h4 className='otgi-h3'>Mentor Rexhepi</h4>
              <p className='otgi-p'>Chief Business Officer</p>
              <p className='otgi-p2'>gjokajkujtim9@gmail.com</p>
            </div>
            <div className="otg-item">
              <img src={User} alt="Kujtim Gjokaj" width={100} height={100} className='otgi-img rounded-circle' />
              <h4 className='otgi-h3'>Alan Greenberg</h4>
              <p className='otgi-p'>Advisor</p>
              <p className='otgi-p2'>gjokajkujtim9@gmail.com</p>
            </div>
            <div className="otg-item">
              <img src={User} alt="Kujtim Gjokaj" width={100} height={100} className='otgi-img rounded-circle' />
              <h4 className='otgi-h3'>Albrim Bajrami</h4>
              <p className='otgi-p'>Lead Developer</p>
              <p className='otgi-p2'>gjokajkujtim9@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="sec-3">
          <p className="title">
            {props?.language
              ?
              "Problemet që Ne Zgjidhim"
              :
              "The Problems We Solve"
            }
          </p>
          <p className="sec3-p">
            {props?.language == true
              ? "Freelancerë, ju dëgjojmë! Në një botë të mbushur me mundësi të pafundme, ne i kuptojmë sfidat me të cilat përballeni. Pavarësisht nëse jeni një profesionist i ri në kërkim të projekteve reale ose jeni profesionist me përvojë në kërkim të sfidave dhe përfitimeve shtesë, mos kërkoni më tej, Freelenceri është zgjidhja juaj për:"
              : "Freelancers, we hear you! In a world filled with endless possibilities, we understand the challenges you face. Regardless whether you are a new professional looking for real-live projects or you are experienced professional looking for extra challenges and benefits, look no further, Freelenceri is your solution to:"}
          </p>
          <div className="container problems">
            <div className="row">
              <div className="col-sm-6">
                <div className="text-container">
                  <h5>
                    {props?.language == true
                      ? "Mundësi të panumërta"
                      : "Streamlined Opportunities"}
                  </h5>
                  <p>
                    {props?.language == true
                      ? "Nuk ka më kërkime nëpër lista të pafundme. Algoritmet tona inteligjente të përputhjes ju lidhin me projekte që përputhen me aftësitë dhe aspiratat tuaja."
                      : "No more searching through endless listings. Our smart matching algorithms connect you with projects that align with your skills and aspirations."}
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-container">
                  <h5>
                    {props?.language == true ? "Pavarësi" : "Independence"}
                  </h5>
                  <p>
                    {props?.language == true
                      ? "Puna e pavarur (Freelance) ofron zgjedhje projektash sipas aftësive, duke nxitur bashkëpunim në komunitet. Përmirësimi i aftësive ndodh në projekte të ndryshme, ndërsa pavarësia lejon kontrollin e punës dhe karrierës."
                      : "Freelance offers a choice of projects according to skills, encouraging collaboration in the community. The improvement of skills occurs in different projects, while independence allows control of work and career."}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="text-container">
                  <h5>
                    {props?.language == true
                      ? "Përkrahje e komunitetit"
                      : "Community Support"}
                  </h5>
                  <p>
                    {props?.language == true
                      ? "Puna e pavarur nuk do të thotë të shkosh vetëm. Bashkohuni me komunitetin tonë, lidheni me profesionistë me të njëjtin mendim dhe aksesoni burimet që fuqizojnë rritjen tuaj."
                      : "Freelancing doesn't mean going solo. Join our community, connect with like-minded professionals, and access resources that empower your growth."}
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-container">
                  <h5>
                    {props?.language == true
                      ? "Rritja e aftësive"
                      : "Skill Enhancement"}
                  </h5>
                  <p>
                    {props?.language == true
                      ? "Ne besojmë se fitimi i përvojës dhe aftësive duke punuar në projekte reale është një çelës për zhvillimin tuaj."
                      : "We believe that gaining experience and skills by working on real projects is a key to your development."}
                  </p>
                </div>
              </div>
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
    language: state.data.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
