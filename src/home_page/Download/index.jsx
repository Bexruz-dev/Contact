import React from 'react'
import phone_img from "../../assets/images/iphone-chat.png";
import { FaAndroid, FaApple } from "react-icons/fa";
import './style.css'

const Download = () => {
    return (
        <div>
            <section class="cta-download bg-3 overlay" style={{color: '#7d71d3', marginTop: 150, paddingBottom: 200}}>
	<div class="container">
		<div class="row">
			<div class="col-lg-5 text-center">
				<div class="image-block"><img class="phone-thumb img-fluid" src={phone_img} alt=""/></div>
			</div>
			<div class="col-lg-7">
				<div class="content-block">
					
					<h2>Free Download Now</h2>
					
					<p>Demoralized by the charms of pleasure of the moment, <br/> so blinded by desire, that they cannot foresee idea of
						denouncing <br/> pleasure and praising</p>
					
					<div class="app-badge">
						<ul class="list-inline">
							<li class="list-inline-item">
								<a href="#" class="btn btn-download"><i class="ti-android"><FaAndroid/></i>
									<div>Get it on the<span>GOOGLE PLAY</span></div>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="#" class="btn btn-download"><i class="ti-apple"><FaApple/></i>
									<div>Available on the<span>Apple store</span></div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Download
