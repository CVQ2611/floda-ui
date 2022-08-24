import classNames from 'classnames/bind';
import FlowerLabel from '~/Component/FlowerLabel';
import LabelIcon from '~/Component/LabelIcon';
import Slider from '~/Component/Slider';
import style from './Home.module.scss';

const cx = classNames.bind(style);
const FLOWER_LABEL = [
    {
        id: 1,
        slogan: 'Top Friday',
        name: 'Vang Gold',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda1.jpg',
    },
    {
        id: 2,
        slogan: 'Black Friday',
        name: 'Hoa Lan',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda2.jpg',
    },
    {
        id: 3,
        slogan: '10% Off',
        name: 'Hoa Tulip',
        url: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/img1-top-floda3.jpg',
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
function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <FlowerLabel datas={FLOWER_LABEL} />
            <LabelIcon datas={ICON_LIST} />
        </div>
    );
}

export default HomePage;
