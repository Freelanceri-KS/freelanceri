import React, { useState, useEffect } from "react";
import "./postControll.scss";
import User1 from "../../assets/profiles/5.png";
// import Left from "../../assets/images/left.png";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import User from "../../assets/images/user1.png"


const PostControll = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="container">
    //   <div className="row">
    //     {!isMobile && (
    //       <div className="col-sm-6">
    //         <div className="main-div">
    //           <div className="top-div">
    //             <a href="#" className="Back">
    //             </a>
    //             <div className="profile-info">
    //               <img src={User1} alt="malena" className="profile" />
    //               <div className="posted-by">
    //                 Posted by: City Design
    //                 <br />
    //                 12/11/2023 04:32 PM
    //               </div>
    //             </div>
    //           </div>
    //           <div className="contact-info">
    //             <p>
    //               Email:{" "}
    //               <a href="mailto:info@citydesign-ks.com">
    //                 info@citydesign-ks.com
    //               </a>
    //             </p>
    //             <p>
    //               Phone: <a href="tel:+38344333222">+383 44 333 222</a>
    //             </p>
    //             <p>
    //               LinkedIn:{" "}
    //               <a href="https://www.linkedin.com/in/CityDesign">
    //                 CityDesign
    //               </a>
    //             </p>
    //             <p>
    //               Instagram:{" "}
    //               <a href="https://www.instagram.com/Citydesign.ks">
    //                 @Citydesign.ks
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     <div className={` ${isMobile ? "full-width-mobile" : "col-sm-2"}`}>
    //       <div className="righSightMain">
    //         <div className="right-side">
    //           <div className="first-section">
    //             {isMobile ? (
    //               <p className="mobile-text">
    //                 <b>Interior Designer</b>
    //               </p>
    //             ) : (
    //               <p>
    //                 <b>Interior Designer</b>
    //               </p>
    //             )}
    //             <button className="blue-button">Publish</button>
    //             <button className="red-button">Rejected</button>
    //           </div>

    //           <div className="sectionData">
    //             <div className="details">
    //               <div className="location">
    //                 <p className="location-tag">Location</p>
    //                 <p className="tag1">Prishtine</p>
    //               </div>
    //               <div className="type">
    //                 <p className="type-tag">Type</p>
    //                 <p className="tag1">Full Time</p>
    //               </div>
    //               <div className="category">
    //                 <p className="category-tag">Category</p>
    //                 <p className="tag1">Graphic Designer</p>
    //               </div>

    //               {!isMobile && (
    //                 <React.Fragment>
    //                   <div className="Kerkon">
    //                     <p className="Kerkon-tag">Kerkon</p>
    //                     <p className="tag1">3 freelancers</p>
    //                   </div>
    //                   <div className="deadline">
    //                     <p className="deadline-tag">Deadline</p>
    //                     <p className="tag1">3 days</p>
    //                   </div>
    //                   <div className="budget">
    //                     <p className="budget-tag">Budget</p>
    //                     <p className="tag1">$2,000</p>
    //                   </div>
    //                 </React.Fragment>
    //               )}
    //             </div>
    //           </div>
    //           <div className="description-section">
    //             <p>
    //               I'm on a mission to transform my room into a cozy sanctuary,
    //               and I'm reaching out to the creative minds out there for some
    //               inspiration!
    //             </p>
    //             <p>
    //               We're seeking someone with a keen eye for candid moments and a
    //               knack for turning them into timeless memories. If you're
    //               passionate about your craft and can freeze-frame the love,
    //               laughter, and all the special details, we want to hear from
    //               you!
    //             </p>
    //             <b>About My Room:</b> <br />
    //             <ul>
    //               <li>
    //                 <b>Size: [Dimensions]</b>
    //               </li>
    //               <li>
    //                 <b>
    //                   {" "}
    //                   Current Style: [Brief description, e.g., minimalist,
    //                   eclectic]
    //                 </b>
    //               </li>
    //               <li>
    //                 <b>
    //                   {" "}
    //                   Desired Vibes: [Mention the ambiance you're aiming for]
    //                 </b>
    //               </li>
    //             </ul>
    //             <p>
    //               Let's make this room transformation a collaborative
    //               masterpiece! Your ideas could be the missing piece to my dream
    //               space.
    //             </p>
    //             <b>About My Room:</b> <br />
    //             <ul>
    //               <li>
    //                 <b>Size: [Dimensions]</b>
    //               </li>
    //               <li>
    //                 <b>
    //                   {" "}
    //                   Current Style: [Brief description, e.g., minimalist,
    //                   eclectic]
    //                 </b>
    //               </li>
    //               <li>
    //                 <b>
    //                   {" "}
    //                   Desired Vibes: [Mention the ambiance you're aiming for]
    //                 </b>
    //               </li>
    //             </ul>
    //             <p>
    //               We're seeking someone with a keen eye for candid moments and a
    //               knack for turning them into timeless memories. If you're
    //               passionate about your craft and can freeze-frame the love,
    //               laughter, and all the special details, we want to hear from
    //               you!
    //             </p>
    //           </div>
    //           {isMobile && (
    //             <div className="sectionData">
    //               <div className="details">
    //                 <div className="mobileSideData">
    //                   <div className="Kerkon">
    //                     <p className="Kerkon-tag">Kerkon</p>
    //                     <p className="tag1">3 freelancers</p>
    //                   </div>
    //                   <div className="deadline">
    //                     <p className="deadline-tag">Deadline</p>
    //                     <p className="tag1">3 days</p>
    //                   </div>
    //                   <div className="budget">
    //                     <p className="budget-tag">Budget</p>
    //                     <p className="tag1">$2,000</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="footer-Button">
    //                 <button className="blue-button">Publish</button>
    //                 <button className="red-button">Rejected</button>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="post-controll">
      <div className="post-controll-side">
        <div className="pc-left">
          <div className="pc-left-container">
            <div className="pc-left-container-header">
              <MdOutlineArrowBackIosNew size={30} color='#455bef' />
              <h5>Go back</h5>
            </div>
            <div className="horiz-barrier"></div>
            <div className="pc-left-container-profile">
              <div className="pc-cp-left">
                <img src={User} alt="User profile picture" height={60} className='dccp-image' />
                <div className="pc-cp-data">
                  <p className='pc-cp-data-p'>Posted by:</p>
                  <h6 className='pc-cp-data-h6'>Malena Buchholz</h6>
                </div>
              </div>
              <div className="pc-cp-data-time">
                <p className='pc-cp-data-p'>12/04/2024</p>
                <p className='pc-cp-data-p'>04:32pm</p>
              </div>
            </div>
            <div className="horiz-barrier"></div>
            <div className="pc-left-email">
              <p className='pc-cp-data-p'>Email</p>
              <h5>+383 45 296 605</h5>
            </div>
            <div className="horiz-barrier"></div>
            <div className="pc-left-linkedin">
              <p className='pc-cp-data-p'>LinkedIn</p>
              <h5>MalenaBuccholz</h5>
            </div>
            <div className="horiz-barrier"></div>
            <div className="pc-left-instagram">
              <p className='pc-cp-data-p'>LinkedIn</p>
              <h5>MalenaBuccholz</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="post-controll-main">
        <div className="post-controll-main-head">
          <p className="post-controll-title">Interior Designer</p>
          <div className="post-controll-options">
            <button className="pc-accept">Accept</button>
            <button className="pc-reject">Reject</button>
          </div>
        </div>
        <div className="post-controll-main-details">
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Location</div>
            <div className="pcmd-item-value">Prishtina</div>
          </div>
          {!isMobile && (
            <div className="vert-barrier"></div>
          )}
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Kerkon</div>
            <div className="pcmd-item-value">3 freelancer</div>
          </div>
          {!isMobile && (
            <div className="vert-barrier"></div>
          )}
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Type</div>
            <div className="pcmd-item-value">Design</div>
          </div>
          {!isMobile && (
            <div className="vert-barrier"></div>
          )}
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Category</div>
            <div className="pcmd-item-value">Remote</div>
          </div>
          {!isMobile && (
            <div className="vert-barrier"></div>
          )}
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Afati</div>
            <div className="pcmd-item-value">3 javë</div>
          </div>
          {!isMobile && (
            <div className="vert-barrier"></div>
          )}
          <div className="pcmd-item">
            <div className="pcmd-item-tag">Bugjeti</div>
            <div className="pcmd-item-value">2.400$</div>
          </div>

        </div>
        <div className="post-controll-main-description">
          <p>I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to the creative minds out there for some inspiration!
            <br /><br />
            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you!
            <br /><br />
            About My Room:<br />
            Size: [Dimensions]
            Current Style: [Brief description, e.g., minimalist, eclectic]
            Desired Vibes: [Mention the ambiance you're aiming for]
            <br /><br />
            Let's make this room transformation a collaborative masterpiece! Your ideas could be the missing piece to my dream space.
            <br /><br />
            About My Room:
            Size: [Dimensions]
            Current Style: [Brief description, e.g., minimalist, eclectic]
            Desired Vibes: [Mention the ambiance you're aiming for]
            <br /><br />
            We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate about your craft and can freeze-frame the love, laughter, and all the special details, we want to hear from you!</p>
        </div>
      </div>
      {isMobile && (
        <div className="post-controll-options-mobile">
          <button className="pc-accept">Accept</button>
          <button className="pc-reject">Reject</button>
        </div>
      )}
    </div>
  );
};

export default PostControll;
