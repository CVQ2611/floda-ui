import classNames from 'classnames/bind';
import style from './ContactContai.module.scss';
import Map from '~/Component/Map';
import Adress from '../Adress';
import Form from '../Form';
import { CONTACT_SHOP } from '~/Data';

const cx = classNames.bind(style);

function ContactContai() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('map')}>
                <Map />
            </div>
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
