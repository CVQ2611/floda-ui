import PropTypes from 'prop-types';
import Button from '~/Component/Button';
function MenuItem({ data }) {
    // console.log(data);
    return <Button inList>{data.title}</Button>;
}

MenuItem.propTypes = {
    data: PropTypes.object,
};

export default MenuItem;
