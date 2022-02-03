import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/covid';
import './Countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const { loading, countries } = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          countries.map((country) => (
            <div key={country.id} className="col col-6 text-center col-size shadow">
              <div className="">
                <div className="d-flex justify-content-end">
                  <Link to={`/CountryDetail/${country.id}`} className="m-2">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" size="2x" />
                  </Link>
                </div>
                <h5 className="">{country.name}</h5>
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
