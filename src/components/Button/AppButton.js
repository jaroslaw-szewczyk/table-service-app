import React from "react";
import Button from "react-bootstrap/Button";

const AppButton = ({ children}) => {
  return(
    <Button variant="primary">{children}</Button>
  );
};

export default AppButton;