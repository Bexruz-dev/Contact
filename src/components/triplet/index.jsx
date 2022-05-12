import React from 'react'
import './style.css'

const Triplet = (props) => {
    return (
        <div className='text-center' style={{width: '253px', marginLeft:"70px"}}>
            <img src={props.img} alt=""/>
            <p id='triplet' >{props.text}</p>
            <a href="#" className="project__btn">View Details</a>

        </div>
    )
}

export default Triplet
