import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './NewsPage.module.scss';
import HeaderLable from '~/Component/HeaderLabel';
import SidebarButton from '~/Component/SidebarButton';
import ListNews from '~/Component/ListNews';
import { NEWS } from '~/Data';

const cx = classNames.bind(style);

function NewsPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderLable item={data} />
                <div className={cx('content')}>
                    <div className={cx('sidebar')}>
                        <SidebarButton datas={NEWS} name={'BÀI VIẾT MỚI'} />
                    </div>
                    <ListNews datas={NEWS} />
                </div>
            </div>
        </div>
    );
}

NewsPage.propTypes = {
    data: PropTypes.string.isRequired,
};

export default NewsPage;
