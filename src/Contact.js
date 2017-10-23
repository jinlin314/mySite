import React from 'react'

const Contact = () => (
  <div className="w3-padding-32 w3-content w3-text-grey" id="contact">
    <h2>Contact Me</h2>
    <hr className="w3-opacity" />

      <div className="w3-section">
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> New York, New York, US</p>
        <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>Email: <a href="mailto:jinlin314@gmail.com?Subject=Let's%20get%20in%20touch!" target="_top">jinlin314@gmail.com</a></p>
        <p><i className="fa fa-fw w3-xxlarge w3-margin-right"><img src="/img/linkedin-icon.png" className="contact-icon"/></i> LinkedIn: <a href="https://www.linkedin.com/in/jinlin314" target="_blank">linkedin.com/in/jinlin314</a></p>
        <p><i className="fa fa-fw w3-xxlarge w3-margin-right"><img src="/img/github-icon.png" className="contact-icon"/></i> GitHub: <a href="https://github.com/jinlin314" target="_blank">github.com/jinlin314</a></p>
      </div>
  </div>
)

export default Contact
