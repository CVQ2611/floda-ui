import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
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

export default CartResult;
