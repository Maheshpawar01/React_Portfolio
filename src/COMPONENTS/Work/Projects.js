import React from 'react'
import './Work.css'
import {projectsData} from './Data'
import { projectNav } from './Data'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div>
        <div className="work_filters">
        
        {projectNav.map((item,index)=>{
            return <span className="work_item" key={index}>{item.name}</span>
        })}
    
        </div>

            <div className="work_container container grid">
         {
        projectsData.map((item)=>{
            return <ProjectItems item={item} key={item.id}/>
        })
        }
            </div>
    </div>
  )
}

export default Projects