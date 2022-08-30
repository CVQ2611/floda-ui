import classNames from 'classnames/bind';
import { useState } from 'react';
import Input from '../Input';
import style from './Form.module.scss';
import Button from '../Button';
const cx = classNames.bind(style);
function Form() {
    const [data, setData] = useState([]);
    // console.log(data);
    // lấy ra dât từ input
    const getData = (item) => {
        setData((prev) => [...prev, item]);
    };
    const handleSubmit = (e) => {
        alert(`Submit Succes: ${data}`);
        e.preventDefault();
    };
    return (
        <div className={cx('form')}>
            <div className={cx('form-1')}>
                <Input type={'text'} placeholder={'Họ và tên'} isRequire onBlur={getData} />
                <Input type={'email'} placeholder={'Emai của bạn'} isEmail onBlur={getData} />
            </div>
            <div className={cx('form-2')}>
                <Input type={'phone'} placeholder={'Số điện thoại của bạn'} />
                <Input type={'text'} placeholder={'Nhập địa chỉ của bạn'} />
            </div>
            <div className={cx('form-3')}>
                <Input textInput isRequire type={'text'} placeholder={'Lời nhắn của bạn'} onBlur={getData} />
            </div>
            <span className={cx('button')}>
                <Button primary large={true} onClick={handleSubmit}>
                    Gửi
                </Button>
            </span>
        </div>
    );
}

export default Form;
