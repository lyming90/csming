// a reducer takes in a state and an action, return a new state
const pageReducer = (state = [], action) => {
  console.log("Passed to reducer!");
  switch(action.type) {
    case 'SWITCH_PAGE':
      return {
        ...state,
        pageName: action.pageName,
        redirect: true
      };
    case 'TRIGGER_REDIRECTION':
      return {
        ...state,
        redirect: false
      };
    default:
      return state;
  }
};

export default pageReducer;