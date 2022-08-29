import classNames from 'classnames/bind';
import style from './Adress.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function Adress({ item = {} }) {
    return (
        <ul>
            {item.map((item, index) => {
                return (
                    <li key={index}>
                        <FontAwesomeIcon icon={item.icon} className={cx('icon')} />
                        <span>{item.type}:</span>
                        <span>{item.contact}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default Adress;
