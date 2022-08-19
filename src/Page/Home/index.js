import classNames from 'classnames/bind';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner-img', 'img-1')}>
                    <div className={cx('banner-label')}>
                        <div className={cx('banner-label__content')}>
                            <div className={cx('banner-label__content-header')}>Món quà Valentine</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
