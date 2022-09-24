import React from 'react';

import FloatingWhatsApp from 'react-floating-whatsapp'

import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';



import human from '../assests/unknown.jpg'
import guide from '../assests/guide (1).jpeg'
import avatar from '../assests/avatar.jpeg'

import i1 from '../assests/Happy/001.jpeg';
import i2 from '../assests/Happy/002.jpeg';
import i3 from '../assests/Happy/003.jpeg';
import i4 from '../assests/Happy/004.jpeg';
import i5 from '../assests/Happy/005.jpeg';
import i6 from '../assests/Happy/006.jpeg';
import i7 from '../assests/Happy/007.jpeg';
import i8 from '../assests/Happy/008.jpeg';
import i9 from '../assests/Happy/009.jpeg';
import i10 from '../assests/Happy/010.jpeg';
import i11 from '../assests/Happy/011.jpeg';
import i12 from '../assests/Happy/012.jpeg';

import i01 from '../assests/Happy/1.jpeg';
import i02 from '../assests/Happy/2.jpeg';
import i04 from '../assests/Happy/4.jpeg';

function Guide(props) {
    return (
        <div>
                <section class="courses-area ptb-100">
            <div class="container">
                
            <div class="section-title">
                    <span class="sub-title">Ayubowan!</span>
                    <h2>Welcome to Sri Lanka</h2>
                    <p></p>
                </div>


                <section class="my-account-area ptb-100">
            <div class="container">
                <div class="myAccount-profile">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-5">
                            <div class="profile-image">
                                <img src={guide} alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-7">
                            <div class="profile-content">
                                <h2>Mr. Sadew Sanjula Anuhas</h2>
                               

                                <ul class="contact-info">
                                <h5><li> <GrLocation/><a > : No 901/3, Galle Road,Katukurunda, Kalutara.</a></li></h5><br/>
                                <h5><li> <AiOutlineMail/><a href="mailto:dilshan.kumara34@gmail.com">: dilshan.kumara34@gmail.com</a></li></h5>    <br/>
                                <h5><li> <AiOutlinePhone/><a href="tel:+94777909154">:  0777909154</a> / <a href="tel:+94711308121">0711308121</a></li></h5>  
                                
                                </ul>


                                <FloatingWhatsApp
                                phoneNumber="+94711308121"
                                        accountName="Sadew Sanjula Anuhas"
                                        allowClickAway
                                        notification
                                        
                                        notificationSound
                                        avatar={avatar}
                                        statusMessage=""
                                        chatMessage="Hi, How can i help you?"/>



                                <ul class="social">
                                    <li><a href="//wa.me/+94711308121" class="d-block" target="_blank"><BsWhatsapp/></a></li>
                                    <li><a href="https://www.facebook.com/bugsbunny23456" class="d-block" target="_blank"><AiFillFacebook/></a></li>
                                    <li><a href="https://www.instagram.com/sadew_sanjula_anuhas/" class="d-block" target="_blank"><BsInstagram/></a></li>
                                  
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </section>

                     <div class="section-title">
                    <span class="sub-title">WITH US</span>
                    <h3>Happy Momments !</h3>
                    
                </div>



                <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i1} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i2} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i3} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i4} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i5} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i6} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i7} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i8} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i9} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i10} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i11} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i12} alt="Gallery" />
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i01} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i02} alt="Gallery" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery- mb-30">
                            <img src={i04} alt="Gallery" />
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </section>
            </div>
    );
}

export default Guide;