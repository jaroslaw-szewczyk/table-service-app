import React from "react";
import styles from './NumberForm.module.scss';
import { Form } from "react-bootstrap";

const NumberForm = ({onChange, amount, max}) =>{
  return (
    <Form.Group className={styles.formGroup} controlId="quantityInput">
      <Form.Control
        type="number"
        min="0"
        max={max}
        value={amount}
        className={styles.inputSize}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default NumberForm;