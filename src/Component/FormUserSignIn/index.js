import PropTypes from 'prop-types';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import FormInput from '../FormInput';
import style from './FormUserSignIn.module.scss';
const cx = classNames.bind(style);

function FormUserSignIn({ block, onClick }) {
    return (
        <div className={cx('wrapper')} style={block}>
            <div className={cx('container')}>
                <div className={cx('sign-in')}>
                    <FormInput create submit={onClick} />
                </div>
                <div className={cx('create')}>
                    <FormInput signIn submit={onClick} />
                </div>
            </div>
            <span className={cx('close')} onClick={onClick}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </span>
        </div>
    );
}

FormUserSignIn.propTypes = {
    block: PropTypes.object,
    onClick: PropTypes.func,
};

export default FormUserSignIn;
