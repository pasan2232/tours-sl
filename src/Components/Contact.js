import React, { useRef, useState, Component  } from "react";

import emailjs from "@emailjs/browser";




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqvvwm7",
        "template_9rdsxp9",
        form.current,
        "CVq_EENm0ZktuU69C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.location="/thankyou"
        },
        (error) => {
          console.log(error.text);
        }
      );
  };





  return (




<section class="contact-area pb-100">





            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Contact Us</span>
                    <h2>Drop us a message</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="contact-form">
                    <form id="contactForm" class="contact__form" ref={form} onSubmit={sendEmail}>
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" name="user_name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Your Name"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="email" name="user_email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Your Email"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" name="user_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Your Phone"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" name="subject" id="subject" required data-error="Please enter your number" class="form-control" placeholder="Subject"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            {/* <div class="col-lg-6 col-md-12">
                                <div class="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Your Subject"/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div> */}

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <button type="submit" value="Send message"
                            
                                class="default-btn"><i class='bx bx-paper-plane icon-arrow before'></i><span class="label">Send Message</span><i class="bx bx-paper-plane icon-arrow after"></i></button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>




            <div id="particles-js-circle-bubble-3"></div>
            
        </section>





         
  );
};


export default Contact;