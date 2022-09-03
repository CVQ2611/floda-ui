import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Product.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(style);
function Product({ datas = [] }) {
    return (
        <>
            <div className={cx('content')}>
                {datas.map((data) => (
                    <ProductItem key={data.id} item={data} />
                ))}
            </div>
        </>
    );
}

Product.propTypes = {
    datas: PropTypes.array.isRequired,
};

export default Product;
