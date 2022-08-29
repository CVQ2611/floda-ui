import classNames from 'classnames/bind';
import style from './ContactContai.module.scss';
import Map from '~/Component/Map';
import Adress from '../Adress';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Form from '../Form';

const cx = classNames.bind(style);
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

function ContactContai() {
    return (
        <div className={cx('wrapper')}>
            <Map />
            <div className={cx('info')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <img src="http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/logo.png" alt="logo" />
                    </div>
                    <div className={cx('contact')}>
                        <Adress item={CONTACT_SHOP} />
                    </div>
                </div>
                <div className={cx('slogan')}>LIÊN HỆ VỚI CHÚNG TÔI</div>
                <Form />
            </div>
        </div>
    );
}

export default ContactContai;
