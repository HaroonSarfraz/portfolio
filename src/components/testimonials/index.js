import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                          In his position as a Software engineer, Haroon Sarfraz demonstrated critical skills that made
                          him an excellent developer to work with. His effectiveness,
                          reliability and critical thinking ensured that all projects were completed successfully
                          right on time, making him a truly invaluable member of our team.
                        </p>
                        <cite>Hermann von Marsoner</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>
                          Haroon is one of the best developers we worked with in 2021. His code quality was high and
                          communication skills made him a great addition to our team. He didn't only deliver features
                          without bugs, he also helped the other developers in his team get better.
                        </p>
                        <cite>Till Carlos</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}