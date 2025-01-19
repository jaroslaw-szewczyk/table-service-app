import React, { useState, useEffect  } from "react";
import styles from "./TableDetail.module.scss";
import AppButton from "../Button/AppButton";
import NumberForm from "../NumberForm/NumberForm";
import SelectForm from "../SelectForm/SelectForm";
import Home from "../Home/Home";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const TableDetail = () => {

  const tables = useSelector(state => state.tables);
  const { tableId } = useParams();
  const [status, setStatus] = useState("");

  const table = tables.find((table) => table.id === parseInt(tableId));

  useEffect(() => {
    if(!table) {
      return;
    }
    setStatus(table.status);
  },[table]);

  if (!table) {
    return <Home />;
  }

  const { number, bill, people, tableSpace } = table;

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  }

  return(
    <form >
      <h2>Table {number}</h2>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Status: </p>
        <SelectForm status={status} onChange={(e) => handleStatusChange(e.target.value)} />
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>People: </p>  
        <NumberForm amaunt={people}/>
        <span>/</span>
        <NumberForm amaunt={tableSpace}/>
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Bill: </p>
        <span className={styles.billSpan}>$:</span>
        <NumberForm amaunt={bill}/>
      </div>
      <AppButton>Update</AppButton>
    </form>
  );
}

export default TableDetail;