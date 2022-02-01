export const BaseUrl = 'https://api.covid19tracking.narrativa.com/api/';

export const TodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

export const URL = `${BaseUrl}${TodayDate()}`;
console.log(TodayDate());
const date = TodayDate();
console.log(date);
export const fetchApi = async () => {
  const fetching = await fetch(URL);
  const generalData = await fetching.json();
  const date = TodayDate();
  const countriesObj = generalData.dates[date].countries;
  const countries = Object.values(countriesObj);
  console.log(countries);
  let dataCountry = [];
  dataCountry = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  console.log(dataCountry[0]);
  return countries;
};

fetchApi();
