// Write your code here
// Write your code here

import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'
import {CourseTagItem, CourseItem} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div className="h1-duration">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p>{duration}</p>
        </div>
      </div>

      <p className="course-des">{description}</p>
      <ul className="tagsList">
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseItem>{eachTag.name}</CourseItem>
          </CourseTagItem>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
