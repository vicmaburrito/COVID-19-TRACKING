import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/covid';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.covidReducer);
  //   console.log(error);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      {
      countries.map((country) => (
        <div key={country.id}>
          <p>{console.log(country)}</p>
        </div>
      ))
      }
    </div>
  );
};

export default Countries;
