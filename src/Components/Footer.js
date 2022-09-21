import React, { useContext } from "react";



const Footer = () => {
 

 

  return (
    <footer class="footer-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-footer-widget mb-30">
                    <h3>Contact Us</h3>

                    <ul class="contact-us-link">
                        <li>
                            <i class='bx bx-map'></i>
                            <a href="#" target="_blank">2750 Quadra Street Victoria Road,<br/> New York, USA</a>
                        </li>
                        <li>
                            <i class='bx bx-phone-call'></i>
                            <a href="#">+1 (123) 456 7890</a>
                        </li>
                        <li>
                            <i class='bx bx-envelope'></i>
                            <a href="#">hello@raque.com</a>
                        </li>
                    </ul>

                    <ul class="social-link">
                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                        <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-pinterest-alt'></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-footer-widget mb-30">
                    <h3>Support</h3>

                    <ul class="support-link">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Condition</a></li>
                        <li><a href="#">Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-footer-widget mb-30">
                    <h3>Useful Link</h3>

                    <ul class="useful-link">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">WP Development</a></li>
                        <li><a href="#">App</a></li>
                        <li><a href="#">Whitepaper</a></li>
                        <li><a href="#">Web Development</a></li>
                    </ul>
                </div>
            </div>

            
        </div>
    </div>

    <div class="footer-bottom-area">
        <div class="container">
            <div class="logo">
                <a href="index.html" class="d-inline-block"><img src="assets/img/logo.png" alt="image"/></a>
            </div>
            <p><i class='bx bx-copyright'></i>2021 <a href="index.html" target="_blank"></a> Designed By <a href="https://envytheme.com/" target="_blank">aaaaaa</a> | All rights reserved.</p>
        </div>
    </div>
</footer>
  );
};

export default Footer;
