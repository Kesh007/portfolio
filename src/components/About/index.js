import './index.scss'
import { NavLink } from 'react-router-dom'
import {
    faJava,
    faJsSquare,
    faNodeJs,
    faPython,
    faReact,
    faVuejs,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>About Me</h1>
                <p>I'm Keshika Tank, a dedicated and versatile Software Engineer with a Master's in Computer Science from USC.
                 My passion lies in solving real-world challenges using technology. 
                 </p>
                 <p>
                 Proficient in Java, Python, React, and more, 
                 I excel in developing dynamic applications. From developing automation frameworks at Amazon to React webapps 
                 and voice assistants at Dure Technologies, I thrive in fast-paced environments. 
                 </p>
                <p>
                  With a strong desire to learn and adapt, I'm eager to contribute my skills to impactful projects.
                  My goal is to create innovative solutions that positively impact people's lives and society as a whole.
                </p>
                <NavLink activeClassName="active" className="flat-button" to="/portfolio/journey" >
                    My Journey
                </NavLink>
            </div>
            <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                <FontAwesomeIcon icon={faJava} color='#ffd700'/>
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faNodeJs} color='#ffd700'/>
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faVuejs} color='#145259'/>
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color='#145259'/>
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color='#145259'/>
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faPython} color='#ffd700'/>
                </div>
            </div>
            </div>
        </div>
    );
}
export default About;