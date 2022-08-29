import classNames from 'classnames/bind';
import BannerIntro from '~/Component/BannerIntro';
import ContactContai from '~/Component/ContactContai';
import style from './Contact.module.scss';
const cx = classNames.bind(style);
function ContactPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <BannerIntro item={data} />
            <ContactContai />
        </div>
    );
}

export default ContactPage;
