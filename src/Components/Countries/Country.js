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
            <div key={country.id} className="col col-6 text-center border-bottom col-size bg-col">
              <div className="p-3 bg-col">
                <h5 className="mb-0 bg-col">{country.name}</h5>
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
