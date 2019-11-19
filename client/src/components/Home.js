import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" class="js-fullheight" data-section="home">
				<div class="flexslider js-fullheight">
					<ul class="slides">
				   
				   	<li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner">
					   					<div class="desc">
										   <h1 >Hi! <br/>I'm Aditya<br/><br/> <br/></h1>
						   					
												{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												{/* <p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase3"></i></a></p> */}
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
					   <li style={{backgroundImage: "url(images/img_bg_1.jpg)",fontSize:"16px"}} data-stellar-background-ratio="0.5">
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" >
					   				<div class="slider-text-inner js-fullheight" style ={{color:"#d3d3d3",borderColor:"#d3d3d3"}}>
					   					<div class="desc">
										   <h1 style={{color:"rgb(245, 237, 237)"}}>I  am a <br/> Developer<br/></h1>
						   					{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												<p><a class="btn btn btn-primary btn-learn" href="https://drive.google.com/uc?export=download&id=1n1b75dx9dcmWNMy-etfCciOSKe7OMr3Q" download>Download CV <i class="icon-download4"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				  	</ul>
			  	</div>
			</section>
            </div>
        );
    }
}

export default Home;