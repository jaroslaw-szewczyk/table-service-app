import React from "react";
import styles from "./SelectForm.module.scss"
import { Form } from "react-bootstrap";

const SelectForm = ({onChange, status}) => {

  return (
    <Form.Group className={styles.selectFormGroup} controlId="statusSelect">
      <Form.Select
        aria-label="Select table status"
        value={status}
        onChange={onChange}
      >
        <option value="1">Free</option>
        <option value="2">Busy</option>
        <option value="3">Reserved</option>
        <option value="4">Cleaning</option>
      </Form.Select>
    </Form.Group>
  );
};

export default SelectForm;