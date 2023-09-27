
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.css";


const TimeLine = () => {

    return (
        <section className='bg' > 
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work test"
    contentStyle={{ background: '#3D5AF1', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: '#3D5AF1', color: '#fff', 'fontsize':'200px'  }}
  >
    <h3 className="vertical-timeline-element-title" h3 style={{ fontSize: "50px", class:"text-center"}} >Timeline</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="28 oct"
    iconStyle={{ background: '#E2F3F5', color: '#E2F3F5' }}
  >
    <h3 className="vertical-timeline-element-title">.......</h3>
    <h4 className="vertical-timeline-element-subtitle">.......</h4>
    <p>
      ...........
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="29 oct"
    iconStyle={{ background: '#0E153A', color: '#E2F3F5' }}
  >
    <h3 className="vertical-timeline-element-title">......</h3>
    <h4 className="vertical-timeline-element-subtitle">........</h4>
    <p>
      ........
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="heading"
    iconStyle={{ background: '#E2F3F5', color: '#E2F3F5' }}
  >
    <h3 className="vertical-timeline-element-title">.......</h3>
    <h4 className="vertical-timeline-element-subtitle">........</h4>
    <p>
      .........
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="heading"
    iconStyle={{ background: '#3D5AF1', color: '#E2F3F5' }}
  >
    <h3 className="vertical-timeline-element-title">........</h3>
    <h4 className="vertical-timeline-element-subtitle">........</h4>
    <p>
      .......
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: '#E2F3F5', color: '#E2F3F5' }}
  >
    <h3 className="vertical-timeline-element-title">.......</h3>
    <h4 className="vertical-timeline-element-subtitle">.......</h4>
    <p>
      ........
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>

    
            
        </section>)
}


export default TimeLine;