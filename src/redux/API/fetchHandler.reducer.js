const INITIAL_STATE = {
  currentData: null,
  // appColors: JSON.parse(sessionStorage.getItem("appColors")),
  // isAuthenticated: false,
  // users: [],
  // errorMessage: null,
  // loading: false,
};

const fetchHandlerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LGA':
      return {
        ...state,
        currentData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchHandlerReducer;
