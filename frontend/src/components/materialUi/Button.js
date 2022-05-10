import Button from '@mui/material/Button';

export const GloabalButton = (props) => {
    return (
    <Button variant="contained" size={props.size} onClick={props.method}>
        {props.content}
    </Button>
    )
}