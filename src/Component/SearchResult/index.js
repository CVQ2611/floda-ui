import classNames from 'classnames/bind';
import style from './SearchResult.module.scss';

const cx = classNames.bind(style);

function SearchResult() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/product-11.jpg'}
                alt={'avatar'}
            />
            <div className={cx('name-product')}>Hyacinth white stick</div>
            <div className={cx('prive-product')}>
                <span className={cx('base-prive')}>270.000đ</span>
                <span className={cx('sale-prive')}>250.000đ</span>
            </div>
        </div>
    );
}

export default SearchResult;
