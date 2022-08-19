import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import style from './CartResult.module.scss';

const cx = classNames.bind(style);
function CartResult({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('avatar')}>
                    <img src={data.src} alt={data.name} />
                </div>
                <div className={cx('info-product')}>
                    <Button className={cx('name-product')}>{data.name}</Button>
                    <div className={cx('prive-product')}>
                        <span className={cx('has-product')}>1</span> x{' '}
                        <span className={cx('one-prive')}>{data.prive - (data.sale * data.prive) / 100}đ</span>
                    </div>
                </div>
                <div className={cx('closer')}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
        </div>
    );
}

export default CartResult;
