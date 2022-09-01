import classNames from 'classnames/bind';
import style from './TagDate.module.scss';
const cx = classNames.bind(style);

function TagDate({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('day')}>{data.day}</div>
            <div className={cx('month')}>{data.month}</div>
        </div>
    );
}

export default TagDate;
