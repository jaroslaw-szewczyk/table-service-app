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
        <option value="free">Free</option>
        <option value="busy">Busy</option>
        <option value="reserved">Reserved</option>
        <option value="cleanig">Cleaning</option>
      </Form.Select>
    </Form.Group>
  );
};

export default SelectForm;