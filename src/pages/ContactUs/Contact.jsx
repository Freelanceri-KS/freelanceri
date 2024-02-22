import React from 'react';
import './Contact.scss'; // Make sure to create a corresponding CSS file
import Images from './cropped-shot-pretty-black-woman.png';
const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="header">
        {/* Logo and navigation would go here */}
      </div>
      
   
     <div className="text-contact">
            <h2><b>
              Contact Us
              </b>
            </h2>
            <h5>
            If you're an employer (Business or Individual) and you have questions  <br /> or recruiting needs, fill this form and we will contact you shortly.
            </h5>
      </div>
      <div className="form-container">
      <img src={Images} alt="Cropped shot" />

        <form>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
          <input type="text" id="businessName" name="businessName" placeholder="Business Name" />
          <input type="email" id="email" name="email" placeholder="Email" />   

          <form className='form-second'>
                <input type="text" id="businessIndustry" name="businessIndustry" placeholder="Business Industry" />
                <input type="description" id="description" name="description" placeholder="Description"/> 
          </form>   
        
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer">
          <p>@2023 Freelanceri. All Rights Reserved</p>
          <div className="footer-liks">
                <ul>
                    <li><a href="#">about</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>

                    <div className="footer-links__second">
                      <ul>
                      <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                      </ul>
                    </div>
            
          </div>
      </div>
    </div>
  );
};

export default ContactForm;