import React from "react";
import Button from "react-bootstrap/Button";

const AppButton = ({onClick, children}) => {
  return(
    <Button variant="primary" onClick={onClick}>{children}</Button>
  );
};

export default AppButton;