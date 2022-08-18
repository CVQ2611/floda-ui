import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import CartResult from '~/Component/CartResult';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import style from './UserCart.module.scss';
import Button from '~/Component/Button';

const cx = classNames.bind(style);
function UserCart({ children }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <CartResult />
                        <div className={cx('total')}>
                            <span className={cx('total-label')}>Tạm tính: </span>
                            <span className={cx('total-prive')}>240.000đ</span>
                        </div>
                        <div className={cx('button')}>
                            <Button primary>XEM GIỎ HÀNG</Button>
                            <Button black>THANH TOÁN</Button>
                        </div>
                    </PoperWrapper>
                </div>
            )}
            placement={'bottom-end'}
            interactive
        >
            {children}
        </Tippy>
    );
}

export default UserCart;
