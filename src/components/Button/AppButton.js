import React from "react";
import Button from "react-bootstrap/Button";

const AppButton = (props) => {
  return(
    <Button variant="primary">{props.children}</Button>
  );
};

export default AppButton;