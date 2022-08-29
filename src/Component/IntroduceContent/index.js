import classNames from 'classnames/bind';
import style from './IntroduceContent.module.scss';
import IntroItem from './IntroItem';

const cx = classNames.bind(style);

function IntroduceContent({ item = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('header')}>{item.header}</div>
                <div className={cx('desc')}>{item.title}</div>
            </div>
            <div className={cx('content')}>
                <IntroItem datas={item.leftItem} />
                <div className={cx('center-content')}>
                    <img src={item.centerSrc} />
                </div>
                <IntroItem datas={item.rightItem} />
            </div>
        </div>
    );
}

export default IntroduceContent;
