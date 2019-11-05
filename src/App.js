import React from 'react';
import logo from './logo.svg';
import './App.css';

import Eductation from './components/Eductation';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Work from './components/Work';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <div id="colorlib-page" style={{textAlign:"left"}}>
		  <div class="container-wrap">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
			<div class="text-center">
				<div class="author-img" style={{ backgroundImage: " url(images/about.jpg)"}}></div>
				<h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
				<span class="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" class="navbar">
				<div id="navbar" class="collapse">
					<ul>
						<li class="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#" data-nav-section="about">About</a></li>
						<li><a href="#" data-nav-section="services">Services</a></li>
						<li><a href="#" data-nav-section="skills">Skills</a></li>
						<li><a href="#" data-nav-section="education">Education</a></li>
						<li><a href="#" data-nav-section="experience">Experience</a></li>
						<li><a href="#" data-nav-section="work">Work</a></li>
						<li><a href="#" data-nav-section="blog">Blog</a></li>
						<li><a href="#" data-nav-section="contact">Contact</a></li>
					</ul>
				</div>
			</nav>
     </aside>
     <div id="colorlib-main">
       <Home></Home>
      <About></About>
      <Services></Services>
      <Skills></Skills>
      <Eductation></Eductation>
      <Experience></Experience>
      <Work></Work>
      <Blog></Blog>
      <Contact></Contact>
     </div>
 
    </div>
    </div>
    </div>
  );
}

export default App;
