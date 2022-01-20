import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Punjab University College of Information Technology</h3>
                  <p className="info">Bachelor of Information Technology (Hons)<span>•</span> <em className="date">July 2017</em></p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Firefighter VR</h3>
                  <p className="info">Ruby on Rails<span>•</span> <em className="date">3 months</em></p>
                  <p>
                    The Firefighter VR Trainings Platform under the patronage of the German Association of the factory
                    firefighter departments (WFVD) and run by the Northdocks GmbH offers a software as a service platform
                    for training in VR.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Developer Skill Test</h3>
                  <p className="info">Ruby on Rails<span>•</span> <em className="date">1 month</em></p>
                  <p>
                    The tool to hire new developers via proper skill testing. I was responsible for developing as well as code reviews.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Client websites based on Nuxt</h3>
                  <p className="info">VueJS(FE), Ruby on Rails(BE)<span>•</span> <em className="date">1.5 months</em></p>
                  <p>
                    I was responsible for developing the frontend for two companies portfolio sites as well as
                    the backend to manage the authentication, subscriptions, and alerts.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Kelana</h3>
                  <p className="info">Ruby on Rails<span>•</span> <em className="date">1 month</em></p>
                  <p>
                    Resource management and time tracking tool for Pairing.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Global Sense</h3>
                  <p className="info">ExpressJS<span>•</span> <em className="date">2 months</em></p>
                  <p>
                    Mobile Application to add smart devices and manage the security notifications and alerts.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Eggplant Dex</h3>
                  <p className="info">ReactJS, web3, Binance<span>•</span> <em className="date">3 weeks</em></p>
                  <p>
                    Eggplant is a new deflationary token on the Binance Smart Chain, featuring
                    its own DEX — A passion project formed from the wet dreams of every crypto
                    enthusiast. I was responsible for the FrontEnd development to manage
                    Swapping, Liquidity, and Stakes.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>RemoteReps</h3>
                  <p className="info">ROR and ReactJs<span>•</span> <em className="date">8 months</em></p>
                  <p>
                    Remote Reps provides the needed solution: a virtual sales and service workforce,
                    sourced from our strong network of experienced professionals around the world.
                    The product is about hiring new resources and managing resources, clients, and
                    their projects effectively.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>RageOn</h3>
                  <p className="info">ROR, ReactJs, Liquid, Shopify integration and NodeJS<span>•</span> <em className="date">5 months</em></p>
                  <p>
                    RageOn.com is the World’s Largest All-Over-Print Online Store that features over 150 licensed celebrities,
                    brands, and artists from all over the world. Here users can create customized products of more than 200 types
                    and can cal on RageOn as well as their own Shopify stores.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Createy</h3>
                  <p className="info">Ruby on Rails and ReactJs<span>•</span> <em className="date">12 months</em></p>
                  <p>
                    A one stop solution for creating and managing your online business, including payment solution,
                    mobile and web app creation and management, inventory management and many more.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Eduleaf</h3>
                  <p className="info">Ruby on Rails<span>•</span> <em className="date">2 month</em></p>
                  <p>
                    Eduleaf is an automated online tool that allows the grading of ordinary paper-based exams
                    containing any type of questions. It can handle math questions, chemical diagrams,
                    essay questions, as well as multiple-choice.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>HRMS</h3>
                  <p className="info">Ruby on Rails and ReactJS<span>•</span> <em className="date">3 months</em></p>
                  <p>
                    It's a Human resource management system. It manages resource leaves, extra expenses, queries, etc.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>SS-Cloud</h3>
                  <p className="info">Ruby on Rails, AngularJS and Python(flask)<span>•</span> <em className="date">12 months</em></p>
                  <p>
                    It’s a platform to manage un-sold, damaged products and hazard waste. Here buyers can contact
                    sellers and it will also provide guidance for hazard waste transport rules applicable on their products.
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>Acloud</h3>
                  <p className="info">Ruby on Rails and ReactJS<span>•</span> <em className="date">16 months</em></p>
                  <p>
                    This is a License management tool of a well known Networking company.
                    A user can buy a license of a Network security device and can monitor its usage here..
                  </p>
                </div>
              </div> {/* item end */}

              <div className="row item">
                <div className="twelve columns">
                  <h3>TRM</h3>
                  <p className="info">Ruby on Rails<span>•</span> <em className="date">4 months</em></p>
                  <p>
                    A platform for universities and students where Universities can offer
                    courses and Students can enroll themselves into multiple courses.
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>
                I have good knowledge of Ruby on Rails, Rspec, React-JS, Postgresql, MongoDB, Elasticsearch, git, EC2, S3, heroku, docker, cloud66.
                Most of my work is related to backend development but I am good at ReactJS and Web designing.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand ror" /><em>Ruby on Rails</em></li>
                  <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
                  <li><span className="bar-expand vuejs" /><em>VueJS</em></li>
                  <li><span className="bar-expand js-jquery" /><em>JS, Jquery</em></li>
                  <li><span className="bar-expand css" /><em>CSS, SCSS </em></li>
                  <li><span className="bar-expand databases" /><em>Postgresql, MongoDB</em></li>
                  <li><span className="bar-expand deployments" /><em>EC2, Heroku, Docker, Cloud66</em></li>
                  <li><span className="bar-expand elasticsearch" /><em>Elasticsearch</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}