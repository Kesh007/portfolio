import './index.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import painting11 from '../../assets/images/paintings/11.jpeg'
import painting10 from '../../assets/images/paintings/10.jpeg'
import painting9 from '../../assets/images/paintings/9.jpeg'
import painting8 from '../../assets/images/paintings/8.jpeg'
import painting7 from '../../assets/images/paintings/7.jpeg'
import painting6 from '../../assets/images/paintings/6.jpeg'
import painting5 from '../../assets/images/paintings/5.jpeg'
import painting3 from '../../assets/images/paintings/3.jpeg'
import painting1 from '../../assets/images/paintings/1.jpeg'

const slideImages = [
    painting9, painting5, painting6, painting11, painting8, painting7, painting10, painting3, painting1
];

const Gallery = () => {
    return (
        <div className="container gallery-page">
            <div className="text-zone">
                <h1>Art Gallery</h1>
                <div className='slide-container'>
                    <Slide>
                        {
                            slideImages.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt='painting'/>)
                        }
                    </Slide>
                </div>
                
            </div>
        </div>
    );
}
export default Gallery;