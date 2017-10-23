import React from 'react'

const Contact = () => (
  <div className="w3-padding-32 w3-content w3-text-grey" id="contact">
    <h2>Contact Me</h2>
    <hr className="w3-opacity" />

      <div className="w3-section">
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> New York, New York, US</p>
        <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: jinlin314@gmail.com</p>
      </div>

      <p>Lets get in touch. Send me a message:</p>
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" /></p>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
  </div>
)

export default Contact
