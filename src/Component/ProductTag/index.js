import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './ProductTagItem.module.scss';
import TagProduct from '../TagProduct';

const cx = classNames.bind(style);

function ProductTag({ datas, name }) {
    return (
        <div className={cx('sidebar-product')}>
            <h1 className={cx('header-sidebar')}>{name}</h1>
            <ul className={cx('button-list')}>
                {datas.map((data) => (
                    <li key={data.id} className={cx('product-item')}>
                        <TagProduct data={data} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
ProductTag.propTypes = {
    datas: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};

export default ProductTag;
