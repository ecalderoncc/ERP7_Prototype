const INITIAL_STATE = {
  currentUser: null,
  // appColors: JSON.parse(sessionStorage.getItem("appColors")),
  // isAuthenticated: false,
  // users: [],
  errorMessage: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'LOGIN_SUCCESS':
      sessionStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    case 'LOGOUT':
      sessionStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
