import { URL } from './API';

const GET_COUNTRIES = 'GET_COUNTRIES';
const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS';
const FAILED = 'FAILED';
const initialState = { countries: [], loading: true, error: null };

export const getCountries = () => (dispatch) => {
  dispatch({ type: GET_COUNTRIES });
  const fetchCountries = async () => {
    try {
      const fetching = await fetch(URL);
      const countries = await fetching.json();
      const payload = countries.map((country) => ({
        id: country.id,
        name: country.countries,
      }));
      dispatch({ type: COUNTRIES_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: FAILED,
        payload: 'error',
      });
    }
  };
  fetchCountries();
};

export const covidReducer = (state = initialState, action) => {
  switch (action.types) {
    case GET_COUNTRIES:
      return { ...state, loading: true };
    case COUNTRIES_SUCCESS:
      return { ...state, loading: false, countries: action.payload };
    case FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
