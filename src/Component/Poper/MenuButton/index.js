import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './MenuButton.module.scss';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import MenuItem from './MenuButton';

const cx = classNames.bind(style);
function MenuButton({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('prop-down_btn')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>{renderItems()}</PoperWrapper>
                </div>
            )}
            placement="bottom"
            interactive
        >
            {children}
        </Tippy>
    );
}

export default MenuButton;
