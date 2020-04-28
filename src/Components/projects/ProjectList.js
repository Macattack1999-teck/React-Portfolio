import React from 'react'
import { Link } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list__container">
      {
        projects && projects.map(project => {
          return (
            <Link to={`/project/${project.id}`} key={project.urlBackground}>
              <ProjectSummary project={project} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProjectList