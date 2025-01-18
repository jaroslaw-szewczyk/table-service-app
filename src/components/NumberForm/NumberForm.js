import React from "react";
import styles from './NumberForm.module.scss';
import { Form } from "react-bootstrap";

const NumberForm = () =>{
  return (
    <Form.Group className={styles.formGroup} controlId="quantityInput">
      <Form.Control
        type="number"
        min="0"
        placeholder="0"
        className={styles.inputSize}
      />
    </Form.Group>
  );
}

export default NumberForm;