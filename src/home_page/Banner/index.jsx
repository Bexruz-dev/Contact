import React from 'react'
import iphone_banner from "../../assets/images/iphone-banner.png";
import { FaAndroid, FaApple } from "react-icons/fa";
import './style.css'

const Banner = () => {
    return (
        <div>
            <section class="banner bg-1" id="home">
	<div class="container">
		<div class="row">
			<div class="col-md-8 align-self-center">
				
				<div class="content-block">
					<h1>Amazing App Best for business</h1>
					<h5>Let you track everything in your life with a simple way</h5>
					
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
			<div class="col-md-4">
				
				<div class="image-block">
					<img class="img-fluid phone-thumb" src={iphone_banner} alt="iphone-banner"/>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Banner
