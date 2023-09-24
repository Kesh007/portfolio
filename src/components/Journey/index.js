import './index.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { faAmazon } from '@fortawesome/free-brands-svg-icons'

const Journey = () => {
    return (
        <div className="container journey-page">
            <div className="text-zone">
                <h1>My Journey</h1>
                <div className='timeline'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#145259', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #145259' }}
                            date="July 2023 - Present"
                            iconStyle={{ background: '#ffd700', color: '#145259' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">SDE @Crosstown LA</h3>
                            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
                            <p>
                                Web Development, VueJS, NodeJS, HTML, CSS, PostgreSQL
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#145259', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #145259' }}
                            date="May 2022 - Aug 2022"
                            iconStyle={{ background: '#ffd700', color: '#145259' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">SDE Intern @Amazon</h3>
                            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
                            <p>
                                Test Automation, Python, Appium, AWS Pipeline
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Aug 2021 - May 2023"
                            iconStyle={{ background: '#145259', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Master's in CS</h3>
                            <h4 className="vertical-timeline-element-subtitle">University of Southern California, Los Angeles, CA</h4>
                            <p>
                                GPA: 3.95/4.0
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#145259', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #145259' }}
                            date="June 2020 - June 2021"
                            iconStyle={{ background: '#ffd700', color: '#145259' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">SDE @Dure Technologies</h3>
                            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
                            <p>
                                Hybrid App Development, ReactJS, JQuery, Cordova, HTML, CSS, JS
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#145259', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #145259' }}
                            date="Dec 2019 - June 2020"
                            iconStyle={{ background: '#ffd700', color: '#145259' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">SDE Intern @Dure Technologies</h3>
                            <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
                            <p>
                                Image Classification, Python, Tensorflow, OpenCV
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#145259', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #145259' }}
                            date="Feb 2019 - July 2019"
                            iconStyle={{ background: '#ffd700', color: '#145259' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">SDE Intern @Amazon</h3>
                            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
                            <p>
                                Python, AWS Textract
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="July 2016 - June 2020"
                            iconStyle={{ background: '#145259', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor's in CS</h3>
                            <h4 className="vertical-timeline-element-subtitle">vellore Institute of Technology, India</h4>
                            <p>
                                GPA: 9.58/10.0
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </div>
        </div>
    );
}
export default Journey;