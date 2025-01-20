import React, { useState, useEffect  } from "react";
import styles from "./TableDetail.module.scss";
import AppButton from "../Button/AppButton";
import NumberForm from "../NumberForm/NumberForm";
import SelectForm from "../SelectForm/SelectForm";
import Home from "../Home/Home";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTableRequest } from "../../redux/updateTablesReducer";


const TableDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tables = useSelector(state => state.tables);

  const { tableId } = useParams();
  const [status, setStatus] = useState("");
  const [people,setPeople] = useState(0);
  const [tableSpaces, setTableSpaces] = useState(0);
  const [bill, setBill] = useState(0);

  const table = tables.find((table) => table.id === parseInt(tableId));


  useEffect(() => {
    if(!table) {
      return;
    }
    
    setPeople(table.people);
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
     setPeople(0);
    } else if(number > 10){
      setPeople(10);
    } else if (number > tableSpaces) {
     setPeople(tableSpaces);
    } else {
     setPeople(number);
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

      if (people > spaces) {
       setPeople(spaces);
      }
    }
  };

  const handleBill = (newBill) => {
    setBill(parseInt(newBill));
  }
  
  const handleButton = (e) => {
    e.preventDefault();
    let order ={};

    if(status === 'cleanig' || status === 'free') {
      order = { id: parseInt(tableId), status, people: 0, bill: 0 };
    } else {
      order = { id: parseInt(tableId), status, people, tableSpaces, bill };
    }
    dispatch(updateTableRequest(order));
    navigate('/');
  };

  

  return(
    <form >
      <h2>Table {table.number}</h2>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Status: </p>
        <SelectForm status={status} onChange={(e) => handleStatusChange(e.target.value)} />
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>People: </p>  
        <NumberForm amount={people} onChange={(e)=> handleChangePeopleAmount(e.target.value)} max={10}/>
        <span>/</span>
        <NumberForm amount={tableSpaces} onChange={(e)=> handleTableSpacesChange(e.target.value)} max={10}/>
      </div>
      <div className={`d-flex align-items-center ${styles.formCon}`}>
        <p>Bill: </p>
        <span className={styles.billSpan}>$:</span>
        <NumberForm onChange={(e) => handleBill(e.target.value)} amount={bill} max={undefined}/>
      </div>
        <AppButton onClick={handleButton}>Update</AppButton>
    </form>
  );
}

export default TableDetail;