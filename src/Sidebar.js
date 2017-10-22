import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = (props) => (
  <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" id="mySidebar">
    <a onClick={props.closeNav} className="w3-button w3-black w3-xxxlarge w3-display-topright">
      <i className="fa fa-remove"></i>
    </a>
    <div className="w3-bar-block w3-center">
      <Link to="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={props.closeNav}>Home</Link>
      <Link to="/projects" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={props.closeNav}>Portfolio</Link>
      <Link to="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={props.closeNav}>About</Link>
    </div>
  </nav>
)

export default Sidebar
