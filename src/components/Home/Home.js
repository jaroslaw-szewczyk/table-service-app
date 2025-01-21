import React from "react";
import TableInfo from "../TableInfo/TableInfo";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {

  const tables = useSelector(state => state.tables);
  
  if (!tables || tables.length === 0) {
    return <LoadingSpiner />;
  }

  return(
    <div>
      <h1>All tables</h1>
      {tables.map( table => (
        <TableInfo 
          key={table.number} 
          number={table.number}
          status={table.status}
          tableId={table.id}
        />
      ))}
    </div>
  );
}

export default Home;