import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";
import './style.css'

const Members = (props) => {
    return (
        <div>
            

<div class="team-member text-center mb-4 mb-lg-0">
    <div class="image">
        <img class="img-fluid" src={props.img} alt="team-member" />
    </div>
    <div class="name">
        <h5>{props.name}</h5>
    </div>
    <div class="position">
        <p>{props.position}</p>
    </div>
    <div class="skill-bar">
        <div class="progress">
            <div class="progress-bar" style={{width:'85%'}}></div>
        </div>
        <span>{props.skill}</span>
    </div>
    <ul class="social-icons list-inline">
        <li class="list-inline-item">
            <a href=""><i class="ti-facebook"><FaFacebook/></i></a>
        </li>
        <li class="list-inline-item">
            <a href=""><i class="ti-twitter-alt"><FaTwitter/></i></a>
        </li>
        <li class="list-inline-item">
            <a href=""><i class="ti-linkedin"><FaLinkedinIn/></i></a>
        </li>
        <li class="list-inline-item">
            <a href=""><i class="ti-instagram"><FaInstagram/></i></a>
        </li>
    </ul>
</div>

        </div>
    )
}

export default Members
