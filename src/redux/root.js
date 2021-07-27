import { combineReducers } from 'redux';

import alertReducer from './alert/alert.reducer';
import userReducer from './user/user.reducer';
import sideMenuReducer from './sideMenu/sideMenu.reducer';
import fetchHandlerReducer from './API/fetchHandler.reducer';

const rootReducer = combineReducers({
  alertReducer,
  userReducer,
  sideMenuReducer,
  fetchHandlerReducer,
});
export default rootReducer;
