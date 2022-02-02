import { fetchApi, fetchCountryDetails } from './API';
// import { fetchApi } from './API';

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
const GET_COUNTRIES_FAILED = 'GET_COUNTRIES_FAILED';
const GET_COUNTRY = 'GET_COUNTRY';
const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
const GET_COUNTRY_FAILED = 'GET_COUNTRY_FAILED';
// ADD country = [];
const initialState = {
  countries: [], loading: true, error: null,
};

export const getCountries = () => (dispatch) => {
  dispatch({ type: GET_COUNTRIES });

  const fetchCountries = async () => {
    try {
      const countries = await fetchApi();
      // console.log(countries);
      const payload = countries.map((country) => ({
        id: country.id,
        name: country.name,
        today_positive: country.today_confirmed,
        deaths: country.today_deaths,
      }));
      dispatch({ type: GET_COUNTRIES_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_COUNTRIES_FAILED,
        payload: 'error',
      });
    }
  };
  fetchCountries();
};

export const getCountry = (id) => (dispatch) => {
  dispatch({ type: GET_COUNTRY });

  const fetchCountry = async () => {
    try {
      const country = await fetchCountryDetails(id);
      const payload = country.map((countryId) => ({
        id: countryId.id,
        name: countryId.name,
        today_positive: countryId.today_confirmed,
        deaths: countryId.today_deaths,
      }));
      dispatch({ type: GET_COUNTRY_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_COUNTRY_FAILED,
        payload: 'error',
      });
    }
  };
  fetchCountry();
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, loading: true };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, loading: false, countries: action.payload };
    case GET_COUNTRIES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state, loading: true };
    case GET_COUNTRY_SUCCESS:
      return action.payload;
    case GET_COUNTRY_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
