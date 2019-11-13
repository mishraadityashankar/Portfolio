import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <section class="colorlib-experience" data-section="experience">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Experience</span>
							<h2 class="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
				         <div class="timeline-centered">
					         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">

					               <div class="timeline-icon color-1">
					                  <i class="icon-pen2"></i>
					               </div>

					               <div class="timeline-label">
					                  <h2><a href="#">Portfolio on React</a> <span>Nov 2019</span></h2>
					                  <p>This portfolio is built on react and with backend services on Node.</p>
					               </div>
					            </div>
					         </article>


					         <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-2">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="https://ravi-s-mishra.herokuapp.com/">Project-Ravi</a> <span>June-July 2019</span></h2>
					                  <p>Its a website of Pt Ravi Shankar Mishra, who is a famous Kathak dancer and teacher of Banaras Gharana. Website is based on MERN stack.</p>
					               </div>
					            </div>
					         </article>

					         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-3">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="https://play.google.com/store/apps/details?id=com.infotsav.test&hl=en">Infotsav App</a> <span>Dec 2018 - Jan 2019</span></h2>
					                  <p>This app was build for Central India biggest technical fest Infotsav 2k19 hosted by ABV-IIITM Gwalior</p>
					               </div>
					            </div>
					         </article>

					         <article class="timeline-entry animate-box" data-animate-effect="fadeInTop">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-4">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="#">Graphic Desinging</a> <span>July 2017 - Jan 2018</span></h2>
					                  <p>Intern at SHASHTRA AUTOMATION LLP in Graphic Designing from July 2017 to Jan 2018.</p>
					               </div>
					            </div>
					         </article>

					         {/* <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-5">
					                  <i class="icon-pen2"></i>
					               </div>
					               <div class="timeline-label">
					               	<h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
					                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
					               </div>
					            </div>
					         </article> */}

					         <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
					            <div class="timeline-entry-inner">
					               <div class="timeline-icon color-none">
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>

            </div>
        );
    }
}

export default Experience;