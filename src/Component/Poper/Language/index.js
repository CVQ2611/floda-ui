import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Language.module.scss';
import { Wrapper as PoperWrapper } from '~/Component/Poper';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);
function Language({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    };
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('button-change-language')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>{renderItems()}</PoperWrapper>
                </div>
            )}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    );
}
Language.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array.isRequired,
};

export default Language;
