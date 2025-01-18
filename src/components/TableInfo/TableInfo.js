import React from "react";
import AppButton from "../Button/AppButton";
import styles from './TableInfo.module.scss';

import { Link } from "react-router-dom";

const TableInfo = ({tableId, number, status}) => {

  return(
    <div className={styles.tableInfoContainer}>
      <div className={styles.tableInfoHeaderContainer}>
        <h2 className={styles.tableHeader}>Table {number}</h2>
        <p className={styles.text}><span className={styles.bold}>Status:</span>{status}</p>
      </div>
      <Link key={tableId} to={`/table/${tableId}`}>
        <AppButton>
          Show more
        </AppButton>
      </Link>
    </div>
  );
};

export default TableInfo;