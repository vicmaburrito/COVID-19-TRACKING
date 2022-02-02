export const BaseUrl = 'https://api.covid19tracking.narrativa.com/api/';

const TodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

export const URL = `${BaseUrl}${TodayDate()}`;

const fetchApi = async () => {
  const fetching = await fetch(URL);
  const generalData = await fetching.json();
  const date = TodayDate();
  const countriesObj = generalData.dates[date].countries;
  const countries = Object.values(countriesObj);
  return countries;
};

export default fetchApi;
