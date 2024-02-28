import React from 'react';
import './Details.scss';
import DetailsPage from './saveDetails.png'
import Detailsimg from './Detailsimg/body.png'
import Clock from './clock.png'
import Maskgroup from './Detailsimg/Mask group.png'
import Person from './unsplash_Z9lbmEjyYjU.png'
import BlackFriday from './Blackfiday.png'
import Vector from './Vector.png'
import Malena from './malenab.png'
function Sidebar() {
  // Sidebar component content
  return <div className="sidebar">
    
  </div>;
}

function MainContent() {
  // Main content component content
  return (
    <div className="main-content">
          <div className="interior-text" style={{fontSize:'43px'}}>
              
               Interior Designer
                  
          {/* className='interior-text' */}
          </div>
                  <img className='savebuttoni' src={DetailsPage} alt="Save Details" />

 <div className="section-location">
       <p className='location-details'>
       Location
       </p>
        <p className='location-details__prishtine'>
          Prishtinë
        </p>
 </div>
    <div className="section-type">
          <p className='type-details'>
              Type
            </p> 

            <p className='oneproject-details'>
                One-project
              </p>     
    </div>
      <div className="section-category">
                <p className='category-details'>
                  Category
                </p>
                
                <p className='interior-details'>
                Interior Deisgner
                </p>
      </div>

      <div className="section-timeapply">
      <img src={Detailsimg} alt="body icon" />
          <p className='text-applied'>
              13 applied
          </p>  

          <img className='clock-days' src={Clock} alt="clock" />

          <p className='clock-days__time'>
            2 Days Left
          </p>
      
      </div>


  <div className="vertical-rectangle"></div>
  <div className="vertical-rectangle__second"></div>

        <div className="job-explain">
                <p className='job-explain__text'>
                        I'm on a mission to transform my room into a cozy sanctuary, and I'm reaching out to <br /> the creative minds out there for some inspiration!
                              <br /><br />
                      We're seeking someone with a keen eye for candid moments and a knack for turning <br /> them into timeless memories. If you're passionate about your craft and can freeze- <br /> frame the love, laughter, and all the special details, we want to hear from you!
                </p>
            <p className='job-explain__aboutroom' >  
      <b>  
                 About My Room:
        </b> 
        <br />

                      <span style={{fontSize: '18px'}}>&#8226;
                      
                       <b>
                       Size: [Dimensions]

                        </b>  
                      </span> <br />
                      
                      <span style={{fontSize: '18px'}}>&#8226;
                      
                    <b>  Current Style: [Brief description, e.g., minimalist, eclectic]</b>
                      </span> <br />
                      
                      <span style={{fontSize: '18px'}}>&#8226;
                      
                    <b>  Desired Vibes: [Mention the ambiance you're aiming for]  </b>
                      </span>
            </p>
         
                    <div className="job-card">
                          <div className="job-detail" style={{textAlign: 'center'}}>
                            kerkoj <br />
                            1 freelancer</div>
                          <div className="job-detail" style={{textAlign: 'center'}}> 
                          afati  <br />
                          1 javë</div>
                          <div className="job-detail"  style={{textAlign: 'center'}}>Budgeti
                            <br />
                           $2.5k</div>
                          <button className="apply-buttoni">Apply</button>
                    </div>

      
        </div>
     
            <div className="maskgroup-img">
                 <img className='maskgroup-img__image' src={Maskgroup} alt="MaskGroup" />
            </div>

        
    <div className="contact-card">
      <div className="sideJob">
        <a href="#" className='Back'><img src={Vector} alt="" /> go back</a>
        {/* <button className="back">Go Back</button> */}
        <div className="profile-info">
          <img src={Malena} alt="malena" className="profilepic"/>
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


             <p className='Relatet-p'>Related</p>
    <div className="job-listing-card">
      <div className="job-header">
        <img className='job-header__person' src={Person} alt="Person" />
   
        <p className="posted-by">
        Weeding Photography <br />By: Malena Buchholz</p>
        <div className="job-details">
          <p className="location-second">Location <br /> Pristine</p>
          <p className="type-second">Type <br /> One-Project</p>
          <p className="category-second">Category <br />Photography</p>
          <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
          {/* <button className="details-button">Details</button> */}
        </div>
      </div>
           
        <p className="job-description">
          Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
          <br /><br />
          We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
        </p>
     
      <div className="job-footer">
        <span className="freelancer-count">1 freelancer</span>
        <span className="duration">1 jave</span>
        <span className="budget">$2.5k</span>
        <button className="apply-buttoni">Apply</button>
      </div>
    </div>

      <img className='blackfriday-image' src={BlackFriday} alt=" img blackfriday" />



      <div className="job-listing-cardsecond">
      <div className="job-header">
        <img className='job-header__person' src={Person} alt="Person" />
   
        <p className="posted-by">
        Weeding Photography <br />By: Malena Buchholz</p>
        <div className="job-details">
          <p className="location-second">Location <br /> Pristine</p>
          <p className="type-second">Type <br /> One-Project</p>
          <p className="category-second">Category <br />Photography</p>
          <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
          {/* <button className="details-button">Details</button> */}
        </div>
      </div>
  
        <p className="job-description">
          Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
          <br /><br />
          We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
        </p>
     
      <div className="job-footer">
        <span className="freelancer-count">1 freelancer</span>
        <span className="duration">1 jave</span>
        <span className="budget">$2.5k</span>
        <button className="apply-buttoni">Apply</button>
      </div>
    </div>


    <div className="job-listing-cardsecond">
      <div className="job-header">
        <img className='job-header__person' src={Person} alt="Person" />
   
        <p className="posted-by">
        Weeding Photography <br />By: Malena Buchholz</p>
        <div className="job-details">
          <p className="location-second">Location <br /> Pristine</p>
          <p className="type-second">Type <br /> One-Project</p>
          <p className="category-second">Category <br />Photography</p>
          <img className='savebutoni-details' src={DetailsPage} alt="save butoni" />
          {/* <button className="details-button">Details</button> */}
        </div>
      </div>
  
        <p className="job-description">
          Hey talented photographers! My fiancé and I are on the lookout for an amazing photographer to capture <br /> the magic of our wedding day!
          <br /><br />
          We're seeking someone with a keen eye for candid moments and a knack for turning them into timeless memories. If you're passionate ... <a href="#">Show more</a>
        </p>
     
      <div className="job-footer">
        <span className="freelancer-count">1 freelancer</span>
        <span className="duration">1 jave</span>
        <span className="budget">$2.5k</span>
        <button className="apply-buttoni">Apply</button>
      </div>
    </div>
          

    </div>
    

    
  );
}

function detailspage() {
  // Detailspage component content
  return (
    <div className="detailspage">
      <Sidebar />
      <MainContent />
      <p>
       
      </p>
    </div>
  );
}

export default detailspage;