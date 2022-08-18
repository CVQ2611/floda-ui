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
// import Button from '~/Component/Button';
import React from 'react';
// import { Wrapper as PoperWrapper } from '~/Component/Poper';
import Language from '~/Component/Poper/Language';
import MenuButton from '~/Component/Poper/MenuButton';
import Search from '~/Component/Poper/Search';
import UserCart from '~/Component/Poper/UserCart';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        title: 'English',
    },
    {
        title: 'Vietnamese',
    },
];

const MENU_BUTTONS = [
    {
        title: 'Hoa Của Mẹ',
        to: '/',
    },
    {
        title: 'Hoa Cưới',
        to: '/',
    },
    {
        title: 'Hoa Sale',
        to: '/',
    },
    {
        title: 'Hoa Tựu Trường',
        to: '/',
    },
    {
        title: 'Hoa Valentine',
        to: '/',
    },
];
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('header-top__content')}>
                    <div className={cx('header-top__content-left')}>
                        <p>Welcome to Floda online store</p>
                    </div>
                    <div className={cx('header-top__content-right')}>
                        <Language items={MENU_ITEMS}>
                            <button className={cx('header-language')}>
                                Language
                                <FontAwesomeIcon icon={faAngleDown} className={cx('header-language-icon')} />
                            </button>
                        </Language>
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
                        <button to={'/'}>TRANG CHỦ</button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <button to={'/introduce'}>GIỚI THIỆU</button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <MenuButton items={MENU_BUTTONS}>
                            <button to={'/shop'}>
                                CỬA HÀNG
                                <FontAwesomeIcon icon={faChevronDown} className={cx('list-btn__item-icon')} />
                            </button>
                        </MenuButton>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <button to={'/news'}>TIN TỨC</button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <button to={'/contact'}>LIÊN HỆ</button>
                    </li>
                </ul>

                <div className={cx('sidebar')}>
                    {/* search */}
                    <Search>
                        <button className={cx('sidebar-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Search>

                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>

                    {/* useCart */}
                    <UserCart>
                        <button className={cx('sidebar-btn')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </UserCart>
                </div>
            </div>
        </header>
    );
}

export default Header;
