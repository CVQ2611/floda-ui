import classNames from 'classnames/bind';
import style from './Form.module.scss';
const cx = classNames.bind(style);

function Form() {
    return (
        <div className={cx('form')}>
            <div className={cx('form-1')}>
                <input />
                <input />
            </div>
            <div className={cx('form-2')}>
                <input />
                <input />
            </div>
            <div className={cx('form-3')}>
                <input />
            </div>
        </div>
    );
}

export default Form;
