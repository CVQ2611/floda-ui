import classNames from 'classnames/bind';
import style from './Slider.module.scss';
import Button from '../Button';

const cx = classNames.bind(style);

function SliderCont({ img }) {
    const image = {
        backgroundImage: `url(${img})`,
    };

    return (
        <>
            <div className={cx('banner-img')} style={image}></div>
            <div className={cx('banner-label')}>
                <div className={cx('banner-label__content')}>
                    <div className={cx('banner-label__content-animation')}>
                        <div className={cx('banner-label__content-header')}>Món quà Valentine</div>
                        <div className={cx('banner-label__content-desc')}>
                            Thay Đổi Suy Nghĩ <br></br>và Cảm Nhận Tình Yêu
                        </div>
                        <Button primary medium to={'/shop'}>
                            Mua Ngay
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default SliderCont;
