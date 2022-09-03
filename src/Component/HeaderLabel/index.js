import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './HeaderLable.module.scss';

const cx = classNames.bind(style);
function HeaderLable({ item }) {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang chủ /</h1> <span>{item}</span>
        </div>
    );
}
HeaderLable.propTypes = {
    item: PropTypes.string.isRequired,
};
export default HeaderLable;
