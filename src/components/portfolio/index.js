import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-firefighter" title>
                      <img alt="FireFighter VR" src="images/portfolio/firefighter.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Firefighter VR</h5>
                          <p>ROR</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-eggplant" title>
                      <img alt="" src="images/portfolio/eggplant.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Eggplant Dex</h5>
                          <p>ReactJS, web3, Binance</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-remotereps" title>
                      <img alt="" src="images/portfolio/remotereps.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>RemoteReps</h5>
                          <p>ROR, ReactJs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-rageon" title>
                      <img alt="" src="images/portfolio/rageon.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>RageOn</h5>
                          <p>ROR, ReactJs, Liquid, Shopify integration and NodeJS</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-eduleaf" title>
                      <img alt="" src="images/portfolio/eduleaf.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Eduleaf</h5>
                          <p>Ruby on Rails</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-hrms" title>
                      <img alt="" src="images/portfolio/hrms.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HRMS</h5>
                          <p>Ruby on Rails, ReactJs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-acloud" title>
                      <img alt="" src="images/portfolio/acloud.jpeg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Acloud - GLM</h5>
                          <p>Ruby on Rails, ReactJs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-trm" title>
                      <img alt="" src="images/portfolio/trm.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>TRM</h5>
                          <p>Ruby on Rails</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-firefighter" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/firefighter.png" alt="" />
              <div className="description-box">
                <h4>Firefighter VR</h4>
                <p>
                  The Firefighter VR Trainings Platform under the patronage of the German Association of the
                  factory firefighter departments (WFVD) and run by the Northdocks GmbH offers a software as
                  a service platform for training in VR.
                </p>
                <span className="categories"><i className="fa fa-tag" />ROR</span>
              </div>
              <div className="link-box">
                <a href="https://www.firefightervr.de/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-eduleaf End */}
            <div id="modal-eggplant" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/eggplant.png" alt="" />
              <div className="description-box">
                <h4>Eggplant Dex</h4>
                <p>
                  Eggplant is a new deflationary token on the Binance Smart Chain, featuring its
                  own DEX — A passion project formed from the wet dreams of every crypto enthusiast.
                  I was responsible for the FrontEnd development to manage Swapping, Liquidity, and Stakes.
                </p>
                <span className="categories"><i className="fa fa-tag" />ReactJS, web3, Binance</span>
              </div>
              <div className="link-box">
                <a href="https://dex.eggplantcrypto.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-eduleaf End */}
            <div id="modal-remotereps" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/remotereps.png" alt="" />
              <div className="description-box">
                <h4>RemoteReps</h4>
                <p>
                Remote Reps provides the needed solution: a virtual sales and service workforce,
                sourced from our strong network of experienced professionals around the world. The product is
                about hiring new resources and managing resources, clients, and their projects effectively.
                </p>
                <span className="categories"><i className="fa fa-tag" />ROR, ReactJS</span>
              </div>
              <div className="link-box">
                <a href="https://office.remotereps.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-eduleaf End */}
            <div id="modal-rageon" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/rageon.jpg" alt="" />
              <div className="description-box">
                <h4>RageOn</h4>
                <p>
                  RageOn.com is the World’s Largest All-Over-Print Online Store that features over 150 licensed celebrities,
                  brands, and artists from all over the world. Here users can create customized products of more than 200 types
                  and can cal on RageOn as well as their own Shopify stores.
                </p>
                <span className="categories"><i className="fa fa-tag" />ROR, ReactJs, Liquid, Shopify integration and NodeJS</span>
              </div>
              <div className="link-box">
                <a href="https://rageon.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-eduleaf End */}
            <div id="modal-eduleaf" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/eduleaf.png" alt="" />
              <div className="description-box">
                <h4>Eduleaf</h4>
                <p>Eduleaf is an automated online tool that allows the grading of ordinary paper-based exams containing any type of questions. It can handle math questions, chemical diagrams, essay questions, as well as multiple-choice.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
              </div>
              <div className="link-box">
                <a href="http://eduleaf.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-eduleaf End */}
            <div id="modal-hrms" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/hrms.png" alt="" />
              <div className="description-box">
                <h4>HRMS</h4>
                <p>It's a Human resource management system. It manages resource leaves, extra expenses, queries, etc.</p>
                <span className="categories"><i className="fa fa-tag" />Branding</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-hrms End */}
            <div id="modal-acloud" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/acloud.jpg" alt="" />
              <div className="description-box">
                <h4>Acloud - GLM</h4>
                <p>The Global License Manager (GLM) is the master licensing and billing system for A10 vThunder. GLM collects information from the distributed LLPs and issues licenses for the vThunder instances upon request.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails, ReactJs</span>
              </div>
              <div className="link-box">
                <a href="https://glm.a10networks.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-acloud End */}
            <div id="modal-trm" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/trm.png" alt="" />
              <div className="description-box">
                <h4>TRM</h4>
                <p>A platform for universities and students where Universities can offer courses and Students can enroll themselves into multiple courses.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
              </div>
              <div className="link-box">
                <a href="https://www.via-trm.com/" target='_blank'>Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-trm End */}
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}
