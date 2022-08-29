import classNames from 'classnames/bind';
import BannerIntro from '~/Component/BannerIntro';
import IntroduceContent from '~/Component/IntroduceContent';
import style from './Introduce.module.scss';

const cx = classNames.bind(style);
const INTRO_ITEM = {
    header: 'Floda',
    title: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.',
    leftItem: [
        {
            id: 1,
            src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/icon-flower-9.svg',
            iconHeader: 'Sản Phẩm Mới',
            iconDecs:
                ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        },
        {
            id: 2,
            src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/icon-flower-1.svg',
            iconHeader: 'Ý Tưởng Mới',
            iconDecs:
                ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        },
    ],
    rightItem: [
        {
            id: 1,
            src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/icon-flower-4.svg',
            iconHeader: 'Phong Cách Mới',
            iconDecs:
                ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        },
        {
            id: 2,
            src: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/icon-flower-3.svg',
            iconHeader: 'Vẻ Đẹp Mới',
            iconDecs:
                ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        },
    ],
    centerSrc: 'http://mauweb.monamedia.net/floda/wp-content/uploads/2019/09/flower-1.png',
};
function IntroducePage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <BannerIntro item={data} />
            <IntroduceContent item={INTRO_ITEM} />
        </div>
    );
}

export default IntroducePage;
