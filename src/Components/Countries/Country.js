import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { URL } from '../../redux/API';
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
              <div className="">
                <div className="d-flex justify-content-end">
                  <Link to={`${URL}/country/${country.id}`} className="m-2">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" />
                  </Link>
                </div>
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
