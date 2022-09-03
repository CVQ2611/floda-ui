import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NewsItem from '../NewsItem';
import style from './ListNews.module.scss';
const cx = classNames.bind(style);

function ListNews({ datas }) {
    return (
        <div className={cx('list-news')}>
            {datas.map((data) => (
                <NewsItem key={data.id} item={data} />
            ))}
        </div>
    );
}

ListNews.propTypes = {
    datas: PropTypes.array.isRequired,
};

export default ListNews;
