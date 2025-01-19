import React from "react";
import styles from './NumberForm.module.scss';
import { Form } from "react-bootstrap";

const NumberForm = ({amaunt}) =>{
  return (
    <Form.Group className={styles.formGroup} controlId="quantityInput">
      <Form.Control
        type="number"
        min="0"
        max="10"
        defaultValue={amaunt}
        className={styles.inputSize}
      />
    </Form.Group>
  );
}

export default NumberForm;