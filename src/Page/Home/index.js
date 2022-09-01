import classNames from 'classnames/bind';
import Button from '~/Component/Button';
import FlowerLabel from '~/Component/FlowerLabel';
import LabelIcon from '~/Component/LabelIcon';
import ListProduct from '~/Component/ListProduct/indiex';
import Product from '~/Component/Product';
import Slider from '~/Component/Slider';
import style from './Home.module.scss';
import { LIST_PRODUCT } from '~/Component/Layout/DefaultLayout/Header';
const cx = classNames.bind(style);
const FLOWER_LABEL = [
    {
        id: 1,
        slogan: 'Top Friday',
        name: 'Vang Gold',
        to: '/shop',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda1.jpg',
    },
    {
        id: 2,
        slogan: 'Black Friday',
        name: 'Hoa Lan',
        to: '/shop',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda2.jpg',
    },
    {
        id: 3,
        slogan: '10% Off',
        name: 'Hoa Tulip',
        to: '/shop',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda3.jpg',
    },
];

const FLOWER_LABEL_FORYOU = [
    {
        id: 1,
        slogan: 'For you',
        name: 'Tuylip Tower',
        to: '/shop',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/banner-1.jpg',
    },
    {
        id: 2,
        slogan: 'For you',
        name: 'Flower & box',
        to: '/shop',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/banner-2.jpg',
    },
];

const ICON_LIST = [
    {
        id: 1,
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/free_shipping.png',
        header: 'MIỄN PHÍ VẬN CHUYỂN',
        desc: 'Miễn Phí Tất Cả Đơn Hàng',
    },
    {
        id: 2,
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/support247.png',
        header: 'HỖ TRỢ 24/7',
        desc: 'Hỗ trợ 24 Giờ Một Ngày',
    },
    {
        id: 3,
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/money_back.png',
        header: 'HOÀN TIỀN',
        desc: 'Hoàn Tiền Trong 30 Ngày',
    },
    {
        id: 4,
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/money_back.png',
        header: 'GIẢM GIÁ',
        desc: 'Với Đơn Hàng Trên 1 Triệu',
    },
];

const LIST_PRODUCT_LEAD = [
    {
        id: 1,
        name: 'Hoa Tuy Luýp',
        prive: 240000,
        to: '/shop',
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-11.jpg',
        sale: 50,
    },
    {
        id: 2,
        name: 'Hoa Hồng',
        prive: 260000,
        to: '/shop',
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-8.jpg',
        sale: 30,
    },
    {
        id: 3,
        name: 'Hoa Hướng Dương ',
        prive: 270000,
        to: '/shop',
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-7.jpg',
        sale: 60,
    },
    {
        id: 4,
        name: 'Hoa Lan',
        prive: 280000,
        to: '/shop',
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-10.jpg',
        sale: 80,
    },
];

const LABEL_PRODUCT_NEW = {
    header: 'Sản Phẩm Mới',
    desc: 'Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới',
};

const LABEL_PRODUCT_LEAD = {
    header: 'Sản Phẩm Hàng Đầu',
    desc: 'Những sản phẩm hàng đầu của cửa hàng',
};
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
