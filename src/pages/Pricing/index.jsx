import React from 'react'
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import './style.css'

const Pricing = () => {
    return (
        <div>
            <Navbar/>
            <section class="pricing section bg-shape" id="pricing">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title mb-4">
                                <h2 class="mb-3">Choose Your Subscription Plan</h2>
                                <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
						         <br/> denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">

                            <div class="pricing-table text-center">

                                <div class="title">
                                    <h5>Free</h5>
                                </div>

                                <div class="price">
                                    <p>$0<span>/month</span></p>
                                </div>

                                <ul class="feature-list">
                                    <li>Android App</li>
                                    <li>One time payment</li>
                                    <li>Build & Publish</li>
                                    <li>Life time support</li>
                                </ul>

                                <div class="action-button">
                                    <a href="" class="btn btn-main-rounded">Start Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">

                            <div class="pricing-table featured text-center">

                                <div class="title">
                                    <h5>Basic</h5>
                                </div>

                                <div class="price">
                                    <p>$19<span>/month</span></p>
                                </div>

                                <ul class="feature-list">
                                    <li>Android App</li>
                                    <li>One time payment</li>
                                    <li>Build & Publish</li>
                                    <li>Life time support</li>
                                </ul>

                                <div class="action-button">
                                    <a href="" class="btn btn-main-rounded">Start Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 m-md-auto">

                            <div class="pricing-table text-center">

                                <div class="title">
                                    <h5>Advance</h5>
                                </div>

                                <div class="price">
                                    <p>$99<span>/month</span></p>
                                </div>

                                <ul class="feature-list">
                                    <li>Android App</li>
                                    <li>One time payment</li>
                                    <li>Build & Publish</li>
                                    <li>Life time support</li>
                                </ul>

                                <div class="action-button">
                                    <a href="" class="btn btn-main-rounded">Start Now</a>
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

export default Pricing
