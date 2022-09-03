import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderLable from '~/Component/HeaderLabel';
import Product from '~/Component/Product';
import style from './ShopPage.module.scss';
import { LIST_PRODUCT } from '~/Data';
import { MENU_BUTTONS } from '~/Data';
import SidebarButton from '~/Component/SidebarButton';
import ProductTag from '~/Component/ProductTag';
const cx = classNames.bind(style);
function ShopPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderLable item={data} />
                {/* content */}
                <div className={cx('content')}>
                    <div className={cx('sidebar')}>
                        <SidebarButton datas={MENU_BUTTONS} name={'DANH MỤC SẢN PHẨM'} />
                        <ProductTag datas={LIST_PRODUCT} name={'DANH MỤC SẢN PHẨM'} />
                    </div>
                    <div className={cx('list-product')}>
                        <Product datas={LIST_PRODUCT} />
                    </div>
                </div>
            </div>
        </div>
    );
}
ShopPage.propTypes = {
    data: PropTypes.string.isRequired,
};

export default ShopPage;
