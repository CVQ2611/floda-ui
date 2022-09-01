import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import InputItem from '../InputItem';
import style from './FormInput.module.scss';
const cx = classNames.bind(style);

function FormInput({ create, signIn }) {
    const [values, setValues] = useState({
        userName: '',
        password: '',
        confirmpassword: '',
    });

    const creates = [
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
            type: '',
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
            type: 'text',
            label: 'Xác nhận mật khẩu của bạn!',
            errorMessage: 'Mật Khẩu nhập lại không giống!',
            required: true,
            pattern: values.password,
        },
    ];

    const signIns = [
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    if (create) {
        return (
            <form onSubmit={handleSubmit} className={cx('wrapper')}>
                <div className={cx('header')}>ĐĂNG KÝ</div>
                {creates.map((input) => (
                    <InputItem key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <span className={cx('button')}>
                    <Button primary>Submit</Button>
                </span>
            </form>
        );
    } else if (signIn) {
        return (
            <form onSubmit={handleSubmit} className={cx('wrapper')}>
                <div className={cx('header')}>ĐĂNG NHẬP</div>
                {signIns.map((input) => (
                    <InputItem key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <span className={cx('button')}>
                    <Button primary>Submit</Button>
                </span>
            </form>
        );
    }
}

export default FormInput;
