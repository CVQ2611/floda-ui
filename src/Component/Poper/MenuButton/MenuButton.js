import PropTypes from 'prop-types';
import Button from '~/Component/Button';
function MenuItem({ data }) {
    return (
        <Button inList to={data.to}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
};

export default MenuItem;
