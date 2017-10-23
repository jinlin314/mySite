import React from 'react'

const Projects = () => (
  <div className="w3-padding-32 w3-content" id="portfolio">
    <h2 className="w3-text-grey">My Portfolio</h2>
    <hr className="w3-opacity" />

    <div className="card-columns">
      <div className="card text-left">
        <img className="card-img-top" src="img/yelper-me-1.png" alt="yelper-1" />
          <div className="card-body">
            <h4 className="card-title">YelpMe</h4>
            <p className="card-text">A Google Chrome Extension extends Yelp search to include health inspection records with the results</p>
          </div>
      </div>
      <div className="card text-left">
        <img className="card-img-top" src="img/witches-brew-1.png" alt="withes-brew-1" />
        <div className="card-body">
          <h4 className="card-title"><a href="https://playwitchesbrew.com/intro" target="_blank" rel="noopener noreferrer">Withes' Brew</a></h4>
          <p className="card-text">A ​real-time ​multi-player ​collaborative ​party ​game</p>
        </div>
      </div>
      <div className="card text-center">
        <img className="card-img-top" src="img/socialRoyalty-1.png" alt="social-royalty-1" />
        <div className="card-body">
          <h4 className="card-title">Social Media Royalty</h4>
          <p className="card-text">An eCommerce Site: mini Amazon</p>
        </div>
      </div>
      <div className="card text-center">
        <img className="card-img-top" src="img/poll-1.png" alt="poll-1" />
        <div className="card-body">
          <h4 className="card-title">Poll App</h4>
          <p className="card-text">A simple poll app, can be used as a full stack react-express-sequelize-passport boilerplate</p>
        </div>
      </div>
      <div className="card text-right">
        <img className="card-img-top" src="img/juke1.png" alt="poll-1" />
        <div className="card-body">
          <h4 className="card-title">Juke Box</h4>
          <p className="card-text">A muisc Juke box: mini iTunes</p>
        </div>
      </div>
      <div className="card p-3 text-right">
        <img className="card-img-top" src="img/wiki1.png" alt="poll-1" />
        <div className="card-body">
          <h4 className="card-title">Wiki Stack</h4>
          <p className="card-text">A min blog app</p>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
