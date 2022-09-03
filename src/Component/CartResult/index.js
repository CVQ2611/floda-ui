import PropTypes from 'prop-types';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import TagProduct from '../TagProduct';
import style from './CartResult.module.scss';

const cx = classNames.bind(style);
function CartResult({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <TagProduct data={data} />
                <div className={cx('closer')}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
        </div>
    );
}

CartResult.propTypes = {
    data: PropTypes.object,
};

export default CartResult;
