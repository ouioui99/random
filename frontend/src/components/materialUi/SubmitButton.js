import Button from "@mui/material/Button";

export const SubmitButton = (props) => {
  return (
    <Button variant={props.variant} type={props.type} onClick={props.method}>
      {props.content}
    </Button>
  );
};
