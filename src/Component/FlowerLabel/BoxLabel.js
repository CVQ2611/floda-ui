import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './FlowerLabel.module.scss';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(style);

function BoxLabel({ item }) {
    const [hover, setHover] = useState(false);
    const image = {
        backgroundImage: `url(${item.url})`,
    };
    const handleOver = () => {
        setHover(true);
    };
    const handleOut = () => {
        setHover(false);
    };
    return (
        <div onMouseOver={handleOver} onMouseOut={handleOut} className={cx('box')} style={image}>
            <div className={cx('box-container')}>
                <div className={cx('box-slogan')}>{item.slogan}</div>
                <div className={cx('box-name')}>{item.name}</div>
                <div className={cx('box-button')}>
                    <Button active={hover} textCenter to={item.to}>
                        Mua ngay
                    </Button>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

BoxLabel.propTypes = {
    item: PropTypes.object,
};

export default BoxLabel;
