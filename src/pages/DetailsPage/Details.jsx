import React from 'react';
import './Details.scss';
import Malena from './malenab.png'
import Blackfriday from './Blackfiday.png'
import Vector from './Vector.png'
import Maskgroup from './Maskgroup.png'
import Clock from './clock.png'
import Savebutoni from './saveDetails.png'
import Bodyicon from './body.png'
import Person from './unsplash_Z9lbmEjyYjU.png'
// function Sidebar() {
//   // Sidebar component content
//   return <div className="sidebar">

//   </div>;
// }

// function MainContent() {
//   // Main content component content
//   return (

//     <div className="main-content">
//       <div className="job-listing-interior">
//         <div className="interior-text" style={{ fontSize: '43px' }}>

//           Interior Designer

//          </div>
//         <img className='savebuttoni' src={DetailsPage} alt="Save Details" />

//         <div className="section-location">
//           <p className='location-details'>
//             Location
//           </p>
//           <p className='location-details__prishtine'>
//             Prishtinë
//           </p>
//         </div>
//         <div className="section-type">
//           <p className='type-details'>
//             Type
//           </p>

//           <p className='oneproject-details'>
//             One-project
//           </p>
//         </div>
//         <div className="section-category">
//           <p className='category-details'>
//             Category
//           </p>

//           <p className='interior-details'>
//             Interior Deisgner
//           </p>
//         </div>

//         <div className="section-timeapply">
//           <img src={Detailsimg} alt="body icon" />
//           <p className='text-applied'>
//             13 applied
//           </p>

//           <img className='clock-days' src={Clock} alt="clock" />

//           <p className='clock-days__time'>
//             2 Days Left
//           </p>

//         </div>


//         <div className="vertical-rectangle"></div>
//         <div className="vertical-rectangle__second"></div>

//         <div className="job-explain">
//           <p className='job-explain__text'>
//             I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to <br /> the creative minds out there for some inspiration!
//             <br /><br />
//             We're seeking someone with a keen eye for candid moments and a knack for turning <br /> them into timeless memories. If you're passionate about your craft and can freeze- <br /> frame the love, laughter, and all the special details, we want to hear from you!
//           </p>
//           <p className='job-explain__aboutroom' >
//             <b>
//               About My Room:
//             </b> </p>
//           <br />
//           <div className="aboutroomparagrafi">
//             <p style={{ fontSize: '18px' }}>&#8226;

//               <b>
//                 Size: [Dimensions]

//               </b>
//             </p>


//             <p style={{ fontSize: '18px' }}>&#8226;
//               <b>  Current Style: [Brief description, e.g., minimalist, eclectic]</b>

//             </p>
//             <p style={{ fontSize: '18px' }}>&#8226;

//               <b>  Desired Vibes: [Mention the ambiance you're aiming for]  </b>

//             </p>
//           </div>
//           <div className="job-card">
//             <div className="job-detail" style={{ textAlign: 'center' }}>
//               kerkoj <br />
//               1 freelancer</div>
//             <div className="job-detail" style={{ textAlign: 'center' }}>
//               afati  <br />
//               1 javë</div>
//             <div className="job-detail" style={{ textAlign: 'center' }}>Budgeti
//               <br />
//               $2.5k</div>
//             <button className="apply-buttoni">Apply</button>
//           </div>


//         </div>
//       </div>


//       <div className="maskgroup-img">
//         <img className='maskgroup-img__image' src={Maskgroup} alt="MaskGroup" />
//       </div>


//       <div className="contact-card">
//         <div className="sideJob">
//           <a href="#" className='Back'><img src={Vector} alt="" /> go back</a>
//           {/* <button className="back">Go Back</button> */}
//           <div className="profile-info">
//             <img src={Malena} alt="malena" className="profilepic" />
//             <p>Malena Buchholz</p>
//             <span className="post-date">12/11/2023 <br />
//               04:32 PM</span>
//           </div>
//         </div>
//         <div className="contact-info">
//           <p>Email: <a href="#"><p>Malena.b@gmail.com</p></a></p>
//           <p>Phone: <a href="#"><p>+383 44 333 222</p></a></p>
//           <p>LinkedIn: <a href="#"> <p>MalenaBuchholz</p></a></p>
//           <p>Instagram: <a href="#"><p>@MalenaB</p></a></p>
//         </div>
//       </div>


//       <p className='Relatet-p'>Related</p>
//       <div className="job-listing-card">
//         <div className="job-header">
//           <img className='job-header__person' src={Person} alt="Person" />

//           <p className="posted-by">
//             Weeding Photography <br />By: Malena Buchholz</p>
//           <div className="job-details">
//             <p className="location-second">Location <br /> Pristine</p>
//             <p className="type-second">Type <br /> One-Project</p>
//             <p className="category-second">Category <br />Photography</p>
//             <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
//             {/* <button className="details-button">Details</button> */}
//           </div>
//         </div>

//         <p className="job-description">
//           Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
//           <br /><br />
//           We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
//         </p>

//         <div className="job-footer">
//           <span className="freelancer-count">1 freelancer</span>
//           <span className="duration">1 jave</span>
//           <span className="budget">$2.5k</span>
//           <button className="apply-buttoni">Apply</button>
//         </div>
//       </div>

//       <img className='blackfriday-image' src={BlackFriday} alt=" img blackfriday" />



//       <div className="job-listing-cardsecond">
//         <div className="job-header">
//           <img className='job-header__person' src={Person} alt="Person" />

//           <p className="posted-by">
//             Weeding Photography <br />By: Malena Buchholz</p>
//           <div className="job-details">
//             <p className="location-second">Location <br /> Pristine</p>
//             <p className="type-second">Type <br /> One-Project</p>
//             <p className="category-second">Category <br />Photography</p>
//             <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
//             {/* <button className="details-button">Details</button> */}
//           </div>
//         </div>

//         <p className="job-description">
//           Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
//           <br /><br />
//           We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
//         </p>

//         <div className="job-footer">
//           <span className="freelancer-count">1 freelancer</span>
//           <span className="duration">1 jave</span>
//           <span className="budget">$2.5k</span>
//           <button className="apply-buttoni">Apply</button>
//         </div>
//       </div>


//       <div className="job-listing-cardthird">
//         <div className="job-header">
//           <img className='job-header__person' src={Person} alt="Person" style={{ marginRight: '6%' }} />

//           <p className="posted-by">
//             Weeding Photograph  <br />By: Malena Buchholz</p>
//           <div className="job-details">
//             <p className="location-second">Location <br /> Pristine</p>
//             <p className="type-second">Type <br /> One-Project</p>
//             <p className="category-second">Category <br />Photography</p>
//             <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
//             {/* <button className="details-button">Details</button> */}
//           </div>
//         </div>

//         <p className="job-descriptionsec">
//           Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
//           <br /><br />
//           We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
//         </p>

//         <div className="job-footer">
//           <span className="freelancer-count">1 freelancer</span>
//           <span className="duration">1 jave</span>
//           <span className="budget">$2.5k</span>
//           <button className="apply-buttoni">Apply</button>
//         </div>
//       </div>


//     </div>



//   );
// }

function detailspage() {
  // Detailspage component content
  return (
    <div className="detailspage">
      {/* <Sidebar />
      <MainContent  /> */}
      <DetailsPage />
    </div>
  );
}




const DetailsPage = ()=>{
  return(
    <div className="test">
      <div className="left">
      <div className="sideJob">
              <a href="#" className='Back'><img src={Vector} alt="" /> go back</a>
              {/* <button className="back">Go Back</button> */}
              <div className="profile-info">
                <img src={Malena} alt="malena" className="profilepic" />
                <p>Malena Buchholz</p>
                <span className="post-date">12/11/2023 <br />
                  04:32 PM</span>
              </div>
        </div>
        <div className="contact-info">
           <p>Email: <a href="#"><p>Malena.b@gmail.com</p></a></p>
           <p>Phone: <a href="#"><p>+383 44 333 222</p></a></p>
           <p>LinkedIn: <a href="#"> <p>MalenaBuchholz</p></a></p>
        <p>Instagram: <a href="#"><p>@MalenaB</p></a></p>
         </div>
      </div>
      <div className="center">
<div className="section-first">
      
    <div className="section-heder">
                  <div className="section-heder__text">
                    <p>
                      Interior Designer
                    </p>
                  </div>
                  <div className="section-heder__save">
                    <img src={Savebutoni} alt="save" />
                  </div>
                </div>
              <div className="section-underheder">
                <div className="section-underheder__location">
                  <p>Location</p>
                  <p className='Blutext'>Prishtine</p>
                </div>
                <div className="section-underheder__type">
                  <p>Type</p>
                  <p className='Blutext'>One-Project</p>
                </div>
                <div className="section-underheder__category">
                  <p>Category</p>
                  <p className='Blutext'>Interior Designer</p>
                </div>
              </div>

          <div className="hederapplied">
              <div className="bodyapplied">
                <img src={Bodyicon} alt="body" />
                <p> 13 Applied</p>
              </div>
              <div className="timeapply">
                <img src={Clock} alt="clock" />
                <p>2 Days Left</p>
              </div>
          </div>

          <div className="sectiontext">
                          <p>
                          I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to <br />the creative minds out there for some inspiration!
                          <br />
                          <br />

                        We're seeking someone with a keen eye for candid moments and a knack for turning <br /> them into timeless memories. If you're passionate about your craft and can freeze- <br /> frame the love, laughter, and all the special details, we want to hear from you!
                          </p>
                          <br />
                          <p className='section-aboutroom'> About My Room</p>
                      <div className="section-text__info">
                              <p>&#8226;
                              Size: [Dimensions]
                              </p>
                              <p>&#8226;
                              Current Style: [Brief description, e.g., minimalist, eclectic]
                              </p>
                              <p>&#8226;
                                Desired Vibes: [Mention the ambiance you're aiming for]
                              </p>
                        </div>
                                  <br />
                                
                          <p>
                          Let's make this room transformation a collaborative masterpiece! Your ideas could be <br />
                          the missing piece to my dream space.
                          </p>
          </div>

          <div className="section-footer">
            <div className="kerkoj">
              <p>
                Kerkoj
              </p>
              <p>
                1 Freelancer
              </p>
            </div>
            <div className="time">
              <p>
                Afati
              </p>
              <p>
                1 Jave
              </p>
            </div>
            <div className="buxheti">
              <p>
                Buxheti
              </p>
              <p>
                $2.5k
              </p>
            </div>
        <div className="touch">
          <button>
            Apply
          </button>
        </div>

       </div>
</div>

<p className='Relatet'>Related</p>

  <div className="section-second">

  
      <div className="section-second__header">
    <div className="person-img">
        <img src={Person} alt="person" />
    </div>
      <div className="persontext">
           <p>Weeding Photography</p>
           <p>By: Malena Buchholz</p>
      </div>
      <div className="section-underheder">
                <div className="section-underheder__location">
                  <p>Location</p>
                  <p className='Blutext'>Prishtine</p>
                </div>
                <div className="section-underheder__type">
                  <p>Type</p>
                  <p className='Blutext'>One-Project</p>
                </div>
                <div className="section-underheder__category">
                  <p>Category</p>
                  <p className='Blutext'>Interior Designer</p>
                </div>
       </div>
    <div className="imgsave">
        <img src={Savebutoni} alt="save" />
    </div>
     </div>
    
      <div className="section-second__text">
        <p>
        Hey talented photographers! My fiancé and I are on the lookout for an amazing <br /> photographer to capture the magic of our wedding day!
        <br />
        <br />
              We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ..... Show more
        </p>

      </div>

      <div className="section-footer">
            <div className="kerkoj">
              <p>
                Kerkoj
              </p>
              <p>
                1 Freelancer
              </p>
            </div>
            <div className="time">
              <p>
                Afati
              </p>
              <p>
                1 Jave
              </p>
            </div>
            <div className="buxheti">
              <p>
                Buxheti
              </p>
              <p>
                $2.5k
              </p>
            </div>
        <div className="touch">
          <button>
            Apply
          </button>
        </div>

     </div>
  </div>

    <div className="image-black">
      <img src={Blackfriday} alt="blackfriday" />
    </div>
          
          <div className="section-third">
            
      <div className="section-second__header">
    <div className="person-img">
        <img src={Person} alt="person" />
    </div>
      <div className="persontext">
           <p>Weeding Photography</p>
           <p>By: Malena Buchholz</p>
      </div>
      <div className="section-underheder">
                <div className="section-underheder__location">
                  <p>Location</p>
                  <p className='Blutext'>Prishtine</p>
                </div>
                <div className="section-underheder__type">
                  <p>Type</p>
                  <p className='Blutext'>One-Project</p>
                </div>
                <div className="section-underheder__category">
                  <p>Category</p>
                  <p className='Blutext'>Interior Designer</p>
                </div>
       </div>
    <div className="imgsave">
        <img src={Savebutoni} alt="save" />
    </div>
     </div>
    
      <div className="section-second__text">
        <p>
        Hey talented photographers! My fiancé and I are on the lookout for an amazing <br /> photographer to capture the magic of our wedding day!
        <br />
        <br />
              We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ..... Show more
        </p>

      </div>

      <div className="section-footer">
            <div className="kerkoj">
              <p>
                Kerkoj
              </p>
              <p>
                1 Freelancer
              </p>
            </div>
            <div className="time">
              <p>
                Afati
              </p>
              <p>
                1 Jave
              </p>
            </div>
            <div className="buxheti">
              <p>
                Buxheti
              </p>
              <p>
                $2.5k
              </p>
            </div>
        <div className="touch">
          <button>
            Apply
          </button>
        </div>

     </div>
          </div>

<div className="section-fourth">
                  
      <div className="section-second__header">
    <div className="person-img">
        <img src={Person} alt="person" />
    </div>
      <div className="persontext">
           <p>Weeding Photography</p>
           <p>By: Malena Buchholz</p>
      </div>
      <div className="section-underheder">
                <div className="section-underheder__location">
                  <p>Location</p>
                  <p className='Blutext'>Prishtine</p>
                </div>
                <div className="section-underheder__type">
                  <p>Type</p>
                  <p className='Blutext'>One-Project</p>
                </div>
                <div className="section-underheder__category">
                  <p>Category</p>
                  <p className='Blutext'>Interior Designer</p>
                </div>
       </div>
    <div className="imgsave">
        <img src={Savebutoni} alt="save" />
    </div>
     </div>
    
      <div className="section-second__text">
        <p>
        Hey talented photographers! My fiancé and I are on the lookout for an amazing <br /> photographer to capture the magic of our wedding day!
        <br />
        <br />
              We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ..... Show more
        </p>

      </div>

      <div className="section-footer">
            <div className="kerkoj">
              <p>
                Kerkoj
              </p>
              <p>
                1 Freelancer
              </p>
            </div>
            <div className="time">
              <p>
                Afati
              </p>
              <p>
                1 Jave
              </p>
            </div>
            <div className="buxheti">
              <p>
                Buxheti
              </p>
              <p>
                $2.5k
              </p>
            </div>
        <div className="touch">
          <button>
            Apply
          </button>
        </div>

     </div>
</div>
      </div>
        <div className="right">
          <img className='Right-groupmask' src={Maskgroup} alt="maskgroup" />
        </div>
    </div>
  );
}

export default detailspage;