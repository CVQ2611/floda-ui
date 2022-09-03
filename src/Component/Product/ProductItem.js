import Proptypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import style from './Product.module.scss';

const cx = classNames.bind(style);
function ProductItem({ item }) {
    const [blockBox, setBlockBox] = useState(false);
    const [likeActive, setLikeActive] = useState(false);

    const classes = cx('product-like-btn', { blockBox, likeActive });
    // lấy link ảnh
    const image = {
        backgroundImage: `url(${item.src})`,
    };
    // check hiện loại giá
    let basePriceStyle = {};
    let salePriceStyle = {};
    if (item.sale) {
        basePriceStyle = {
            textDecoration: 'line-through',
            opacity: 0.6,
        };
        salePriceStyle = {
            display: 'block',
        };
    }

    // hover hiện nút like
    const handleOver = () => {
        setBlockBox(true);
    };

    const handleOut = () => {
        setBlockBox(false);
    };
    //  Click like -- KHi click like thif trong page like nhận được product
    const handleClickLike = () => {
        if (likeActive) {
            setLikeActive(false);
        } else {
            setLikeActive(true);
        }
    };

    return (
        <div className={cx('product')} onMouseOver={handleOver} onMouseOut={handleOut}>
            <div className={cx('tag-sale')}>
                {item.sale}% <br></br> Giảm{' '}
            </div>
            <Button product={true} to={item.to}>
                <div className={cx('product-img')} style={image}></div>
            </Button>
            <div className={classes} onClick={handleClickLike}>
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <Button className={cx('product-name')} href={item.to}>
                {item.name}
            </Button>
            <div className={cx('product-price')}>
                <span className={cx('price-base')} style={basePriceStyle}>
                    {item.prive}đ
                </span>
                <span className={cx('price-sale')} style={salePriceStyle}>
                    {item.prive - (item.sale * item.prive) / 100}đ
                </span>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    item: Proptypes.object.isRequired,
};

export default ProductItem;
