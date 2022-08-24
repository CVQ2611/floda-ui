import classNames from 'classnames/bind';
import BoxLabel from './BoxLabel';
import style from './FlowerLabel.module.scss';

const cx = classNames.bind(style);

function FlowerLabel({ datas = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contai')}>
                {datas.map((data) => (
                    <BoxLabel key={data.id} item={data} />
                ))}
            </div>
        </div>
    );
}

export default FlowerLabel;
