import classNames from 'classnames/bind';
import style from './ProductTagItem.module.scss';
import Button from '../Button';
import CartResult from '../CartResult';
import TagProduct from '../TagProduct';

const cx = classNames.bind(style);

function ProductTag({ datas, name }) {
    return (
        <div className={cx('sidebar-product')}>
            <h1 className={cx('header-sidebar')}>{name}</h1>

            {datas.map((data) => (
                <div key={data.id} className={cx('product-item')}>
                    <TagProduct data={data} />
                </div>
            ))}
        </div>
    );
}

export default ProductTag;
