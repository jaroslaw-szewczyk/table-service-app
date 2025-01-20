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
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tableSpaces, setTableSpaces] = useState(0);
  const [bill, setBill] = useState(0);

  const table = tables.find((table) => table.id === parseInt(tableId));

  useEffect(() => {
    if(!table) {
      return;
    }
    
    setNumberOfPeople(table.people);
    setTableSpaces(table.tableSpace);
    setStatus(table.status);
    setBill(table.bill);
  },[table]);

  if (!table) {
    return <Home />;
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  }

  const handleChangePeopleAmount = (newNumberOfPeople) => {
    const number = parseInt(newNumberOfPeople);

    if (number < 0) {
      setNumberOfPeople(0);
    } else if (number > tableSpaces) {
      setNumberOfPeople(tableSpaces);
    } else if (number > 10) {
      setNumberOfPeople(10);
    } else {
      setNumberOfPeople(number);
    }
  };

  const handleTableSpacesChange = (newTableSpaces) => {
    const spaces = parseInt(newTableSpaces) || 0;

    if (spaces < 0) {
      setTableSpaces(0);
    } else if (spaces > 10) {
      setTableSpaces(10);
    } else {
      setTableSpaces(spaces);

      if (numberOfPeople > spaces) {
        setNumberOfPeople(spaces);
      }
    }
  };

  const handleBill = (newBill) => {

    if (newBill < 0) {
      const correctBill = parseInt(newBill.replace('-', ''));
      setBill(correctBill);
    } else {
      setBill(parseInt(newBill));
    }
  }
  
  const handleButton = () => {
    console.log('NewStatus', status);
    console.log('NumberOfPeople', numberOfPeople);
    console.log('TableSpaces', tableSpaces);
    console.log('Bill', bill);
  }

  return(
    <form >
      <h2>Table {table.number}</h2>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Status: </p>
        <SelectForm status={status} onChange={(e) => handleStatusChange(e.target.value)} />
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>People: </p>  
        <NumberForm amount={table.people} onChange={(e)=> handleChangePeopleAmount(e.target.value)}/>
        <span>/</span>
        <NumberForm amount={table.tableSpace} onChange={(e)=> handleTableSpacesChange(e.target.value)}/>
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Bill: </p>
        <span className={styles.billSpan}>$:</span>
        <NumberForm onChange={(e) => handleBill(e.target.value)} amount={table.bill}/>
      </div>
      <AppButton onClick={handleButton}>Update</AppButton>
    </form>
  );
}

export default TableDetail;