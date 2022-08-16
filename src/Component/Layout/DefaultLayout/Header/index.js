import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCartShopping,
    faChevronDown,
    faHeart,
    faMagnifyingGlass,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Button from '~/Component/Button/Button';
import React from 'react';

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
                        <Tippy
                            render={(attrs) => (
                                <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                    ket qua
                                </div>
                            )}
                        >
                            <button className={cx('header-language')}>
                                Language
                                <FontAwesomeIcon icon={faAngleDown} className={cx('header-language-icon')} />
                            </button>
                        </Tippy>
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
                <div className={cx('header-main__logo')}>
                    <button className={cx('header-main__logo-btn')}>
                        <img src="http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/logo.png" alt="logo" />
                    </button>
                </div>

                <ul className={cx('list-btn')}>
                    <li className={cx('list-btn__item')}>
                        <Button to={'/'}>TRANG CHỦ</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button to={'/introduce'}>GIỚI THIỆU</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button to={'/shop'}>
                            <Tippy
                                render={(attrs) => (
                                    <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                        ketqua
                                    </div>
                                )}
                                placement={'bottom'}
                            >
                                <button>
                                    CỬA HÀNG
                                    <FontAwesomeIcon icon={faChevronDown} className={cx('list-btn__item-icon')} />
                                </button>
                            </Tippy>
                        </Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button to={'/news'}>TIN TỨC</Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button to={'/contact'}>LIÊN HỆ</Button>
                    </li>
                </ul>

                <div className={cx('sidebar')}>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                Ket qua search
                            </div>
                        )}
                        placement={'bottom'}
                    >
                        <button className={cx('sidebar-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <Tippy
                        render={(attrs) => (
                            <div className={cx('sub-button')} tabIndex="-1" {...attrs}>
                                Ket qua search
                            </div>
                        )}
                        placement={'bottom'}
                    >
                        <button className={cx('sidebar-btn')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
