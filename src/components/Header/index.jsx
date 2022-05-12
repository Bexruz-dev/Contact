import React from 'react'
// import logo from "../../images/Frame.png";
import { AiOutlineUser } from "react-icons/ai";
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header style={{height: 80}} className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

                <div style={{paddingLeft: 69}}>
                    <div className="row align-items-center">

                        <div className="col-6 col-xl-2">
                            <Link to='/'><h2 style={{width:'10', fontFamily:'cursive', marginTop: -25}}>Iphone.</h2></Link>
                            
                        </div>

                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">

                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><Link to='/features'><a style={{marginLeft: 350}}  id='menus' href="#" className="nav-link">Features</a></Link></li>
                                    <li><Link style={{marginLeft: -40, color: 'black'}} to='/integrations'><a id='menus' href="#" className="nav-link">Integrations</a> </Link></li>
                                    <li><Link style={{marginLeft: -40}} to='/pricing'><a id='menus' href="#" className="nav-link">Pricing</a></Link></li>
                                    <li><Link style={{marginLeft: -40}} to='/company'><a id='menus' href="#" className="nav-link">Company</a></Link></li>
                                    <li><Link style={{marginLeft: -40}} to='/blog'><a id='menus' href="#" className="nav-link">Blog</a></Link></li>

                                    {/* <button style={{width: 136, height: 44, padding: '10px 23px', border: '1px solid #2F70FE', color: '#2F70FE', backgroundColor: 'white'}} >Get a demo</button> */}
                                    {/* <button style={{width: 136, height: 44, padding: '10px 23px', border: '1px solid white', color: 'black', backgroundColor: 'white'}} ><AiOutlineUser/>Log in</button> */}
                                </ul>
                            </nav>
                        </div>


                        <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{ position: 'relative', top: '3px' }}><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
