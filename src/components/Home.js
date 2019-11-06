import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" class="js-fullheight" data-section="home">
				<div class="flexslider js-fullheight">
					<ul class="slides">
				   	<li style={{backgroundImage: "url(images/img_bg_1.jpg)"}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner js-fullheight">
					   					<div class="desc">
						   					<h1>Hi! <br/>I'm Aditya</h1>
						   					{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												<p><a class="btn btn-primary btn-learn" href="https://doc-10-cc-docs.googleusercontent.com/docs/securesc/c787oikv36k0pjm77oa862hm60r9r1uj/tfqfsp37vhr4l0kfnckhnf0ki5i56pjf/1573056000000/09444059925293350275/09444059925293350275/13H-huE7kE2vTTy00BCurKiwGsnwKbIui?e=download&nonce=81s4pvs9216eu&user=09444059925293350275&hash=ftiah1k99vduivau6ebvrdf32kkkcisa" download>Download CV <i class="icon-download4"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				   	<li style={{backgroundImage: "url(images/img_bg_2.jpg)"}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner">
					   					<div class="desc">
						   					<h1>I am <br/>a Designer</h1>
												<h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
												<p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase3"></i></a></p>
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