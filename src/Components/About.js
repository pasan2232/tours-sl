import React, { Component } from 'react';

import abou1 from '../assests/The_Common_Wanderer_sri_lanka_photos-38.jpg'
import about2 from '../assests/tourism (1).jpg'

class About extends Component {
    render() {
        return (
            <div>
            <section class="about-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-image">
                            <img src={abou1} class="shadow" alt="image"/>
                            <img src={about2} class="shadow" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="about-content">
                            <span class="sub-title">About Us</span>
                            <h2>Learn New Skills to go ahead for Your Career</h2>
                            <h6>We can support student forum 24/7 for national and international students.</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>

                            <div class="features-text">
                                <h5><i class='bx bx-planet'></i>A place where you can achieve</h5>
                                <p>Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency.</p>
                            </div>

                            <a href="courses-2-columns-style-1.html" class="default-btn"><i class='bx bx-move-horizontal icon-arrow before'></i><span class="label">View Courses</span><i class="bx bx-move-horizontal icon-arrow after"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="particles-js-circle-bubble-4"></div>
        </section>

        
  <section class="contact-info-area pt-100 pb-70">
  
  <div class="container">
  
      <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="contact-info-box mb-30">
                  <div class="icon">
                  
                  </div>

                  <h3>Email Here</h3>
                  <p><a href="mailto:info@lyceum.ac.lk">info@lyceum.ac.lk</a></p><br/>
                  
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="contact-info-box mb-30">
                  <div class="icon">
                      
                  </div>

                  <h3>Location Here</h3>
                  <p><a href="#" target="_blank">3/1,Raymond Road,Nugegoda,<br/>Sri Lanka</a></p>
              </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div class="contact-info-box mb-30">
                  <div class="icon">
                
                  </div>

                  <h3>Call Here</h3>
                  <p><a href="tel:+94 775214785">+94 775214785</a></p>
                  <p><a href="tel:+94 113698752">+94 113698752</a></p>
              </div>
          </div>
      </div>
  </div>

  <div id="particles-js-circle-bubble-2"></div>
</section>

        </div>
        
        );
    }
}

export default About;