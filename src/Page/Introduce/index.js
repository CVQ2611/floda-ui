import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BannerIntro from '~/Component/BannerIntro';
import IntroduceContent from '~/Component/IntroduceContent';
import style from './Introduce.module.scss';
import { INTRO_ITEM } from '~/Data';

const cx = classNames.bind(style);

function IntroducePage({ data }) {
    return (
        <div className={cx('wrapper')}>
            <BannerIntro item={data} />
            <IntroduceContent item={INTRO_ITEM} />
        </div>
    );
}

IntroducePage.propTypes = {
    data: PropTypes.string.isRequired,
};

export default IntroducePage;
