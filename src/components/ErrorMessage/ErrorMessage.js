import React from "react";

const ErrorMessage = ({children}) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
}

export default ErrorMessage;