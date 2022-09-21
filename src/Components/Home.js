import React, { Component } from 'react';

import cover from '../assests/yala-natinal-park-sri-lanka-scaled.jpg';
import cover2 from '../assests/ella-4-sri-lanka (1).jpg'

class Home extends Component {

 
        
    render() {
        return (
            <div>


            


                        <section class="about-area pt-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-content left-content">
                            
                            <h1>Sri Lanka</h1> 

                            <h4>The Pearl of the Indian Ocean</h4><br/>
                            <p>Despite being a relatively small island, Sri Lanka is endowed with a diverse collection of landscapes, 
                                climates and natural features. Sri Lanka’s infamous beaches have been enticing visitors for many years. However, the rest of 
                                the island harbours many more idyllic vistas.

The central highlands are carpeted with emerald tea plantations interspersed with occasional waterfalls. 
Cool climates, misty views, and quaint estate bungalows are a throwback to bygone eras.

The cultural triangle in the centre of the island holds a certain magic, with ruins from several ancient kingdoms, majestic 
tanks, hidden rock caves, and ancient sacred temples, revealing the fascinating and almost unbelievable ancient architecture, art, and engineering.

The North of Sri Lanka is a vibrant concoction of essences, with a unique flavour and culture. Despite still bearing the scars 
from the civil war, the north truly bears testament to the diversity and variation that comprises the island. Influences include Portuguese, 
Dutch, Tamil, Muslim, and British characters. Chains of islands are scattered off the shoreline, with their own unique habitats, waiting to be explored.

The east of the island is home to lush paddy fields, spectacular sunrises, and a quieter more rural pace of life. Colourful places of worship, 
national parks, ports and harbours, and pristine clear waters offer a mellow experience to any weary traveller.</p>
                            
                            
                        </div>

                        
                        
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="about-right-image">
                            <img src={cover} alt="image"/>
                            <img src={cover2} alt="image"/>

                            {/* <div class="text-box">
                                <div class="inner">
                                    Trusted By
                                    <span>75K+</span>
                                </div>
                            </div> */}

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="services-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Education for everyone</span>
                    <h2>Why Choose Tours for Sri Lanka</h2>
                    <p>You will also choose us for the following reasons.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-analytics"></i>
                            </div>
                            <h3>Qualified Drivers and Staff</h3>
                            <p>Our large fleet of vehicles includes luxury and mini coaches, vans, cars and even limousines that operate 24 hours. Our drivers are friendly and well trained. Furthermore our expert local tour guides have extensive knowledge on an array of destinations and will share with you inside knowledge and firsthand experience on every location making your tour an ultimate one.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-anywhere"></i>
                            </div>
                            <h3>24/7 Support</h3>
                            <p>Our customer service isn’t time bound. Travel agents at Tours for Sri lanka are always ready to serve you at anytime. Reach us at anytime of the day and you’re sure to be guided by our friendly travel consultants with effective solutions to your travel problems.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-graduated"></i>
                            </div>
                            <h3>Instant Response</h3>
                            <p>At Tours for Sri lanka we value time as much as you do. We dislike disappointing you with delays and forgotten inquiries which is why we strive to offer a service with instant response to your needs. From day one till your travel is complete and your feedback is heard we are in touch with you making sure everything you wanted your trip to be is just in their right places.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-self-improvement"></i>
                            </div>
                            <h3>Value for Money</h3>
                            <p>We don’t believe in a job half done. It’s not in our policies. We dig into the very last detail to make sure that our service is perfect. Travelling with Tours for Sri lanka will create an experience which you will treasure, a service with unmatched quality and a journey worth your money.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-padlock"></i>
                            </div>
                            <h3>Languages and culture</h3>
                            <p>At Tours for Sri lanka Communicating is made simple since personalized service to our clients are offered by multilingual customer service agents with language proficiency in English, Japanese, Chinese, German, Russian, Arabic, French and Spanish. This ensures that with no doubt what is asked for is delivered.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="services-box">
                            <div class="icon">
                                <i class="flaticon-launch"></i>
                            </div>
                            <h3>Flexibility</h3>
                            <p>Our success story lies in offering our clients an itinerary that they find satisfaction in. This makes us open to be flexible and independent to listen to our customers requirements and plan accordingly. We see as to how we can use our expertise to tailor make something that you entrust that we can do.</p>
                             </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="services-btn">
                            <a href="register.html" class="default-btn"><i class='bx bx-user-circle icon-arrow before'></i><span class="label">Get Started Today</span><i class="bx bx-user-circle icon-arrow after"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="divider bg-e4feff"></div>
        </section>


            </div>
        );
    }
}

export default Home;