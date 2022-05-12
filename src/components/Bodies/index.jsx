import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Left = (props) => {
    return (
        <div>
            {Array.from({ length: 2 }).map((_, idx) =>
                (idx + 1) % 2 !== 0 ? (
                    <div style={{marginTop: 100}} className="py-10 d-flex justify-content-center align-items-center ">
                        <div  style={{width: 410, height: 231, marginTop: 70}}>
                            <h2>
                            {props.title1}
                            </h2>
                            <p>
                            {props.text1}
                                
                            </p>
                            <a style={{textDecoration: 'none'}} href="#">Signup now <AiOutlineArrowRight/></a>
                        </div>
                        <img style={{marginLeft: 70 }} src={props.image1} alt="" />
                    </div>
                ) : ( 
                    <div style={{marginTop: 100}} className="py-10 d-flex justify-content-center align-items-center gap-5" >
                    <img src={props.image2} alt="" />
                    <div style={{width: 410, height: 231, marginTop: 70, marginLeft: 70}} >
                        <h2>
                        {props.title2}
                        
                        </h2>
                        <p>
                        {props.text2}
                        
                        </p>
                        <a style={{textDecoration: 'none'}} href="#">Signup now <AiOutlineArrowRight/></a>

                    </div>
    
                </div>
             )
            )} 
        </div>
    )
}

export default Left;