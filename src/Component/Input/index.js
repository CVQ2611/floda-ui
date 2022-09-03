import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import style from './Input.module.scss';

const cx = classNames.bind(style);

function Input({
    isRequire = false,
    isPassWord = false,
    isEmail = false,
    isRePassword = false,
    textInput = false,
    name,
    type,
    placeholder,
    minLenght,
    onBlur,
    password,
    onChange,
}) {
    const ref = useRef(null);
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);

    let Comp = 'input';
    if (textInput) {
        Comp = 'textarea';
    }

    const classesInput = cx('input', {
        focus,
        error,
        textInput,
    });
    const classMessage = cx('message');

    const handleBlur = (e) => {
        setFocus(false);
        if (isRequire) {
            if (value.trim()) {
                // onBlur(value);
            } else {
                setMessage(`Vui lòng nhập đầy đủ ${placeholder}`);
                setError(true);
            }
        } else if (isEmail) {
            //eslint-disable-next-line
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(mailformat)) {
                // onBlur(value);
            } else {
                setMessage(`Vui lòng nhập đầy đủ ${placeholder}`);
                setError(true);
            }
        } else if (isPassWord) {
            if (value.trim().length >= minLenght) {
                // onBlur(value);
            } else {
                setMessage(`Vui lòng nhập ${placeholder} tối thiểu 6 ký tự`);
                setError(true);
            }
        } else if (isRePassword) {
            if (value === password) {
                // onBlur(value);
            } else {
                setMessage('Nội dung nhập không khớp');
                setError(true);
            }
        }
    };
    const handleFocus = () => {
        setMessage('');
        setError(false);
        setFocus(true);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Comp
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    ref={ref}
                    className={classesInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                <span className={classMessage}>{message}</span>
            </div>
        </>
    );
}

Input.propTypes = {
    isRequire: PropTypes.bool,
    isPassWord: PropTypes.bool,
    isEmail: PropTypes.bool,
    isRePassword: PropTypes.bool,
    textInput: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    minLenght: PropTypes.number,
    password: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
};

export default Input;
