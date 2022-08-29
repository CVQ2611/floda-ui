import classNames from 'classnames/bind';
import BannerIntro from '~/Component/BannerIntro';
import style from './Contact.module.scss';
const cx = classNames.bind(style);
function ContactPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <BannerIntro item={data} />
            {/* nooji ung
             */}
        </div>
    );
}

export default ContactPage;
