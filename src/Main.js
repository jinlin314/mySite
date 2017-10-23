import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  // Open and close sidebar
  openNav() {
    document.getElementById("mySidebar").style.width = "60%"
    document.getElementById("mySidebar").style.display = "block"
  }

  closeNav() {
    document.getElementById("mySidebar").style.display = "none"
  }

  render() {
    return (
      <div >
        <Sidebar closeNav={this.closeNav} />

        {/*Menu icon to open sidebar*/}
        <div className="w3-main w3-padding-large" id="page-content">
          <span id="menu-icon" className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" onClick={this.openNav}>
            <i className="fa fa-bars"></i>
          </span>

          <Header/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/experience' component={Experience}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </div>
    )
  }
}
