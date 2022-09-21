import React from "react";

import Anu from '../assests/anu.jpg'
import Kan from '../assests/kandy-sri-lanka-tooth-temple-776x502.jpg'


const Destination = () => {


    

  return (
    <div>

<section class="courses-area ptb-100">
            <div class="container">
                

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-item mb-30">
                            <div class="courses-image">
                                <a href="single-courses.html" class="d-block"><img src={Kan} alt="image"/></a>
                            </div>

                            <div class="courses-content">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="assets/img/user1.jpg" class="shadow" alt="image"/>
                                        <span>Steven Smith</span>
                                    </div>

                                    <div class="courses-rating">
                                        <div class="review-stars-rated">
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star-half'></i>
                                        </div>
    
                                        <div class="rating-total">
                                            4.5 (2)
                                        </div>
                                    </div>
                                </div>

                                <h3><a href="single-courses.html" class="d-inline-block">Kandy - Sri Lanka</a></h3>
                                <p>Education encompasses both the teaching and learning of knowledge.</p>
                            </div>

                            <div class="courses-box-footer">
                                <ul>
                                    <li class="students-number">
                                        <i class='bx bx-user'></i> 10 students
                                    </li>

                                    <li class="courses-lesson">
                                        <i class='bx bx-book-open'></i> 6 lessons
                                    </li>

                                    <li class="courses-price">
                                        Free
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-item mb-30">
                            <div class="courses-image">
                                <a href="single-courses.html" class="d-block"><img src={Anu} alt="image"/></a>
                            </div>

                            <div class="courses-content">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="assets/img/user2.jpg" class="shadow" alt="image"/>
                                        <span>Sarah Taylor</span>
                                    </div>

                                    <div class="courses-rating">
                                        <div class="review-stars-rated">
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star-half'></i>
                                        </div>
    
                                        <div class="rating-total">
                                            4.5 (2)
                                        </div>
                                    </div>
                                </div>

                                <h3><a href="single-courses.html" class="d-inline-block">Certified Graphic Design with Free Project Course</a></h3>
                                <p>Education encompasses both the teaching and learning of knowledge.</p>
                            </div>

                            <div class="courses-box-footer">
                                <ul>
                                    <li class="students-number">
                                        <i class='bx bx-user'></i> 15 students
                                    </li>

                                    <li class="courses-lesson">
                                        <i class='bx bx-book-open'></i> 10 lessons
                                    </li>

                                    <li class="courses-price">
                                        $250
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-courses-item mb-30">
                            <div class="courses-image">
                                <a href="single-courses.html" class="d-block"><img src={Anu} alt="image"/></a>
                            </div>

                            <div class="courses-content">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="course-author d-flex align-items-center">
                                        <img src={Anu} alt="image"/>
                                        <span>Anderson</span>
                                    </div>

                                    <div class="courses-rating">
                                        <div class="review-stars-rated">
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bxs-star'></i>
                                            <i class='bx bx-star'></i>
                                        </div>
    
                                        <div class="rating-total">
                                            4.0 (1)
                                        </div>
                                    </div>
                                </div>

                                <h3><a href="single-courses.html" class="d-inline-block">Photography Crash Course for Photographer</a></h3>
                                <p>Education encompasses both the teaching and learning of knowledge.</p>
                            </div>

                            <div class="courses-box-footer">
                                <ul>
                                    <li class="students-number">
                                        <i class='bx bx-user'></i> 5 students
                                    </li>

                                    <li class="courses-lesson">
                                        <i class='bx bx-book-open'></i> 5 lessons
                                    </li>

                                    <li class="courses-price">
                                        $150
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                   

                    


                    
                </div>
            </div>
        </section>

    </div>
  );
};

export default Destination;
