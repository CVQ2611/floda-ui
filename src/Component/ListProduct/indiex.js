import classNames from 'classnames/bind';
import style from './ListProduct.module.scss';

const cx = classNames.bind(style);
function ListProduct({ children, datas = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header-name')}>{datas.header}</div>
                    <div className={cx('header-title')}>{datas.desc}</div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ListProduct;
