import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import CartResult from '~/Component/CartResult';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import style from './UserCart.module.scss';
import Button from '~/Component/Button';
// import { useEffect, useState } from 'react';

const cx = classNames.bind(style);
function UserCart({ children, products }) {
    // const [itemCart, setItemCart] = useState([]);
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        {products.map((product) => (
                            <CartResult key={product.id} data={product} />
                        ))}
                        <div className={cx('total')}>
                            <span className={cx('total-label')}>Tạm tính: </span>
                            <span className={cx('total-prive')}>
                                {products.prive - (products.sale * products.prive) / 100}đ
                            </span>
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

UserCart.propTypes = {
    children: PropTypes.node,
    products: PropTypes.array.isRequired,
};

export default UserCart;
