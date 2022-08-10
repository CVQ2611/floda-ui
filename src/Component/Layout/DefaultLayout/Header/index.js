import style from './Header.module.scss';
import classNames from 'classnames/bind';
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
                            {/* icon */}
                        </div>
                        <div className={cx('header-social-list')}>
                            <span className={cx('header-social-item')}>{/* icon */}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-main')}></div>
        </header>
    );
}

export default Header;
