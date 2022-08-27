import classNames from 'classnames/bind';
import style from './ListProduct.module.scss';

const cx = classNames.bind(style);
function ListProduct({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default ListProduct;
