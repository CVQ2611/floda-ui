import classNames from 'classnames/bind';
import style from './SidebarButton.module.scss';
import MenuItem from '../Poper/MenuButton/MenuButton';
import TagDate from '../TagDate';
const cx = classNames.bind(style);

function SidebarButton({ datas, name }) {
    return (
        <div className={cx('sidebar-button')}>
            <h1 className={cx('header-sidebar')}>{name}</h1>
            <ul className={cx('button-list')}>
                {datas.map((data, index) => {
                    if (data.day) {
                        return (
                            <li className={cx('button-item')} key={index}>
                                <span className={cx('tag-date')}>
                                    <TagDate data={data} />
                                </span>
                                <MenuItem data={data} />
                            </li>
                        );
                    } else {
                        return (
                            <li className={cx('button-item')} key={index}>
                                <MenuItem data={data} />
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default SidebarButton;
