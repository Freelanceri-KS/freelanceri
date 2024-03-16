import './Details.scss';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"
import User2 from "../../assets/images/user2.png"
import Banner from "../../assets/banners/banner.png"
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";



const DetailsPage = () => {
  return (
    <div className="details-page">
      <div className="dp-left">
        <div className="dp-left-container">
          <div className="dp-left-container-header">
            <MdOutlineArrowBackIosNew size={30} color='#455bef' />
            <h5>Go back</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-container-profile">
            <div className="dp-cp-left">
              <img src={User} alt="User profile picture" height={60} className='dpcp-image' />
              <div className="dp-cp-data">
                <p className='dp-cp-data-p'>Posted by:</p>
                <h6 className='dp-cp-data-h6'>Malena Buchholz</h6>
              </div>
            </div>
            <div className="dp-cp-data-time">
              <p className='dp-cp-data-p'>12/04/2024</p>
              <p className='dp-cp-data-p'>04:32pm</p>
            </div>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-email">
            <p className='dp-cp-data-p'>Email</p>
            <h5>+383 45 296 605</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-linkedin">
            <p className='dp-cp-data-p'>LinkedIn</p>
            <h5>MalenaBuccholz</h5>
          </div>
          <div className="horiz-barrier"></div>
          <div className="dp-left-instagram">
            <p className='dp-cp-data-p'>LinkedIn</p>
            <h5>MalenaBuccholz</h5>
          </div>
        </div>
      </div>
      <div className="dp-center">
        <div className="dp-center-mainpost">
          <div className="mainpost-title">
            <h5 className='mainpost-title-h5'>Interior Designer</h5>
            <MdOutlineBookmarkBorder size={30} color='#455bef' />
          </div>
          <div className="mainpost-about">
            <div className="location">
              <p className='mainpost-about-tag'>Location</p>
              <p className="mainpost-about-value">Prishtina</p>
            </div>
            <div className="vert-barrier"></div>
            <div className="type">
              <p className='mainpost-about-tag'>Type</p>
              <p className="mainpost-about-value">Project</p>
            </div>
            <div className="vert-barrier"></div>
            <div className="category">
              <p className='mainpost-about-tag'>Category</p>
              <p className="mainpost-about-value">Designer</p>

            </div>
          </div>
          <div className="mainpost-description">
            <p>I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
              <br />
              We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you!
              <br />
              <br />

              About My Room:
              Size: [Dimensions]
              Current Style: [Brief description, e.g., minimalist, eclectic]
              Desired Vibes: [Mention the ambiance you're aiming for]
              <br />
              <br />

              Let's make this room transformation a collaborative masterpiece! Your ideas could be the missing piece to my dream space.
            </p>
          </div>
          <div className="mainpost-footer">
            <div className="freelancers-nr">
              <p className='mainpost-footer-p'>Kërkoj</p>
              <h6 className='mainpost-footer-h6'>1 freelancer</h6>
            </div>
            <div className="vert-barrier"></div>
            <div className="deadline">
              <p className='mainpost-footer-p'>Afati</p>
              <h6 className='mainpost-footer-h6'>1 muaj</h6>

            </div>
            <div className="vert-barrier"></div>
            <div className="budget-details">
              <p className='mainpost-footer-p'>Bugjeti</p>
              <h6 className='mainpost-footer-h6'>3500$</h6>

            </div>
            <button className="apply-details">
              <p className='a-d-p'>Apply</p>
            </button>
          </div>
        </div>
        <div className="dp-center-related">
          <h2 className='related-title'>Related</h2>
          <div className="job-post-container">
            <div className="job-post-container-header">
              <div className="jpch-left">
                <img src={User2} alt="User" width={50} height={50} className='jpch-left-img'/>
                <div className="jpch-left-user">
                  <h6 className="jpch-l-h6">Social Media</h6>
                  <p className="jpch-l-p">Fjolla Berisha</p>
                </div>
              </div>
              <div className="jpch-center">
                <div className="vert-barrier" id='jpch-barrier'></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Location</p>
                  <h6 className="jpch-c-value">Prishtina</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Type</p>
                  <h6 className="jpch-c-value">Full-Time</h6>
                </div>
                <div className="vert-barrier"></div>
                <div className="jpch-center-tags">
                  <p className="jpch-c-tag">Category</p>
                  <h6 className="jpch-c-value">Graphic Designer</h6>
                </div>
              </div>
              <FaBookmark size={25} color="#455bef" className='jpch-bookmark' />
            </div>
            <div className="job-post-container-body">
              <p className="jpcb-p">
                I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
                <br />
                <br />
                We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're.... Show more
              </p>
            </div>
            <div className="footer-line"></div>
            <div className="job-post-footer">
              <div className="jp-footer-info">
                <p className="tag">Kerkoj</p>
                <p className="value">1 freelancer</p>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Afati</div>
                <div className="value">3 ditë</div>
              </div>
              <div className="vert-barrier"></div>
              <div className="jp-footer-info">
                <div className="tag">Budget</div>
                <div className="value">4100$</div>
              </div>
              <button className="jp-apply-details">
                <p className='a-d-p'>Apply</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dp-right">
        <img src={Banner} alt="Banner" className='dp-right-banner' />
      </div>
    </div>
  );
}

export default DetailsPage;