import { React, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../redux/covid';

function CountryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, []);
  const { country, loading } = useSelector((state) => state.countryReducer);
  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3">Loading...</span>
        </div>
      ) : (
        country.map((countryId) => (
          <>
            <div className="d-flex row border col col-sm-12 mx-2" key={id}>
              <h1 className="d-flex justify-content-end display-4">
                {countryId.name}
              </h1>
              <h5 className="d-flex justify-content-start -display-4">
                Deaths:
                {countryId.today_positive}
              </h5>
              <h5 className="d-flex justify-content-start -display-4">
                Positive:
                {countryId.today_positive}
              </h5>
            </div>
            <div className="mt-5 border">
              {countryId.regions.map((region) => (
                <p key={region.id}>{region.name}</p>
              ))}
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default CountryDetail;
