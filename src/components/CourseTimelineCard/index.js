// Write your code here
import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

class CourseTimelineCard extends Component {
  render() {
    const {courseData} = this.props
    const {
      id,
      categoryId,
      courseTitle,
      description,
      duration,
      tagsList,
    } = courseData
    return (
      <div className="course-container">
        <div className="heading-container">
          <h1 className="course-heading">{courseTitle}</h1>
          <div className="icon-container">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="desc">{description}</p>
        <ul className="tags-container">
          {tagsList.map(item => (
            <li className="tags-lists" key={item.id}>
              <p className="tag-item">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CourseTimelineCard
