import { URL } from './API';

const GET_COUNTRYS = 'GET_COUNTRYS';
const COUNTRYS_SUCCESS = 'COUNTRYS_SUCCESS';
const FAILED = 'FAILED';
const initialState = { contrys: [], loading: true, error: null };

export const getCountrys = () => (dispatch) => {
  dispatch({ type: GET_COUNTRYS });
  const fetchCountrys = async () => {
    try {
      const fetching = await fetch(URL);
      const countrys = await fetching.json();
      const payload = countrys.map((country) => ({
        id: country.id,
        name: country.countries,
      }));
      dispatch({ type: COUNTRYS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: FAILED,
        payload: 'error',
      });
    }
  };
  fetchCountrys();
};

export const covidReducer = (state = initialState, action) => {
  switch (action.types) {
    case GET_COUNTRYS:
      return { ...state, loading: true };
    case COUNTRYS_SUCCESS:
      return { ...state, loading: false, contrys: action.payload };
    case FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
