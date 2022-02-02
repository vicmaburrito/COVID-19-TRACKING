import fetchApi from './API';

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
const GET_COUNTRIES_FAILED = 'GET_COUNTRIES_FAILED';

const initialState = { countries: [], loading: true, error: null };

export const getCountries = () => (dispatch) => {
  dispatch({ type: GET_COUNTRIES });

  const fetchCountries = async () => {
    try {
      const countries = await fetchApi();
      console.log(countries);
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

export const covidReducer = (state = initialState, action) => {
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
