import React from 'react';
import { useSelector } from 'react-redux';

const Countries = () => {
  const { loading, countries, error } = useSelector((state) => state.covidReducer);

  return (
    <div className="container">
      <div className="row">
        {error && <span className="mt-5 h3 font-weight-bold">{error}</span>}
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3 font-weight-bold">Loading...</span>
          </div>
        ) : (
          countries.map((country) => (
            <div key={country.id} className="col col-6 text-center border ">
              <div className="p-3">
                <h5 className="mb-0">{country.name}</h5>
                <span className="small text-uppercase text-muted">
                  Positive:
                  {country.today_positive}
                </span>
                <br />
                <span className="small text-uppercase text-muted">
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
