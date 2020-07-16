import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="mailto:haroonsarfraz10@gmail.com"><i className="fa fa-envelope-o" /></a></li>
                <li><a href="https://www.linkedin.com/in/haroon-ahmed-b64976170"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/HaroonSarfraz"><i className="fa fa-github" /></a></li>
                <li><a href="https://bitbucket.org/haroonsarfraz/"><i className="fa fa-bitbucket" /></a></li>
                <li><a href="https://join.skype.com/invite/chjDP1EsOEhW/"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}