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
    fetch('http://localhost:3131/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTablesFromServer(tables)));
  }
}

const updateTablesReducer = (state = [], action) => {
  switch(action.type) {
    case UPDATE_TABLES_FROM_SERVER:
      return [...action.payload];
    case UPDATE_TABLE:
      return state.map(table =>
        table.id === Number(action.payload.tableId)
          ? { ...table, ...action.payload }
          : table
        );
    default:
      return state;
  }
};

export default updateTablesReducer;