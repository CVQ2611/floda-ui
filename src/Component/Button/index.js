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
    primary,
    black,
    outline,
    small,
    medium,
    large,
    xlarge,
    inList,
    active,
    searchResult,
    product,
    footer,
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
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
