import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Haroon Sarfraz.</h1>
              <h3>I'm a Tech savvy <span>software engineer</span>, specializing in <span>web development</span> with <span> 4.5 years of experience </span>
                 in <span>Ruby on Rails </span> and <span>ReactJS</span>, and a knack for solving complex problems in an efficient and durable way.
                 Let's <a className="smoothscroll" href="#about">start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="mailto:haroonsarfraz10@gmail.com"><i className="fa fa-envelope-o" /></a></li>
                <li><a href="https://www.linkedin.com/in/haroon-ahmed-b64976170"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/HaroonSarfraz"><i className="fa fa-github" /></a></li>
                <li><a href="https://bitbucket.org/haroonsarfraz/"><i className="fa fa-bitbucket" /></a></li>
                <li><a href="https://join.skype.com/invite/chjDP1EsOEhW/"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}