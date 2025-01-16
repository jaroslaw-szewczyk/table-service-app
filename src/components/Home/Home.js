import React from "react";
import TableInfo from "../TableInfo/TableInfo";

import { useSelector } from "react-redux";

const Home = () => {

  const tables = useSelector(state => state.tables);
  
  return(
    <div>
      <h1>All tables</h1>
      {tables.map( table => (
        <TableInfo 
          key={table.number} 
          number={table.number}
          status={table.status}
        />
      ))}
    </div>
  );
}

export default Home;