import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import img from "../../assets/images/iphone-banner-two.png";
import { FaArrowRight } from 'react-icons/fa';
import './style.css'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <section class="section cta-subscribe" id="contact">
                <div class="container">
                    <div class="row bg-elipse-red">
                        <div class="col-lg-4">
                            <div class="image"><img style={{maxHeight: 450, marginLeft: 150}} class="phone-thumb" src={img} alt="iphone-app" /></div>
                        </div>
                        <div class="col-6 align-self-center" style={{marginLeft: 130}}>
                            <div class="content">
                                <div class="mb-4">
                                    <h2>Subscribe Our Newsletter</h2>
                                </div>
                                <div class="description">
                                    <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea
							of denouncing pleasure and praising</p>
                                </div>
                                <form action="#" style={{marginTop: 50}}>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter your email address" />
                                        <div class="input-group-append">
                                            <span class="input-group-text ti-arrow-right"><FaArrowRight/></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact
