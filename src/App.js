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
				<h2 id="colorlib-logo"><a href="index.html">Aditya Shankar Mishra</a></h2>
				<span class="position"><a style ={{color:"black"}}href="#">Full Stack Developer</a></span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" class="navbar">
				<div id="navbar" class="collapse">
					<ul>
						<li class="active"><a href="#" data-nav-section="home" style ={{color:"black"}}>Home</a></li>
						<li><a href="#" data-nav-section="about"style ={{color:"black"}}>About</a></li>
						{/* <li><a href="#" data-nav-section="services">Services</a></li> */}
						<li><a href="#" data-nav-section="skills"style ={{color:"black"}}>Skills</a></li>
						<li><a href="#" data-nav-section="education"style ={{color:"black"}}>Education</a></li>
						<li><a href="#" data-nav-section="experience"style ={{color:"black"}}>Experience</a></li>
						{/* <li><a href="#" data-nav-section="work">Work</a></li>
						<li><a href="#" data-nav-section="blog">Blog</a></li> */}
						<li><a href="#" data-nav-section="contact"style ={{color:"black"}}>Contact</a></li>
					</ul>
				</div>
			</nav>
     </aside>
     <div id="colorlib-main">
       <Home></Home>
      <About></About>
      {/* <Services></Services> */}
      <Skills></Skills>
      <Eductation></Eductation>
      <Experience></Experience>
      {/* <Work></Work>
      <Blog></Blog> */}
      <Contact></Contact>
     </div>
 
    </div>
    </div>
    </div>
  );
}

export default App;
