import React from 'react'
import Members from '../../components/Team/index'
import Navbar from '../../components/Navbar/index'
import Footer from '../../components/Footer/index'
import member_2 from "../../assets/images/team/member-2.jpg";
import member_1 from "../../assets/images/team/member-1.jpg";
import member_3 from "../../assets/images/team/member-3.jpg";
import member_4 from "../../assets/images/team/member-4.jpg";
import './style.css'

const Team = () => {
    return (
        <div>
            <Navbar/>
            <section class="section team bg-shape-two" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title mb-4"> 
                            
                             <h2 class="mb-3">Our Creative Team</h2>
                                <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
						            denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-3 col-md-6"><Members img={member_1} name='marilyn DEPP' position='Production Designer' skill='85%'/></div>
                    <div class="col-lg-3 col-md-6"><Members img={member_2} name='CRISTIN MILIOTI' position='UX Researcher' skill='95%'/></div>
                    <div class="col-lg-3 col-md-6"><Members img={member_3} name='isabella DOE' position='Head of Ideas' skill='80%'/></div>
                    <div class="col-lg-3 col-md-6"><Members img={member_4} name='MARIO GOTZE' position='UX/UI designer' skill='75%'/></div>
                        
                       
                        </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Team
