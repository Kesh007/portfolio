import './index.scss'
import { NavLink } from 'react-router-dom'

const Skills = () => {
    return (
        <div className="container skills-page">
            <div className="text-zone">
                <h1>Skills & Hobbies</h1>
                <p> Experienced in latest web development technologies such as <span>React</span>, <span>Vue</span> and <span>Node</span>. 
                Proficient in <span>Java</span>, <span>JavaScript</span>, <span>SQL</span>, <span>Python</span>, <span>HTML</span> and <span>CSS</span>.
                 </p>
                <p>
                I have worked with tools and platforms such as <span>Git</span>, <span>JIRA</span>, <span>Android Studio</span>, <span>Eclipse</span>, <span>Unity</span> etc.
                </p>
                <p>
                    PS: Painting is my hobby! I think my love for art gives me a good sense of design and aesthetics when it comes to UI UX.
                     Check out my art gallery!
                </p>
                <NavLink activeClassName="active" className="flat-button" to="/portfolio/gallery" >
                    My Gallery
                </NavLink>
            </div>
        </div>
    );
}
export default Skills;