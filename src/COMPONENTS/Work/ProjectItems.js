import React from 'react'
import './Work.css'

const ProjectItems = ({item}) => {
  return (
    <div className="project_card" key={item.id}>
      <img src={item.image} alt="" className='project_img' />
      <h3 className="project_title">{item.title}</h3>
      <a href={item.url} className="project_button">
        Demo <i className="fa-solid fa-arrow-right project_button-icon"></i>

      </a>
    </div>
  )
}

export default ProjectItems