import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/covid';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.covidReducer);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      {
      countries.map((country) => (
        <div key={country.id}>
          {console.log(country)}
        </div>
      ))
      }
    </div>
  );
};

export default Countries;
