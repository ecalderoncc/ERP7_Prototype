const INITIAL_STATE = {
  currentLGAs: null,

  dataLayer: null,
  activeLayer: false,

  lga: null,
  activeLGA: false,
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
        dataLayer: action.payload,
        activeLayer: true,
      };
    case 'SET_LGA':
      return {
        ...state,
        lga: action.payload,
        activeLGA: true,
      };
    case 'DEACTIVE_LGA':
      return {
        ...state,
        activeLGA: false,
      };
    case 'CLEAR_DATALAYER':
      return {
        ...state,
        dataLayer: null,
      };
    default:
      return state;
  }
};

export default fetchHandlerReducer;
