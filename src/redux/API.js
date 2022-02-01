export const BaseUrl = 'https://api.covid19tracking.narrativa.com/api/';

export const date = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

export const URL = `${BaseUrl}${date()}`;
