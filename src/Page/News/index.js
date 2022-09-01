import classNames from 'classnames/bind';
import style from './NewsPage.module.scss';
import HeaderLable from '~/Component/HeaderLabel';
import SidebarButton from '~/Component/SidebarButton';
import ListNews from '~/Component/ListNews';

const NEWS = [
    {
        id: 1,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner4-1200x630-300x158.jpg',
        title: 'Duis luctus elit nisi, et cursus magna pellentesque non.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
    {
        id: 2,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner-1200x630-300x158.jpg',
        title: 'Mauris tristique pretium tempus. Vestibulum et accumsan magna.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
    {
        id: 3,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/03/banner2-1200x630-300x158.jpg',
        title: 'Aliquam placerat nisl nec imperdiet vehicula. Phasellus tempus ligula id orci finibus feugiat.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
    {
        id: 4,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/04/bg-unnamed-300x158.jpg',
        title: 'In rutrum tempus purus, ut euismod dui facilisis ac. Fusce semper dignissim diam a egestas.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
    {
        id: 5,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/04/bg-green-tree-300x158.jpg',
        title: 'Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
    {
        id: 6,
        src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2018/04/bg-electric-300x158.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus ...',
        day: '08',
        month: 'Th03',
        to: '/',
    },
];

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

export default NewsPage;
