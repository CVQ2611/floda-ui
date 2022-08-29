import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Adress from '~/Component/Adress';
import Button from '~/Component/Button';
import style from '~/Component/Layout/DefaultLayout/Footer/Footer.module.scss';
import { publicPage } from '~/Routes';
import { MENU_BUTTONS } from '../Header';

const cx = classNames.bind(style);
const LIST_SERVICE_LINK = [
    {
        id: 1,
        to: '/',
        name: 'Tài khoản',
    },
    {
        id: 2,
        to: '/',
        name: 'Địa Chỉ Cửa Hàng',
    },
    {
        id: 3,
        to: '/',
        name: 'Theo Dõi Đơn Hàng',
    },
    {
        id: 4,
        to: '/',
        name: 'Hướng Dẫn',
    },
    {
        id: 5,
        to: '/contact',
        name: 'Liên Hệ',
    },
];

const CONTACT_SHOP = [
    {
        icon: faLocationDot,
        type: 'Địa chỉ',
        contact: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM',
    },
    {
        icon: faPhone,
        type: 'Điện Thoại',
        contact: '(012) 800 456 789-987',
    },
    {
        icon: faEnvelope,
        type: 'Mail',
        contact: 'yourmail@gmail.com',
    },
];
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('contact-shop')}>
                    <p className={cx('header')}>Liên Hệ</p>
                    <Adress item={CONTACT_SHOP} />
                </div>
                <div className={cx('label-page')}>
                    <p className={cx('header')}>Danh Mục</p>
                    <ul>
                        {MENU_BUTTONS.map((button, index) => (
                            <li key={index}>
                                <Button to={button.to} active footer={true}>
                                    {button.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('label-page', 'menu-page')}>
                    <p className={cx('header')}>Menu</p>
                    <ul>
                        {publicPage.map((page, index) => (
                            <li key={index}>
                                <Button to={page.path} active footer={true}>
                                    {page.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('label-page')}>
                    <p className={cx('header')}>Liên kết</p>
                    <ul>
                        {LIST_SERVICE_LINK.map((page, index) => (
                            <li key={index}>
                                <Button to={page.to} active footer={true}>
                                    {page.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx('cre')}>
                Mẫu trang Web gốc tại: <a href="http://mauweb.monamedia.net/floda/">Mona Media</a>
            </div>
        </div>
    );
}

export default Footer;
