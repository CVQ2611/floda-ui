import classNames from 'classnames/bind';
import style from './TagProduct.module.scss';
import Button from '../Button';

const cx = classNames.bind(style);

function TagProduct({ data }) {
    return (
        <>
            <div className={cx('avatar')}>
                <img src={data.src} alt={data.name} />
            </div>
            <div className={cx('info-product')}>
                <Button className={cx('name-product')}>{data.name}</Button>
                <div className={cx('prive-product')}>
                    <span className={cx('one-prive')}>{data.prive - (data.sale * data.prive) / 100}đ</span>
                </div>
            </div>
        </>
    );
}

export default TagProduct;
