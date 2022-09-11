import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';


import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <div class="navbar navbar-default navbar-fixed-top menu-top">
				<div class="container">
					<div class="logo">
						<a href="index2.html" class="navbar-brand"><p>Hashim</p></a>
						<div class="mobile-nav"></div>
					</div>
					
					<div id="navbar" class="main_menu">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#service">Service</a></li>
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#resume">Resume</a></li>	
							<li><a href="#blog">Blog</a></li>													
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div> 
				</div>
				</div>
  );
}

export default TypesExample;



