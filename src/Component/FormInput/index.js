import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import InputItem from '../InputItem';
import style from './FormInput.module.scss';
const cx = classNames.bind(style);

function FormInput({ create, signIn, submit }) {
    const [valuesCreate, setValuesCreate] = useState({
        userName: '',
        password: '',
        confirmpassword: '',
    });

    const [valuesSignIn, setValuesSignIn] = useState({
        userName: '',
        password: '',
    });

    const createsForm = [
        {
            id: 1,
            name: 'userName',
            placeholder: 'Emai của bạn!',
            type: 'email',
            label: 'Địa chỉ email!',
            errorMessage: 'Vui lòng nhập email của bạn!',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Mật Khẩu!',
            type: 'password',
            label: 'Tạo mật khẩu của bạn!',
            errorMessage:
                'Vui lòng nhập mật khẩu phải có 8-20 ký tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!',
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        },
        {
            id: 3,
            name: 'confirmpassword',
            placeholder: 'Nhập lại Mật Khẩu!',
            type: 'password',
            label: 'Xác nhận mật khẩu của bạn!',
            errorMessage: 'Mật Khẩu nhập lại không giống!',
            required: true,
            pattern: valuesCreate.password,
        },
    ];

    const signInsForm = [
        {
            id: 1,
            name: 'userName',
            placeholder: 'Emai của bạn!',
            type: 'email',
            label: 'Địa chỉ email!',
            errorMessage: 'Vui lòng nhập email của bạn!',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Mật Khẩu!',
            type: 'password',
            label: 'Nhập khẩu của bạn!',
            errorMessage:
                'Vui lòng nhập mật khẩu phải có 8-20 ký tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!',
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        },
    ];
    const handleSubmitCreate = (e) => {
        e.preventDefault();
        submit();
        console.log(valuesCreate);
    };

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        submit();
    };

    const onChangeCreate = (e) => {
        setValuesCreate({ ...valuesCreate, [e.target.name]: e.target.value });
    };

    const onChangeSignIn = (e) => {
        setValuesSignIn({ ...valuesSignIn, [e.target.name]: e.target.value });
    };
    if (create) {
        return (
            <form onSubmit={handleSubmitCreate} className={cx('wrapper')}>
                <div className={cx('header')}>ĐĂNG KÝ</div>
                {createsForm.map((input) => (
                    <InputItem key={input.id} {...input} value={valuesCreate[input.name]} onChange={onChangeCreate} />
                ))}
                <span className={cx('button')}>
                    <Button primary>Submit</Button>
                </span>
            </form>
        );
    } else if (signIn) {
        return (
            <form onSubmit={handleSubmitSignIn} className={cx('wrapper')}>
                <div className={cx('header')}>ĐĂNG NHẬP</div>
                {signInsForm.map((input) => (
                    <InputItem key={input.id} {...input} value={valuesSignIn[input.name]} onChange={onChangeSignIn} />
                ))}
                <span className={cx('button')}>
                    <Button primary>Submit</Button>
                </span>
            </form>
        );
    }
}

FormInput.propTypes = {
    create: PropTypes.bool,
    signIn: PropTypes.bool,
    submit: PropTypes.func,
};

export default FormInput;
