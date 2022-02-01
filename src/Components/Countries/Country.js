import React from 'react';
import { useSelector } from 'react-redux';

const Countries = () => {
  const { loading, countries, error } = useSelector((state) => state.covidReducer);
  console.log(countries[0]);

  return (
    <div className="container">
      {error && <span className="mt-5 h3 font-weight-bold">{error}</span>}
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3 font-weight-bold">Loading...</span>
        </div>
      ) : (
        countries.map((country) => (
          <div key={country.id} className="d-flex rocket-item pt-4">
            <h4>{country.name}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Countries;
