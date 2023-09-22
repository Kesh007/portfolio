import "./index.scss"
import Me from '../../../assets/images/me2.png'

const Logo = () => {
    return (
        <div>
            <img className="solid-logo" src={Me} alt="me" />
        </div>
    );
}

export default Logo;