const INITIAL_STATE = {
  currentLGAs: null,
  // appColors: JSON.parse(sessionStorage.getItem("appColors")),
  // isAuthenticated: false,
  // users: [],
  // errorMessage: null,
  // loading: false,
  dataLayerActive: null,
  active: false,
};

const fetchHandlerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LGA':
      return {
        ...state,
        currentLGAs: action.payload,
      };
    case 'ACTIVE_DATALAYER':
      return {
        ...state,
        dataLayerActive: action.payload,
        active: true,
      };
    default:
      return state;
  }
};

export default fetchHandlerReducer;
