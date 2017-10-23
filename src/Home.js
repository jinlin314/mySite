import React from 'react'


export default class Home extends React.Component {

  render() {
    return (
      <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
        <h2>About Me</h2>
        <hr className="w3-opacity" />
        <p>Technically sophisticated software professional with a broad knowledge and success in an engineering
          development environment. Success developing, executing, and analyzing proprietary software applications
          for private and corporate business endeavors. Outstanding interpersonal and communication strengths
          leveraged to train users, troubleshoot system issues, and ensure total client satisfaction.
        </p>
        <h3 className="w3-padding-16">Technical Skills</h3>
        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 95+"%"}}>Proficient</div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">Javacript</p>
              <p className="w3-wide">React.js</p>
              <p className="w3-wide">Redux</p>
              <p className="w3-wide">Express.js</p>
              <p className="w3-wide">Seqeulize.js</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">Node.js</p>
              <p className="w3-wide">HTML</p>
              <p className="w3-wide">CSS</p>
              <p className="w3-wide">Ajax</p>
              <p className="w3-wide">Github</p>
            </div>
          </div>
        </div>

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 75+"%"}}>Knowledgeable</div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">Java</p>
              <p className="w3-wide">PostgreSQL</p>
              <p className="w3-wide">JQuery</p>
              <p className="w3-wide">Jasmine</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">Mocha</p>
              <p className="w3-wide">Chai</p>
              <p className="w3-wide">Babel</p>
              <p className="w3-wide">Webpack</p>
          </div>
          </div>
        </div>

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 50+"%"}}>Some Experience</div>
        </div><br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">C++</p>
              <p className="w3-wide">Firebase</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="w3-wide">PHP</p>
            </div>
          </div>
        </div>

        <h3 className="w3-padding-16">Education</h3>
        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            The City College of New York University
          </div>
        </div><br />
        <p className="w3-wide">Bachelor of Computer Engineering</p>
        <p className="w3-wide">2004 - 2008, New York, New York</p>

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            Full Stack Academy of Code
          </div>
        </div><br />
        <p className="w3-wide">Technical Certificate: Full Stack Web Development</p>
        <p className="w3-wide">2017, New York, New York</p>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
      </div>
    )
  }
}
