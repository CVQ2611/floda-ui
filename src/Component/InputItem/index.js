import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './InputItem.module.scss';
const cx = classNames.bind(style);

function InputItem(props) {
    const { label, palaceholder, id, errorMessage, type, ...inputProps } = props;
    const [focus, setFocus] = useState(false);

    const onBlur = () => {
        setFocus(true);
    };
    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')}>{label}</label>
            <input
                className={cx('input')}
                name={props.name}
                onChange={props.onChange}
                type={props.type}
                {...inputProps}
                onBlur={onBlur}
                onFocus={() => inputProps.name === 'confirmpassword' && setFocus(true)}
                focus={focus.toString()}
            />
            <span className={cx('error-message')}>{props.errorMessage}</span>
        </div>
    );
}

export default InputItem;
