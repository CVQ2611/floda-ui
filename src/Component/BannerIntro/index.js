import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './BannerIntro.module.scss';
const cx = classNames.bind(style);

function BannerIntro({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <span className={cx('fill')}></span>
            </div>
            <div className={cx('title')}>
                <h1 className={cx('header')}>{item}</h1>
                <span>Trang Chủ</span>/<span className={cx('desc')}>{item}</span>
            </div>
        </div>
    );
}

BannerIntro.propTypes = {
    item: PropTypes.string.isRequired,
};
export default BannerIntro;
