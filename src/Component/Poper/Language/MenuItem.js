import Button from '~/Component/Button';
function MenuItem({ data }) {
    // console.log(data);
    return <Button inList>{data.title}</Button>;
}

export default MenuItem;
