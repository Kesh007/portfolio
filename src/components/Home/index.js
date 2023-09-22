import LogoK from '../../assets/images/logo-k-light.png'
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoK} alt="developer" />eshika
                <br/>
                Software Engineer
                </h1>
                <h2>Frontend Developer / Full Stack Developer / Artist</h2>
                <div>
                    <a className="flat-button" href="https://kesh007.github.io/resume/" rel="noreferrer" target="_blank">
                        My Resume
                    </a>
                    <a className="social-icon" href="https://www.linkedin.com/in/keshika-tank/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color="#ffd700" className="anchor-icon"/>
                    </a>
                    <a className="social-icon" href="https://leetcode.com/Keshika/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faCode} color="#ffd700" className="anchor-icon" />
                    </a>
                </div>
            </div>
            <Logo />
        </div>
    );
}
export default Home;