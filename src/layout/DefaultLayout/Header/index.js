import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCartShopping,
    faChevronDown,
    faChevronUp,
    faHeart,
    faMagnifyingGlass,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Button from '~/Component/Button';
import React, { useEffect } from 'react';
// import { Wrapper as PoperWrapper } from '~/Component/Poper';
import Language from '~/Component/Poper/Language';
import MenuButton from '~/Component/Poper/MenuButton';
import Search from '~/Component/Poper/Search';
import UserCart from '~/Component/Poper/UserCart';
import FormUserSignIn from '~/Component/FormUserSignIn';
import { useState } from 'react';
import { MENU_ITEMS } from '~/Data';
import { MENU_BUTTONS } from '~/Data';
import { LIST_PRODUCT } from '~/Data';

const cx = classNames.bind(style);

function Header() {
    const [block, setBlock] = useState({
        display: 'none',
    });
    const hidenBlock = () => {
        if (block.display === 'none')
            setBlock({
                display: 'block',
            });
        else {
            setBlock({
                display: 'none',
            });
        }
    };

    const [showTopHeader, setShowTopHeader] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.scrollY > 145) {
                setShowTopHeader(false);
            } else {
                setShowTopHeader(true);
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {
                return 0;
            });
        };
    }, []);

    const backToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={cx('wrapper')}>
            {showTopHeader && (
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
            )}
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
                                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faMagnifyingGlass} />
                            </button>
                        </Search>
                    </div>

                    <button className={cx('sidebar-btn')}>
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faHeart} />
                    </button>
                    {/* user */}
                    <div className={cx('sidebar-btn')}>
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faUser} onClick={hidenBlock} />
                        <FormUserSignIn block={block} onClick={hidenBlock} />
                    </div>

                    {/* useCart */}
                    <div>
                        <UserCart products={LIST_PRODUCT}>
                            <button className={cx('sidebar-btn')}>
                                <FontAwesomeIcon className={cx('sidebar-icon')} icon={faCartShopping} />
                            </button>
                        </UserCart>
                    </div>
                </div>
            </div>

            {!showTopHeader && (
                <span className={cx('back-to-top')}>
                    <Button onClick={backToTop}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </Button>
                </span>
            )}
        </header>
    );
}

export default Header;
