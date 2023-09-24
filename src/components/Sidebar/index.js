import "./index.scss";
import { useState } from 'react'
import LogoK from '../../assets/images/logo-k-dark.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHome, faUser, faBars, faClose, faSuitcase, faMap, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
    <div className="nav-bar">
        <Link className="logo" to="/portfolio/" onClick={() => setShowNav(false)}>
            <img src={LogoK} alt="Logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeClassName="active" to="/portfolio/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#012226"/>
            </NavLink>
            <NavLink activeClassName="active" className="about-link" to="/portfolio/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#012226"/>
            </NavLink>
            <NavLink activeClassName="active" className="skills-link" to="/portfolio/skills" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#012226"/>
            </NavLink>
            <NavLink activeClassName="active" className="journey-link" to="/portfolio/journey" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faMap} color="#012226"/>
            </NavLink>
            <NavLink activeClassName="active" className="gallery-link" to="/portfolio/gallery" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faPalette} color="#012226"/>
            </NavLink>
            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/keshika-tank/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color="#012226" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Kesh007" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} color="#012226" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a href="https://leetcode.com/Keshika/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faCode} color="#012226" className="anchor-icon" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
        
    </div>
    )
}

export default Sidebar;