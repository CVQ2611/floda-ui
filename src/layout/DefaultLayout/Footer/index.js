import classNames from 'classnames/bind';
import Adress from '~/Component/Adress';
import Button from '~/Component/Button';
import style from '~/layout/DefaultLayout/Footer/Footer.module.scss';
import { publicPage } from '~/Routes';
import { MENU_BUTTONS } from '~/Data';
import { LIST_SERVICE_LINK } from '~/Data';
import { CONTACT_SHOP } from '~/Data';

const cx = classNames.bind(style);

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
