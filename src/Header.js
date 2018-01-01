import React from 'react'

const Header = () => (
  <header className="w3-container w3-center" id="home">
    <h1 className="w3-jumbo"><b>Jin Lin</b></h1>
    <p>Software Engineer @ <a href="https://fairygodboss.com/" target="_blank">FairyGodBoss</a></p>
    <img src="/img/profile-pic.png" alt="profileSmall" className="w3-image w3-hide-large w3-hide-small w3-round" id="header-img-1"/>
    <img src="/img/profile-pic.png" alt="profileImageMedium" className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" />
    <form method="get" action="./JinLin.pdf" target="top">
      <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
        <i className="fa fa-download"></i> Download Resume
      </button>
    </form>
  </header>
)

export default Header
