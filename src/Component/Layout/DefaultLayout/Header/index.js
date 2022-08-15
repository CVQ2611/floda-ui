import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Button from '~/Component/Button/Button';

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
                            <Tippy
                                render={(attrs) => (
                                    <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                        Facebook
                                    </div>
                                )}
                            >
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faFacebookF} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                            <Tippy
                                render={(attrs) => (
                                    <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                        Instagram
                                    </div>
                                )}
                            >
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faInstagram} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                            <Tippy
                                render={(attrs) => (
                                    <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                        Twitter
                                    </div>
                                )}
                            >
                                <button className={cx('btn')}>
                                    <FontAwesomeIcon icon={faTwitter} className={cx('header-social-item')} />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-main')}>
                <button className={cx('header-main__logo')}>
                    <img src="http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/logo.png" alt="logo" />
                </button>

                <ul className={cx('list-btn')}>
                    <li className={cx('list-btn__item')}>
                        <Button>Trang chủ</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button>Giới thiệu</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button>Cửa hàng</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button>Tin tức</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button>Liên hệ</Button>
                    </li>
                </ul>

                <div className={cx('sidebar')}>Side bar</div>
            </div>
        </header>
    );
}

export default Header;
