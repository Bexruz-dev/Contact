import React from 'react'
// import decor from "../../assets/images/bg_decoration.png";
import './style.css'

const Counter = () => {
    return (
        <div id='counter'>
            <section class="section counter bg-gray">
	<div class="container">
		{/* <img style={{marginTop: -50, paddingBottom: 50, marginLeft: 100}} width='300' height='' src={decor} alt=""/> */}


		<div class="row">
			<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
				<div class="counter-item">
					
					<h3><span class="count" data-count="29">29</span>k</h3>
					
					<p>Download</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
				<div class="counter-item">
					
					<h3><span class="count" data-count="200">200</span>k</h3>
					
					<p>Active Account</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
				<div class="counter-item">
					
					<h3><span class="count" data-count="60">60</span>k</h3>
					
					<p>Happy User</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
				<div class="counter-item">
					
					<h3><span class="count" data-count="300">300</span>k<sup>+</sup></h3>
					
					<p>Download</p>
				</div>
			</div>
			{/* <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
				<img style={{ marginTop: 50, marginLeft: 100, width: 300}} width='100' height='' src={decor} alt=""/>
	
			</div> */}

		</div>
	</div>
</section>
        </div>
    )
}

export default Counter
