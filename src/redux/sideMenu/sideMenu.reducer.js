const INITIAL_STATE = {
  typeCardMenu: null,
  menuData: null,
  showCardMenu: false,
};

const sideMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AREA_MENU':
      return {
        ...state,
        typeCardMenu: action.payload,
      };
    case 'DATA_MENU':
      return {
        ...state,
        typeCardMenu: action.payload,
      };
    case 'TOGGLE_MENU':
      return {
        ...state,
        typeCardMenu: action.payload,
        showCardMenu: !state.showCardMenu,
      };
    default:
      return state;
  }
};

export default sideMenuReducer;
