import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BoxIcon from './BoxIcon';
import style from './LabelIcon.module.scss';
const cx = classNames.bind(style);

function LabelIcon({ datas = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {datas.map((data) => (
                    <BoxIcon key={data.id} item={data} />
                ))}
            </div>
        </div>
    );
}
LabelIcon.propTypes = {
    datas: PropTypes.array.isRequired,
};
export default LabelIcon;
