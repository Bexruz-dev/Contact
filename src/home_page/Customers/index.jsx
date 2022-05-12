import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import client1 from "../../assets/images/client_1.jpg";
import client2 from "../../assets/images/client_2.jpg";
import './style.css'

class Customers extends Component {
        render() {
        return (
            <div>
                <section class="section testimonial bg-primary-shape" id="testimonial">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-title">
                                    <h2 class="text-white " style={{marginTop: -50, paddingBottom: 40, fontSize: 40}}>Our Happy Customers</h2>
                                    <p class="text-white">Demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                                    cannot foresee idea of denouncing pleasure and praising. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo culpa, quibusdam eum facere eaque vero vitae iste sunt laudantium ullam facilis ipsa rem harum, repellendus odit nesciunt in minima.</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-10 mx-auto">

                                <div class="testimonial-slider">
                                    <Carousel autoPlay={true} onSelect={this.handleSelect} style={{ marginTop: '60px' }}>
                                        <Carousel.Item>
                                            <div class="testimonial-item">
                                                <div class="row">
                                                    <div class="col-md-5 client-img" >
                                                        <img style={{width: 266, height: 266, marginLeft: 100}} src={client1} alt=""/>
                                                    </div>
                                                    <div class="col-md-5" style={{marginLeft: 58}}>
                                                        <div class="p-4 bg-white">
                                                            <strong class="mb-3 d-block">They are great agency</strong>
                                                            <i class="lead font-italic mb-4">I recently hired Genox to develop a new version of my most popular website
                                                        and I’m extremely happy with their work.</i>
                                                            <h6>Mike Andrew</h6>
                                                            <p>CEO - Philandropia</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div class="testimonial-item">
                                                <div class="row">
                                                    <div class="col-md-5 client-img" >
                                                        <img style={{width: 266, height: 266, marginLeft: 100}} src={client2} alt=""/>
                                                    </div>
                                                    <div class="col-md-5" style={{marginLeft: 58}}>
                                                        <div class="p-4 bg-white">
                                                            <strong class="mb-3 d-block">They are great agency</strong>
                                                            <i class="lead font-italic mb-4">I recently hired Genox to develop a new version of my most popular website
                                                        and I’m extremely happy with their work.</i>
                                                            <h6>Selena Catt</h6>
                                                            <p>CEO - Philandropia</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </Carousel.Item>

                                    </Carousel>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Customers