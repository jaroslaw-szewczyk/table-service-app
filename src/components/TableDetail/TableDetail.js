import React from "react";
import styles from "./TableDetail.module.scss";
import AppButton from "../Button/AppButton";

const TableDetail = () => {
  return(
    <form className={`${styles.formCon}`}>
      <h2>Table 1</h2>
      <div className="d-flex align-items-center">
        <p>Status: </p>
        <select className={`form-select ${styles.size}`} aria-label="Default select example">
          <option value="1" selected>Free</option>
          <option value="2">Busy</option>
          <option value="3">Reserved</option>
          <option value="3">Cleaning</option>
        </select>
      </div>
      <div className="d-flex align-items-center">
        <p>People: </p>  
        <input type="number" 
          id="quantity" 
          name="quantity" 
          className="form-control" 
          min="1" 
          max="5" 
          placeholder="0" 
        />  
      </div>
      <div className="d-flex align-items-center">
        <p>Bill: </p>
        
      </div>
      <AppButton>Update</AppButton>
    </form>
  );
}

export default TableDetail;