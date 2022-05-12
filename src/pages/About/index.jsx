import React from 'react'
import about_img from "../../assets/images/iphone-chat.png";
import Video from "../../home_page/Video/index";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <section class="about section bg-2" id="about" style={{paddingTop: 150, paddingRight: 150, paddingLeft: 200 , paddingBottom: 100}}>
                <div class="container">
                    <h2 style={{fontSize: 45, textAlign: 'center', marginBottom: 50, color: '#7d71d3'}}>About Us</h2>
                    <div class="row">
                        <div class="col-lg-6 align-self-center text-center">

                            

                            <div class="image-block">
                                <img style={{maxHeight: 550}} class="phone-thumb-md" src={about_img} alt="iphone-feature" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
                            <div class="about-block">

                                <div class="about-item">
                                    <div class="icon">
                                        <i class="ti-palette"></i>
                                    </div>
                                    <div class="content">
                                        <h5>Creative Design</h5>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
								and I will give you a complete accounta</p>
                                    </div>
                                </div>

                                <div class="about-item active">
                                    <div class="icon">
                                        <i class="ti-panel"></i>
                                    </div>
                                    <div class="content">
                                        <h5>Easy to Use</h5>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
								and I will give you a complete accounta</p>
                                    </div>
                                </div>

                                <div class="about-item">
                                    <div class="icon">
                                        <i class="ti-vector"></i>
                                    </div>
                                    <div class="content">
                                        <h5>Best User Experience</h5>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
								and I will give you a complete accounta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <Video/>
            <Footer/>

        </div>
    )
}

export default About
