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
        <h3 className="w3-padding-16">My Skills</h3>
        <p className="w3-wide">Javacript</p>
        <div className="w3-light-grey">
          <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width: 95+"%"}}>95%</div>
        </div>
        <p className="w3-wide">React.js</p>
        <div className="w3-light-grey">
          <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width: 85+"%"}}>85%</div>
        </div>
        <p className="w3-wide">Redux</p>
        <div className="w3-light-grey">
          <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width: 80+"%"}}>80%</div>
        </div><br />

        <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">14+</span><br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span><br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span><br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span><br />
            Meetings
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
      </div>
    )
  }
}
