import React from 'react'

const ProjectModal = (props) => {
  const imgs = props.project.imgs
  // id={props.project.id}
  return (
    <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby={props.title+"Label"} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={props.title+"Label"}>{props.project.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p><a href={props.project.link} target="_blank" rel="noopener noreferrer">{ props.project.link }</a></p>
            <p>{ props.project.description }</p>
            { imgs && imgs.map((img, i) => {
                return <img src={img} alt={props.project.title + i} key={img} className="img-thumbnail"/>
            })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
