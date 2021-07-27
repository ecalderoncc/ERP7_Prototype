export const openAreaMenu = () => (dispatch) => {
  dispatch({
    type: 'AREA_MENU',
    payload: 'area',
  });
};

export const openDataMenu = () => (dispatch) => {
  dispatch({
    type: 'DATA_MENU',
    payload: 'data',
  });
};

export const closeMenu = () => (dispatch) => {
  dispatch({
    type: 'CLOSE_MENU',
  });
};

export const activateMenuCard = () => (dispatch) => {
  dispatch({
    type: 'CLOSE_MENU',
  });
};

export const toggleMenu = (cardMenuType) => ({
  type: 'TOGGLE_MENU',
  payload: cardMenuType,
});

const sideMenuActions = {
  openAreaMenu,
  openDataMenu,
  closeMenu,
};

export default sideMenuActions;
