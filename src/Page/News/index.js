import classNames from 'classnames/bind';
import style from './NewsPage.module.scss';
import HeaderLable from '~/Component/HeaderLabel';
import SidebarButton from '~/Component/SidebarButton';

const NEWS = [
    {
        id: 1,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
    },
    {
        id: 2,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
    },
    {
        id: 3,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
    },
    {
        id: 4,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
    },
    {
        id: 5,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
    },
];

const cx = classNames.bind(style);

function NewsPage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderLable item={data} />
                {/* content */}
                <div className={cx('content')}>
                    <div className={cx('sidebar')}>
                        <SidebarButton datas={NEWS} name={'BÀI VIẾT MỚI'} />
                    </div>
                    <div className={cx('list-product')}>{/* News Component */}</div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;
