import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('header-top__content')}>
                    <div className={cx('header-top__content-left')}>
                        <p>Welcome to Floda online store</p>
                    </div>
                    <div className={cx('header-top__content-right')}>
                        <div className={cx('header-language')}>
                            Language
                            <FontAwesomeIcon icon={faAngleDown} className={cx('header-language-icon')} />
                        </div>
                        <div className={cx('header-social-list')}>
                            <Tippy content="Facebook">
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faFacebookF} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                            <Tippy content="Instagram">
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faInstagram} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                            <Tippy content="Twitter">
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faTwitter} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-main')}>
                <button className={cx('btn')}>
                    <img src="http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/logo.png" alt="logo" />
                </button>
            </div>
        </header>
    );
}

export default Header;
