import { API_URL } from "../config";

const createActionName = actionName => `app/table/${actionName}`;
const UPDATE_TABLES_FROM_SERVER = createActionName('UPDATE_TABLES_FROM_SERVER');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

export const gettAllTables = (state => state);

export const updateTablesFromServer = payload => ({
  type: UPDATE_TABLES_FROM_SERVER,
  payload
});

export const updateTable = (payload) => ({
  type: UPDATE_TABLE,
  payload
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then(res => res.json())
      .then(tables => dispatch(updateTablesFromServer(tables)));
  }
}

export const updateTableRequest = (order) => {
  return(dispatch) => {
    const options ={
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(order),
    };
    
    fetch(`${API_URL}/${order.id}`, options)
      .then(() => dispatch(updateTable(order)));
  }
}

const updateTablesReducer = (state = [], action) => {
  switch(action.type) {
    case UPDATE_TABLES_FROM_SERVER:
      return [...action.payload];
    case UPDATE_TABLE:
      return state.map(table =>
        table.id === action.payload.id
          ? { ...table, ...action.payload }
          : table
        );
    default:
      return state;
  }
};

export default updateTablesReducer;