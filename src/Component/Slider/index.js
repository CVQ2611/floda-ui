import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './Slider.module.scss';
import SliderCont from './SliderCont';

const cx = classNames.bind(style);
const linkImg1 = 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/home1-slide1.jpg';
// const linkImg2 = 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/home1-slide2.jpg';

function Slider() {
    const [image, setImage] = useState(linkImg1);
    // useEffect(() => {
    //     setInterval(() => {
    //         refBaner.current.style.display = 'none';
    //         const show = setTimeout(() => {
    //             if (image === linkImg1) {
    //                 setImage(linkImg2);
    //                 console.log('lan 1' + 1);
    //             } else {
    //                 setImage(linkImg1);
    //                 console.log('lan 2' + 1);
    //             }
    //             refBaner.current.style.display = 'block';
    //         }, 1);
    //     }, 5000);
    // }, [image]);
    return (
        <div className={cx('banner')}>
            <SliderCont img={image} />
        </div>
    );
}

export default Slider;
