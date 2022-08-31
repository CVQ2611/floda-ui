import classNames from 'classnames/bind';
import style from './SidebarButton.module.scss';
import MenuItem from '../Poper/MenuButton/MenuButton';
const cx = classNames.bind(style);

function SidebarButton({ datas, name }) {
    return (
        <div className={cx('sidebar-button')}>
            <h1 className={cx('header-sidebar')}>{name}</h1>
            <ul className={cx('button-list')}>
                {datas.map((button, index) => (
                    <li className={cx('button-item')} key={index}>
                        <MenuItem data={button} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarButton;
