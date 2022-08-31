import Button from '~/Component/Button';
import classNames from 'classnames/bind';
import style from './SidebarButton.module.scss';
const cx = classNames.bind(style);

function SidebarButton({ datas, name }) {
    return (
        <div className={cx('sidebar-button')}>
            <h1 className={cx('header-sidebar')}>{name}</h1>
            <ul className={cx('button-list')}>
                {datas.map((button, index) => (
                    <li className={cx('button-item')} key={index}>
                        <Button to={button.to} active sidebar={true}>
                            {button.title}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarButton;
