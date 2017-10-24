import React from 'react'
// import ProjectModal from './ProjectModal'
import { yelper, poll, socialMediaRoyalty, wiki, withesBrew, juke } from './projectsInfo'

const Projects = () => {
  return (
    <div className="w3-padding-32 w3-content" id="portfolio">
      <h2 className="w3-text-grey">My Portfolio</h2>
      <p className="hint w3-hide-xlarge">Click project photos to view more info</p>
      <hr className="w3-opacity" />

      <div className="card-columns">
        <div className="card text-left" data-toggle="modal" data-target="#YelpMe">
          <img className="card-img-top" src="img/yelper-me-1.png" alt="yelper-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#YelpMe">YelpMe</h4>
            <p className="card-text">A Google Chrome Extension extends Yelp search to include health inspection records with the results</p>
          </div>
        </div>
        <div className="modal fade" id="YelpMe" tabIndex="-1" role="dialog" aria-labelledby={yelper.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={yelper.title+"Label"}>{yelper.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={yelper.link} target="_blank" rel="noopener noreferrer">{ yelper.link }</a></p>
                <p>{ yelper.description }</p>
                { yelper.imgs.map((img, i) => {
                  return <img src={img} alt={yelper.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="card text-center" data-toggle="modal" data-target="#SocialMediaRoyalty">
          <img className="card-img-top" src="img/social-royalty-1.png" alt="social-royalty-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#SocialMediaRoyalty">Social Media Royalty</h4>
            <p className="card-text">An eCommerce Site: mini Amazon</p>
          </div>
        </div>
        <div className="modal fade" id="SocialMediaRoyalty" tabIndex="-1" role="dialog" aria-labelledby={socialMediaRoyalty.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={socialMediaRoyalty.title+"Label"}>{socialMediaRoyalty.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={socialMediaRoyalty.link} target="_blank" rel="noopener noreferrer">{ socialMediaRoyalty.link }</a></p>
                <p>{ socialMediaRoyalty.description }</p>
                { socialMediaRoyalty.imgs.map((img, i) => {
                  return <img src={img} alt={socialMediaRoyalty.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="card text-center" data-toggle="modal" data-target="#PollApp">
          <img className="card-img-top" src="img/poll-1.png" alt="poll-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#PollApp">Poll App</h4>
            <p className="card-text">A simple poll app, can be used as a full stack react-express-sequelize-passport boilerplate</p>
          </div>
        </div>
        <div className="modal fade" id="PollApp" tabIndex="-1" role="dialog" aria-labelledby={poll.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={poll.title+"Label"}>{poll.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={poll.link} target="_blank" rel="noopener noreferrer">{ poll.link }</a></p>
                <p>{ poll.description }</p>
                { poll.imgs.map((img, i) => {
                  return <img src={img} alt={poll.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="card text-left" data-toggle="modal" data-target="#WitchesBrew">
          <img className="card-img-top" src="img/witches-brew-1.png" alt="withes-brew-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#WitchesBrew">Withes' Brew</h4>
            <p className="card-text">A ​real-time ​multi-player ​collaborative ​party ​game</p>
          </div>
        </div>
        <div className="modal fade" id="WitchesBrew" tabIndex="-1" role="dialog" aria-labelledby={withesBrew.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={withesBrew.title+"Label"}>{withesBrew.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={withesBrew.link} target="_blank" rel="noopener noreferrer">{ withesBrew.link }</a></p>
                <p>{ withesBrew.description }</p>
                { withesBrew.imgs.map((img, i) => {
                  return <img src={img} alt={withesBrew.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="card text-right" data-toggle="modal" data-target="#JukeBox">
          <img className="card-img-top" src="img/juke1.png" alt="poll-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#JukeBox">Juke Box</h4>
            <p className="card-text">A muisc Juke box: mini iTunes</p>
          </div>
        </div>
        <div className="modal fade" id="JukeBox" tabIndex="-1" role="dialog" aria-labelledby={juke.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={juke.title+"Label"}>{juke.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={juke.link} target="_blank" rel="noopener noreferrer">{ juke.link }</a></p>
                <p>{ juke.description }</p>
                { juke.imgs.map((img, i) => {
                  return <img src={img} alt={juke.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="card p-3 text-right" data-toggle="modal" data-target="#WikiApp">
          <img className="card-img-top" src="img/wiki1.png" alt="poll-1" />
          <div className="card-body">
            <h4 className="card-title" data-toggle="modal" data-target="#WikiApp">Wiki Stack</h4>
            <p className="card-text">A min blog app</p>
          </div>
        </div>
        <div className="modal fade" id="WikiApp" tabIndex="-1" role="dialog" aria-labelledby={wiki.title+"Label"} aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={wiki.title+"Label"}>{wiki.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><a href={wiki.link} target="_blank" rel="noopener noreferrer">{ wiki.link }</a></p>
                <p>{ wiki.description }</p>
                { wiki.imgs.map((img, i) => {
                  return <img src={img} alt={wiki.title + i} key={img} className="img-thumbnail"/>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
