// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  timeLineData = () => {
    const {timelineItemsList} = this.props
    return timelineItemsList.map(item => {
      if (item.categoryId === 'COURSE') {
        return <CourseTimelineCard courseData={item} key={item.id} />
      }
      return <ProjectTimelineCard projectData={item} key={item.id} />
    })
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            className="card"
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            cardWidth={2000}
            scrollable={{scrollbar: true}}
            buttonTexts={{
              first: 'Jump to First',
              last: 'Jump to Last',
              next: 'Next',
              previous: 'Previous',
            }}
            theme={{
              primary: '#2b237c',
              cardBgColor: '#ffffff',
              cardForeColor: 'violet',
              titleColor: '#2b327c',
              titleColorActive: '#2b237c',
            }}
          >
            {this.timeLineData()}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
