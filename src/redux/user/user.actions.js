import { setAlert } from '../alert/alert.actions';

export const fetchStart = () => ({
  type: 'FETCH_START',
});

export const fetchFailure = (errorMessage) => ({
  type: 'FETCH_FAILURE',
  payload: errorMessage,
});

export const fetchSuccess = () => ({
  type: 'FETCH_SUCCESS',
});

const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(fetchStart());

    const body = {
      username: email,
      userpswd: password,
    };
    console.log(body);
    const url = `https://app.cdmps.org.au/services/login`;
    console.log(url);

    let formData = new URLSearchParams();
    formData.append('username', body.username);
    formData.append('userpswd', body.userpswd);

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        method: 'POST',
        //body: JSON.stringify({ username: 'erp7_user', userpswd: 'erpseven' }),
        body: formData,
      });
      //console.log(formData);
      const data = await response.json();
      //console.log(data);
      const token = data.data.token;
      //console.log(token);

      if (data.code === 200) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            id: '1',
            firstName: 'Erp7_test',
            lastName: 'User',
            email: 'testuser@gmail.com',
            token: token, // your generated token in backend
          },
        });
      }
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFailure(error.message));
      dispatch(setAlert({ msg: 'Authentication failed.' }));
    }
  };
const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};
const userActions = {
  login,
  logout,
};
export default userActions;
