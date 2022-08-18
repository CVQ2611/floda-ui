import Button from '~/Component/Button';
function MenuItem({ data }) {
    return (
        <Button inList to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
