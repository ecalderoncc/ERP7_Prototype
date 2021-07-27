import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../alert/alert.actions';

const fetchLGAList = () => async (dispatch) => {
  const userReducer = useSelector((state) => state.userReducer);
  const activeToken = userReducer.currentUser.token;

  const url = `https://app.cdmps.org.au/services/caseareas/asgsboundaries?config={"typename":"ABS:lga_2016_aust","propertynames":"lga_code16,lga_name16,ste_code16,ste_name16","cql_filter":"ste_name16='Victoria'"}`;
  console.log(userReducer.currentUser.firstName);

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: activeToken,
      },
      method: 'GET',
    });

    const data = await response.json();
    console.log(data);

    if (data.code === 200) {
      dispatch({
        type: 'FETCH_LGA',
        payload: {
          features: data.data.features,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    // dispatch(fetchFailure(error.message));
    dispatch(setAlert({ msg: 'Request Failed' }));
  }
};

const setLGAList = () => ({});

const fetchActions = {
  fetchLGAList,
  setLGAList,
};
export default fetchActions;
