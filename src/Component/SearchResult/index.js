import classNames from 'classnames/bind';
import style from './SearchResult.module.scss';

const cx = classNames.bind(style);

function SearchResult({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={data.src} alt={data.name} />
            </div>
            <div className={cx('name-product')}>{data.name}</div>
            <div className={cx('prive-product')}>
                <span className={cx('base-prive')}>{data.prive}đ</span>
                <span className={cx('sale-prive')}>{data.prive - (data.sale * data.prive) / 100}đ</span>
            </div>
        </div>
    );
}

export default SearchResult;
