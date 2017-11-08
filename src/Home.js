import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Educaiton from './Edcation'
import Contact from './Contact'

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

        <Skills/>
        <Experience />
        <Projects />
        <Educaiton/>
        <Contact />

        <form method="get" action="./JinLin.pdf" target="top" className="w3-center">
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </form>
      </div>
    )
  }
}
