import classNames from 'classnames/bind';
import style from './LabelIcon.module.scss';
const cx = classNames.bind(style);
function BoxIcon({ item = [] }) {
    return (
        <div className={cx('box')}>
            <div className={cx('box-icon')}>
                <img src={item.url} alt={item.header} />
            </div>
            <div className={cx('box-title')}>
                <div className={cx('box-header')}>{item.header}</div>
                <div className={cx('box-desc')}>{item.desc}</div>
            </div>
        </div>
    );
}

export default BoxIcon;
