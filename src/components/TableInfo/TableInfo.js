import React from "react";
import AppButton from "../Button/AppButton";
import styles from './TableInfo.module.scss';

const TableInfo = ({number, status}) => {
  return(
    <div className={styles.tableInfoContainer}>
      <div className={styles.tableInfoHeaderContainer}>
        <h2 className={styles.tableHeader}>Table {number}</h2>
        <p className={styles.text}><span className={styles.bold}>Status:</span>{status}</p>
      </div>
      <AppButton>Show more</AppButton>
    </div>
  );
};

export default TableInfo;