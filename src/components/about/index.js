import React, { Component } from 'react';

export default class About extends Component {
  render() {

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="Profile Pic" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a highly competent professional with a proven track record in web development and
                a knack for solving complex problems in an efficient and durable way. Highly organized, self-motivated,
                articulate, reliable and eager to be challenged in order to grow and further improve my professional and
                technical skills. I am eager to be challenged in order to grow and further improve my technical skills.
                My greatest passion in life is using my technical knowledge to benefit other people and organizations.
            </p>
              <div className="row" id="contact">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Haroon Sarfraz</span><br />
                    <span>Edinburgh, United Kingdom<br />
                    </span><br />
                    <span>(+44) 7887-248766</span><br />
                    <span>haroonsarfraz10@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="resume.pdf" className="button" download><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}