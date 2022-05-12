import React from 'react'
import { FaChartPie, FaComments, FaGift, FaImage, FaBrush, FaBriefcaseMedical } from 'react-icons/fa'
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import img from "../../assets/images/i-phone-screen.png";
import './style.css'

const Features = () => {
    return (
        <div>
            <Navbar/>
            <section class="section feature" id="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>App Features</h2>
                                <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of <br />
						denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-elipse">
                        <div class="col-lg-4 align-self-center text-center text-lg-right">

                            <div class="feature-item" style={{ textAlign: 'right' }} >

                                <div class="icon">
                                    <i class="ti-brush-alt">
                                        <FaBrush />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>Beautiful Interface Design</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>

                            <div class="feature-item" style={{ textAlign: 'right' }}>

                                <div class="icon">
                                    <i class="ti-gift">
                                        <FaGift />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>Unlimited Features</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center">

                            <div class="feature-item mb-0">

                                <div class="icon">
                                    <i class="ti-comments">
                                        <FaComments />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>Full free chat</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>
                            <div class="app-screen">
                                <img class="img-fluid" src={img} alt="app-screen" />
                            </div>

                            <div class="feature-item">

                                <div class="icon">
                                    <i class="ti-support">
                                        <FaBriefcaseMedical />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>24/7 support by real people</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center text-lg-left align-self-center">

                            <div class="feature-item" style={{ textAlign: 'left' }}>

                                <div class="icon">
                                    <i class="ti-image">
                                        <FaImage />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>Retina ready greaphics</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>

                            <div class="feature-item" style={{ textAlign: 'left' }}>

                                <div class="icon">
                                    <i class="ti-pie-chart">
                                        <FaChartPie />
                                    </i>
                                </div>

                                <div class="content">
                                    <h5>IOS & android version </h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Features
