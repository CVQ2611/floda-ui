import classNames from 'classnames/bind';
import style from './Product.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(style);
function Product({ datas = [] }) {
    return (
        <>
            <div className={cx('header')}>
                <div className={cx('header-name')}>Sản Phẩm Mới</div>
                <div className={cx('header-title')}>Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới</div>
            </div>
            <div className={cx('content')}>
                {datas.map((data) => (
                    <ProductItem key={data.id} item={data} />
                ))}
            </div>
        </>
    );
}

export default Product;
