// Write your code here
import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

class ProjectTimelineCard extends Component {
  render() {
    const {projectData} = this.props
    const {
      title,
      projectTitle,
      imageUrl,
      description,
      duration,
      projectUrl,
    } = projectData
    return (
      <div className="project-container">
        <img src={imageUrl} className="project-img" alt="project" />
        <div className="project-headings">
          <h1 className="proj-heading">{projectTitle}</h1>
          <div className="proj-icon-container">
            <AiFillCalendar />
            <p className="proj-duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="link">
          Visit
        </a>
      </div>
    )
  }
}

export default ProjectTimelineCard
