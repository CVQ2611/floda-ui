import classNames from 'classnames/bind';
import style from './Map.module.scss';

const cx = classNames.bind(style);
const map = {
    width: '100%',
    height: '100%',
    border: '0',
};

function Map() {
    return (
        <div className={cx('map')}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.440710953922!2d106.65351491431707!3d10.777518762121755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec70272e349%3A0x8ad96775ab043226!2zMzE5IEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgMTUsIFF14bqtbiAxMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1661773120220!5m2!1svi!2s"
                style={map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Map;
