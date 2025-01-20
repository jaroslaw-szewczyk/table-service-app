import React from "react";
import styles from './NumberForm.module.scss';
import { Form } from "react-bootstrap";

const NumberForm = ({onChange, amount}) =>{
  return (
    <Form.Group className={styles.formGroup} controlId="quantityInput">
      <Form.Control
        type="number"
        min="0"
        max="10"
        defaultValue={amount}
        className={styles.inputSize}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default NumberForm;