import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Button from '../Button';
import TagDate from '../TagDate';

import style from './NewsItem.module.scss';

const cx = classnames.bind(style);

function NewsItem({ item }) {
    const imge = {
        backgroundImage: `url('${item.src})`,
    };
    return (
        <div className={cx('wrapper')}>
            <Button product={true} to={item.to}>
                <div className={cx('img')} style={imge}></div>
                <div className={cx('info')}>
                    <div className={cx('title')}>{item.title}</div>
                    <div className={cx('desc')}>{item.desc}</div>
                </div>
            </Button>
            <span className={cx('tag-date')}>
                <TagDate data={item} />
            </span>
        </div>
    );
}

NewsItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default NewsItem;
