import React from "react";

import FloatingWhatsApp from 'react-floating-whatsapp'
import avatar from '../assests/avatar.jpeg'

import car from '../assests/rentcar/car (1).jpeg'
import van from '../assests/rentcar/van.jpeg'


const CarRent = () => {


    

  return (
    <div>




      
     



        <section class="blog-area ptb-100">
            <div class="container">
            <div class="section-title">
                    <span class="sub-title">Ayubowan!</span>
                    <h2>Make Your Ride Easy!</h2>
                    <p>You can reserve our vehecles.</p>
                </div>
                <div class="row">
                    
                    

                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post mb-30">
                            <div class="post-image">
                                <a class="d-block">
                                    <img src={car} alt="car"/>
                                </a>

                                <div class="tag">
                                    <a>CIVIC</a>
                                </div>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    
                                    <li><a>CBG - 5695</a></li>
                                </ul>
                                <h3><a href="//wa.me/+94711308121" class="d-inline-block">Most Popular Education Posts Of The Week 20-26 Aug</a></h3>
                                <a href="//wa.me/+94711308121" class="read-more-btn">Contact Us<i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post mb-30">
                            <div class="post-image">
                                <a class="d-block">
                                    <img src={van} alt="image"/>
                                </a>

                                <div class="tag">
                                    <a>HIACE</a>
                                </div>
                            </div>

                            <div class="post-content">
                                <ul class="post-meta">
                                    
                                    <li><a>PD - 0437</a></li>
                                </ul>
                                <h3><a href="//wa.me/+94711308121" class="d-inline-block">Most Popular Education Posts Of The Week 20-26 Aug</a></h3>
                                <a href="//wa.me/+94711308121" class="read-more-btn">Contact Us<i class='bx bx-right-arrow-alt'></i></a>
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

                

                    
                </div>
            </div>
        </section>





       


        




    </div>
  );
};

export default CarRent;