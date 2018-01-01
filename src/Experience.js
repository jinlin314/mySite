import React from 'react'

export default class Experience extends React.Component {

  render() {
    return (
      <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
        <h2>Experience</h2>
        <hr className="w3-opacity" />

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            <h3>Software Engineer @ <a href="http://fairygodboss.com" target="_blank" rel="noopener noreferrer">FairyGodBoss</a></h3>
          </div>
        </div>
        <p className="w3-wide w3-padding-16">January 2018 - Present</p>
        <br />

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            <h3>Front End Developer @ <a href="http://shopviafly.com" target="_blank" rel="noopener noreferrer">ViaFly</a></h3>
          </div>
        </div>
        <p className="w3-wide w3-padding-16">August 2017 - December 2017</p>
        <ul>
          <li>Transformed mockups from designer into React components</li>
          <li>Integrated front end components with the backend APIs using AJax</li>
          <li>incorporated React Router to the site to keep the UI in sync with the URL. Utilized React Router's
            dynamic route matching, and location transition handling features to render the UI as Pinterest style modals</li>
          <li>Improved the flexibility and cleanness of the code by adding Redux. Thus, the front end
            React components can just manager the views according to the states managed by Redux</li>
        </ul><br />

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            <h3>Lab Instructor @ <a href="https://www.rfcuny.org" target="_blank" rel="noopener noreferrer">CUNY Research Foundation</a></h3>
          </div>
        </div>
        <p className="w3-wide w3-padding-16">August 2017 - Present</p>
        <ul>
          <li >Mentoring 113 junior and senior students with computer science majors from 11 CUNY colleges with full
            stack web application development training and providing professional development coaching</li>
        </ul><br />

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            <h3>Full Stack Developer @ <a href="playwitchesbrew.com" target="_blank" rel="noopener noreferrer">Witches' Brew</a></h3>
          </div>
        </div>
        <p className="w3-wide w3-padding-16">June 2017 - July 2017</p>
        <ul>
          <li>Spearheaded development and implementation of a real-time multi-player collaborative party game</li>
          <li>Employed Firebase to store actions and synchronize the game state for all players</li>
          <li>Engineered the application with Javascript, ES6, React, Redux, JavaScript, and Node.js, npm, Babel, Webpack, Firebase</li>
        </ul><br />

        <div className="w3-light-grey">
          <div className="w3-container w3-padding-small w3-dark-grey" style={{width: 100+"%"}}>
            <h3>Full Stack Developer @ YelpMe</h3>
          </div>
        </div>
        <p className="w3-wide w3-padding-16">June 2017</p>
        <ul>
          <li>Developed a Google Chrome Extension that extended Yelp search API to include the health inspection grades for each result, and allowed users to manage their local favorite eaters more conveniently and efficiently</li>
          <li>Engineered the application with Javascript, ES6, React, Redux, JavaScript, and Node.js, npm, Babel, Webpack</li>
        </ul><br />

      </div>
    )
  }
}
