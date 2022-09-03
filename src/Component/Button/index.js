import PropTypes from 'prop-types';
import styles from '~/Component/Button/Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    link,
    onClick,
    onSubmit,
    children,
    primary = false,
    black = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    xlarge = false,
    inList = false,
    active = false,
    searchResult = false,
    product = false,
    footer = false,
    textCenter = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        black,
        small,
        medium,
        large,
        xlarge,
        inList,
        active,
        searchResult,
        product,
        footer,
        textCenter,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    inList: PropTypes.bool,
    active: PropTypes.bool,
    searchResult: PropTypes.bool,
    product: PropTypes.bool,
    footer: PropTypes.bool,
    textCenter: PropTypes.bool,
};

export default Button;
