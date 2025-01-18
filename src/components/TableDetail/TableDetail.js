import React from "react";
import styles from "./TableDetail.module.scss";
import AppButton from "../Button/AppButton";
import NumberForm from "../NumberForm/NumberForm";
import SelectForm from "../SelectForm/SelectForm";

import { useParams } from "react-router-dom";

const TableDetail = () => {

  const { tableId } = useParams();

  return(
    <form >
      <h2>Table {tableId}</h2>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Status: </p>
        <SelectForm />
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>People: </p>  
        <NumberForm />
        <span>/</span>
        <NumberForm />
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Bill: </p>
        <span className={styles.billSpan}>$:</span>
        <NumberForm />
      </div>
      <AppButton>Update</AppButton>
    </form>
  );
}

export default TableDetail;