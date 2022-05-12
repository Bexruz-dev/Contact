import React from 'react'
import { FaPlay } from 'react-icons/fa';
import promo_video from "../../assets/images/promo-video-bg.jpg";
import "./style.css";

const Video = () => {
    return (
        <div>
            <section style={{backgroundColor: '#b4abf8', paddingBottom: 100}} class="section promo-video bg-3 overlay">
	<div class="container">
		<div class="row">
			<div class="col-12">
				
				<div class="video">
					<img class="img-fluid" style={{width: 900, marginLeft: 130, marginTop: 100}} src={promo_video} alt="video-thumbnail"/>
					<div class="video-button video-box">
						
						<a href="javascript:void(0)" style={{marginLeft: 40, marginTop: 100}}>
							<span class="icon" data-video="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1">
								<i class="ti-control-play"><FaPlay/></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Video
