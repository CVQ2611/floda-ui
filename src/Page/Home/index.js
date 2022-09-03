import classNames from 'classnames/bind';
import Button from '~/Component/Button';
import FlowerLabel from '~/Component/FlowerLabel';
import LabelIcon from '~/Component/LabelIcon';
import ListProduct from '~/Component/ListProduct/indiex';
import Product from '~/Component/Product';
import Slider from '~/Component/Slider';
import style from './Home.module.scss';
import { LIST_PRODUCT } from '~/Data';
import { FLOWER_LABEL } from '~/Data';
import { FLOWER_LABEL_FORYOU } from '~/Data';
import { ICON_LIST } from '~/Data';
import { LIST_PRODUCT_LEAD } from '~/Data';
import { LABEL_PRODUCT_NEW } from '~/Data';
import { LABEL_PRODUCT_LEAD } from '~/Data';
const cx = classNames.bind(style);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <FlowerLabel datas={FLOWER_LABEL} />
            <LabelIcon datas={ICON_LIST} />
            <ListProduct datas={LABEL_PRODUCT_NEW}>
                <Product datas={LIST_PRODUCT} />
                <div className={cx('more_button')}>
                    <Button large={true} primary={true} to={'/shop'}>
                        Xem Thêm Sản Phẩm
                    </Button>
                </div>
            </ListProduct>
            <FlowerLabel datas={FLOWER_LABEL_FORYOU} />
            <ListProduct datas={LABEL_PRODUCT_LEAD}>
                <Product datas={LIST_PRODUCT_LEAD} />
            </ListProduct>
        </div>
    );
}

export default HomePage;
