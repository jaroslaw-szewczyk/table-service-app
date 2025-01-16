const createActionName = actionName => `app/${actionName}`;
const UPDATE_TABLES_FROM_SERVER = createActionName('UPDATE_TABLES_FROM_SERVER');

export const gettAllTables = (state => state);

export const updateTablesFromServer = payload => ({type: UPDATE_TABLES_FROM_SERVER, payload});
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTablesFromServer(tables)));
  }
}

const updateTablesReducer = (state={}, action) => {
  switch(action.type) {
    case UPDATE_TABLES_FROM_SERVER:
      return [...action.payload];
    default:
      return state;
  };
};

export default updateTablesReducer;