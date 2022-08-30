import classNames from 'classnames/bind';
import style from './IntroduceContent.module.scss';

const cx = classNames.bind(style);

function IntroItem({ datas = [] }) {
    return (
        <div className={cx('side-content')}>
            {datas.map((data) => (
                <div key={data.id} className={cx('container')}>
                    <img src={data.src} alt={'anh'} />
                    <h1 className={cx('icon-header')}>{data.iconHeader}</h1>
                    <p className={cx('icon-desc')}>{data.iconDecs}</p>
                </div>
            ))}
        </div>
    );
}

export default IntroItem;
