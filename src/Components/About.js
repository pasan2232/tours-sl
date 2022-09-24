import React from 'react';

import abou1 from '../assests/The_Common_Wanderer_sri_lanka_photos-38.jpg'
import about2 from '../assests/tourism (1).jpg'

import FloatingWhatsApp from 'react-floating-whatsapp'
import avatar from '../assests/avatar.jpeg'
import { Link } from 'react-router-dom';

import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function About(props) {
    return (
        <div>

        <section class="about-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img src={abou1} class="shadow" alt="image"/>
                    
                    </div>
                </div>
        

                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">About Us</span>
                        <h2>Sadew Tours</h2>
                        <p>Travel is the main thing you purchase that makes you more extravagant”.
                             We, at SADEW TOURS, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.</p>
                        <p>We have been moving excellent encounters for a considerable length of time through our cutting edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.
Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far off terrains. We need you to observe sensational scenes that are a long way past your creative ability.
The powerful inclination of American voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry.</p>

                        <p>To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. On your universal occasion, 
                            we guarantee that you are very much outfitted with outside trade, visa, and travel protection.</p>

                        <Link to="/destinations" class="default-btn"><i class='bx bx-move-horizontal icon-arrow before'></i><span class="label">Explore Sri Lanka</span>
                        <i class="bx bx-move-horizontal icon-arrow after"></i></Link>
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
              <AiOutlineMail/>
              </div>

              <h3>Email Here</h3>
              <p><a href="mailto:dilshan.kumara34@gmail.com">dilshan.kumara34@gmail.com</a></p><br/>
              
          </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="contact-info-box mb-30">
              <div class="icon">
                  <GoLocation/>
              </div>

              <h3>Location Here</h3>
              <p><a  target="_blank">No 901/3, Galle Road, Katukurunda,<br/>Kaluthara, Sri Lanka</a></p>
          </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
          <div class="contact-info-box mb-30">
              <div class="icon">
              <AiOutlinePhone/>
              </div>

              <h3>Call Here</h3>
              <p><a href="tel:+94777909154">0777909154</a></p>
              <p><a href="tel:+94711308121">0711308121</a></p>
          </div>
      </div>
  </div>
</div>

<FloatingWhatsApp
                            phoneNumber="+94711308121"
                                    accountName="Sadew Sanjula Anuhas"
                                    allowClickAway
                                    notification
                                    
                                    notificationSound
                                    avatar={avatar}
                                    statusMessage=""
                                    chatMessage="Hi, How can i help you?"/>
</section>

    </div>
    );
}

export default About;