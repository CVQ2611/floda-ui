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
import Button from '~/Component/Button';
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

export const MENU_BUTTONS = [
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

export const LIST_PRODUCT = [
    {
        id: 1,
        name: 'Hoa Tuy Luýp',
        prive: 240000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-11.jpg',
        sale: 50,
    },
    {
        id: 2,
        name: 'Hoa Hồng',
        prive: 260000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-8.jpg',
        sale: 30,
    },
    {
        id: 3,
        name: 'Hoa Hướng Dương ',
        prive: 270000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-7.jpg',
        sale: 60,
    },
    {
        id: 4,
        name: 'Hoa Lan',
        prive: 280000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-10.jpg',
        sale: 80,
    },
    {
        id: 5,
        name: 'Hoa Ly',
        prive: 280000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-11.jpg',
        sale: 80,
    },
    {
        id: 6,
        name: 'Hoa Sen',
        prive: 280000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-10.jpg',
        sale: 80,
    },
    {
        id: 7,
        name: 'Hoa Mai',
        prive: 280000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-7.jpg',
        sale: 80,
    },
    {
        id: 8,
        name: 'Hoa Đào',
        prive: 280000,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-8.jpg',
        sale: 80,
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
                        <span>
                            <Language items={MENU_ITEMS}>
                                <button className={cx('header-language')}>
                                    Language
                                    <FontAwesomeIcon icon={faAngleDown} className={cx('header-language-icon')} />
                                </button>
                            </Language>
                        </span>
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
                    <Button active className={cx('header-main__logo-btn')}>
                        <img src="http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/logo.png" alt="logo" />
                    </Button>
                </div>

                <ul className={cx('list-btn')}>
                    <li className={cx('list-btn__item')}>
                        <Button active to={'/'}>
                            TRANG CHỦ
                        </Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button active to={'/introduce'}>
                            GIỚI THIỆU
                        </Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <div>
                            <MenuButton items={MENU_BUTTONS}>
                                <span>
                                    <Button active to={'/shop'}>
                                        CỬA HÀNG
                                        <FontAwesomeIcon icon={faChevronDown} className={cx('list-btn__item-icon')} />
                                    </Button>
                                </span>
                            </MenuButton>
                        </div>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button active to={'/news'}>
                            TIN TỨC
                        </Button>
                    </li>
                    <li className={cx('list-btn__item')}>
                        <Button active to={'/contact'}>
                            LIÊN HỆ
                        </Button>
                    </li>
                </ul>

                <div className={cx('sidebar')}>
                    {/* search */}
                    <div>
                        <Search products={LIST_PRODUCT}>
                            <button className={cx('sidebar-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Search>
                    </div>

                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>

                    {/* useCart */}
                    <div>
                        <UserCart products={LIST_PRODUCT}>
                            <button className={cx('sidebar-btn')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </UserCart>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
