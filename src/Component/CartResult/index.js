import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import style from './CartResult.module.scss';

const cx = classNames.bind(style);
function CartResult() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img
                    className={cx('avatar')}
                    src={'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-6.jpg'}
                    alt={'avatar'}
                />
                <div className={cx('info-product')}>
                    <Button className={cx('name-product')}>Hyacinth white stick</Button>
                    <div className={cx('prive-product')}>
                        <span className={cx('has-product')}>1</span> x <span className={cx('one-prive')}>240.000đ</span>
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
