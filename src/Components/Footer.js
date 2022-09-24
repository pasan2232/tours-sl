import React from 'react';

import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer class="footer-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="single-footer-widget mb-30">
                    <h3>Contact Us</h3>

                    <ul class="contact-us-link">
                        <li>
                            <i class='bx bx-map'></i>
                            <a  target="_blank">No 901/3, Galle Road, Katukurunda,<br/>Kaluthara, Sri Lanka</a>
                        </li>
                        <li>
                            <i class='bx bx-phone-call'></i>
                            <a href="tel:+94777909154">0777909154</a> / <a href="tel:+94711308121">0711308121</a>
                            
                        </li>
                        <li>
                            <i class='bx bx-envelope'></i>
                            <a href="mailto:dilshan.kumara34@gmail.com">dilshan.kumara34@gmail.com</a>
                        </li>
                    </ul>

                    <ul class="social-link">
                        <li><a href="https://www.instagram.com/sadew_sanjula_anuhas/" class="d-block" target="_blank"><BsInstagram/></a></li>
                        <li><a href="https://www.facebook.com/bugsbunny23456" class="d-block" target="_blank"><AiFillFacebook/></a></li>
                        <li><a href="//wa.me/+94711308121" class="d-block" target="_blank"><BsWhatsapp/></a></li>
                        
                    </ul>
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="single-footer-widget mb-30">
                    <h3>Connect with us</h3>

                    <ul class="support-link">
                    <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/carrents">Car Rents</Link></li>
                        <li><Link to="/guides">Guide</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>

                        
                    </ul>
                </div>
            </div>


            
        </div>
    </div>

    <div class="footer-bottom-area">
        <div class="container">
           
            <p><i class='bx bx-copyright'></i>2022 | Designed By <a href="https://www.facebook.com/akalanka.withanage.5/" target="_blank">Pasan Withanage</a></p>
        </div>
    </div>
</footer>
    );
}

export default Footer;