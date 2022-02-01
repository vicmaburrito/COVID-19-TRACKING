import React from 'react';
import { useSelector } from 'react-redux';

const Countrys = () => {
  const { loading, countrys, error } = useSelector((state) => state.covidReducer);

  return (
    <div className="container">
      {error && <span className="mt-5 h3 font-weight-bold">{error}</span>}
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3 font-weight-bold">Loading...</span>
        </div>
      ) : (
        countrys.map((country) => (
          <span key={country.id}>{country.name}</span>
        ))
      )}
    </div>
  );
};

export default Countrys;
