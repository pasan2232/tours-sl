import React from 'react';

import FloatingWhatsApp from 'react-floating-whatsapp'
import avatar from '../assests/avatar.jpeg'

import cover from '../assests/yala-natinal-park-sri-lanka-scaled.jpg';
import cover1 from '../assests/hummanaya-sri-lanka (1).jpg';
import cover2 from '../assests/Kima_Surf_Home_Seminyak_Surf_Camp_2 (1).jpg'
import sigi from '../assests/destinations/Sigi (1).jpg'

import h1 from '../assests/home/1.jpeg'
import h2 from '../assests/home/2.jpeg'
import h3 from '../assests/home/3.jpeg'
import h4 from '../assests/home/4.jpeg'
import h5 from '../assests/home/5.jpeg'
import h6 from '../assests/home/6.jpeg'
import h7 from '../assests/home/7.jpeg'
import h8 from '../assests/home/8.jpeg'

import yala from '../assests/home/yala.jpeg'
import tang from '../assests/home/tang.jpeg'

import { Link } from "react-router-dom";

import { AiFillCar } from 'react-icons/ai';
import { IoIosCloudyNight } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';

import { GiReceiveMoney } from 'react-icons/gi';
import { TbMessageLanguage } from 'react-icons/tb';
import { IoShuffle } from 'react-icons/io5';




function Home() {

    


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
                    national parks, ports and harbours, and pristine clear waters offer a mellow experience to any weary traveller.
            </p>
                            
            
        </div>

        
        
    </div>
   
    <div class="col-lg-6 col-md-12">
        <div class="about-right-imag">
            <img src={cover} className="home-image" alt="image"/>
            

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




<section class="gallery-area pt-100 pb-70">

<div class="section-title">
                    <span class="sub-title">Ayubowan!</span>
                    <h2>Enjoy the Natural Beauty</h2>
                    <p>of Sri Lanka</p>
                </div>

            <div class="container">
                <div class="row">
                    

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-item mb-30">
                            <img src={h8} alt="Gallery Image" />
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-item mb-30">
                            <img src={h6} alt="Gallery Image"/>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-item mb-30">
                            <img src={h4} alt="Gallery Image" />
                        </div>
                    </div>

                    

                    
                    
                    
                </div>
            </div>
        </section>


        



       
    
<div class="section-title">
                    <span class="sub-title">Explore Sri Lanka</span>
                    <h2>Places you always will like</h2>
                    <p>of Sri Lanka</p>
                </div>



   



        
        <section class="about-area pt-100">
<div class="container-fluid">
<div class="row align-items-center">
    



    <div class="col-lg-6 col-md-12">
        <div class="about-content left-content">
            
         

            <h4>Kayaking Along Tangalle Lagoon</h4><br/>
            <p>Kayaking along Tangalle Lagoon is one of the more adventurous things to do in Tangalle when you stay with us at Taru Villas. 
                The vast lagoon allows you to venture to some of the prime wilderness spots in the southern coast, as you witness exotic flora and fauna, 
                along with some unique sceneries. This experience can be enjoyed no matter who you’re travelling with, whether it’s your partner or your family and kids.
            </p>
                            
            
        </div>

        
        
    </div>
   
    <div class="col-lg-6 col-md-12">
        <div class="about-right-imag">
            <img src={tang} className="home-image2" alt="image"/>
            

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






<section class="about-area pt-100">
<div class="container-fluid">
<div class="row align-items-center">
    



    <div class="col-lg-6 col-md-12">
        <div class="about-content left-content">
            
         

            <h4>Yala Safari</h4><br/>
            <p>"Yala National Park is a perfect getaway for a complete change of scenery from your daily lifestyle.Reputed as the national park with the highest 
                concentration of leopards in Sri Lanka, these lazy yet ferocious predators are the main highlight of a Yala Safari.
                 Your tour starts from Tissamaharama and we can arrange pickup from any location based in Kataragama, Tissamaharama, Palatupana and Yala. 
                 You can choose from a 3 hour morning/evening tour or a 12 hour full day tour to spend time exploring the wildlife inside the park"
            </p>
                            
            
        </div>

        
        
    </div>
   
    <div class="col-lg-6 col-md-12">
        <div class="about-right-imag">
            <img src={yala} className="home-image2" alt="image"/>
            

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




<section class="about-area pt-100">
<div class="container-fluid">
<div class="row align-items-center">
    



    <div class="col-lg-6 col-md-12">
        <div class="about-content left-content">
            
         

            <h4>Hummanaya</h4><br/>
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
                    national parks, ports and harbours, and pristine clear waters offer a mellow experience to any weary traveller.
            </p>
                            
            
        </div>

        
        
    </div>
   
    <div class="col-lg-6 col-md-12">
        <div class="about-right-imag">
            <img src={cover1} className="home-image2" alt="image"/>
            

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
              <AiFillCar/>
            </div>
            <h3>Qualified Drivers and Staff</h3>
            <p>Our large fleet of vehicles includes luxury and mini coaches, vans, cars and even limousines that operate 24 hours. Our drivers are friendly and well trained. Furthermore our expert local tour guides have extensive knowledge on an array of destinations and will share with you inside knowledge and firsthand experience on every location making your tour an ultimate one.</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="services-box">
            <div class="icon">
            <IoIosCloudyNight/>
            </div>
            <h3>24/7 Support</h3>
            <p>Our customer service isn’t time bound. Travel agents at Tours for Sri lanka are always ready to serve you at anytime. Reach us at anytime of the day and you’re sure to be guided by our friendly travel consultants with effective solutions to your travel problems.</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="services-box">
            <div class="icon">
            <FaRegCommentDots/>
            </div>
            <h3>Instant Response</h3>
            <p>At Tours for Sri lanka we value time as much as you do. We dislike disappointing you with delays and forgotten inquiries which is why we strive to offer a service with instant response to your needs. From day one till your travel is complete and your feedback is heard we are in touch with you making sure everything you wanted your trip to be is just in their right places.</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="services-box">
            <div class="icon">
            <GiReceiveMoney/>
            </div>
            <h3>Value for Money</h3>
            <p>We don’t believe in a job half done. It’s not in our policies. We dig into the very last detail to make sure that our service is perfect. Travelling with Tours for Sri lanka will create an experience which you will treasure, a service with unmatched quality and a journey worth your money.</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="services-box">
            <div class="icon">
            <TbMessageLanguage/>
            </div>
            <h3>Languages and culture</h3>
            <p>At Tours for Sri lanka Communicating is made simple since personalized service to our clients are offered by multilingual customer service agents with language proficiency in English, Japanese, Chinese, German, Russian, Arabic, French and Spanish. This ensures that with no doubt what is asked for is delivered.</p>
        </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="services-box">
            <div class="icon">
            <IoShuffle/>
            </div>
            <h3>Flexibility</h3>
            <p>Our success story lies in offering our clients an itinerary that they find satisfaction in. This makes us open to be flexible and independent to listen to our customers requirements and plan accordingly. We see as to how we can use our expertise to tailor make something that you entrust that we can do.</p>
             </div>
    </div>

    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="services-btn">
        <Link to="/destinations" class="default-btn"><i class='bx bx-user-circle icon-arrow before'></i><span class="label">Your Next Destination</span>
            <i class="bx bx-user-circle icon-arrow after"></i></Link>
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

<div class="divider bg-e4feff"></div>
</section>


</div>
    );
}

export default Home;