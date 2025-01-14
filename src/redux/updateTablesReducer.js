
//ściąga z projektu to do
// const createActionName = actionName => `app/search/${actionName}`;
// const SEARCH = createActionName('SEARCH');

// export const updateSearchiString = payload => ({type: SEARCH, payload});


const updateTablesReducer = (statePart, action) => {
  switch(action.type) {
    case TEST:
      return action.payload;
    default:
      return statePart;
  };
};

export default updateTablesReducer;