// Write your code here
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectsDetails} = props
  const {
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = projectsDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="h1-duration">
        <h1>{projectTitle}</h1>
        <div className="project-duration">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
