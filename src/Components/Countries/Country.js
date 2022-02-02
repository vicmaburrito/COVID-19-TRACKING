import React from 'react';
import { useSelector } from 'react-redux';
import './Countries.css';

const Countries = () => {
  const { loading, countries, error } = useSelector((state) => state.covidReducer);

  return (
    <div className="container">
      <div className="row">
        {error && <span className="mt-5 h3">{error}</span>}
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          countries.map((country) => (
            <div key={country.id} className="col col-6 text-center col-size shadow">
              <div className="pt-5">
                <h5 className="">{country.name}</h5>
                <span className="text-uppercase">
                  Positive:
                  {country.today_positive}
                </span>
                <br />
                <span className="text-uppercase">
                  Deaths:
                  {country.deaths}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Countries;
