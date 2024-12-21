import React from "react";
import AppButton from "../Button/AppButton";
import styles from './TableInfo.module.scss';

const TableInfo = () => {
  return(
    <div className={styles.tableInfoContainer}>
      <div className={styles.tableInfoHeaderContainer}>
        <h2 className={styles.tableHeader}>Table 1</h2>
        <p className={styles.text}><span className={styles.bold}>Status:</span>Free</p>
      </div>
      <AppButton>Show more</AppButton>
    </div>
  );
};

export default TableInfo;