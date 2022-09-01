import classNames from 'classnames/bind';
import { useState } from 'react';
import Input from '../Input';
import style from './Form.module.scss';
import Button from '../Button';
const cx = classNames.bind(style);
function Form() {
    const [values, setValues] = useState({
        usename: '',
        email: '',
        phonenumber: '',
        address: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Succes!');
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <form className={cx('form')} onSubmit={handleSubmit}>
            <div className={cx('form-1')}>
                <Input
                    name={'usename'}
                    type={'text'}
                    placeholder={'Họ và tên'}
                    isRequire
                    value={values.usename}
                    onChange={onChange}
                />
                <Input name={'email'} type={'email'} placeholder={'Emai của bạn'} isEmail />
            </div>
            <div className={cx('form-2')}>
                <Input name={'phonenumber'} type={'phone'} placeholder={'Số điện thoại của bạn'} />
                <Input name={'address'} type={'text'} placeholder={'Nhập địa chỉ của bạn'} />
            </div>
            <div className={cx('form-3')}>
                <Input name={'message'} textInput isRequire type={'text'} placeholder={'Lời nhắn của bạn'} />
            </div>
            <span className={cx('button')}>
                <Button primary large={true}>
                    Gửi
                </Button>
            </span>
        </form>
    );
}

export default Form;
