// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCards = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectsDetails={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF
            <br />
            <CCBPHeading> CCBP 4.0</CCBPHeading>
          </Heading>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachTimeLine =>
              renderTimeLineCards(eachTimeLine),
            )}
          </Chrono>
        </HeaderContainer>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
