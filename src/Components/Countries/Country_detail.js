import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
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
            <div className="d-flex row shadow col col-sm-12 mx-2" key={id}>
              <h1 className="d-flex justify-content-end">
                {countryId.name}
              </h1>
              <h5 className="d-flex justify-content-start ">
                Deaths:
                {countryId.today_deaths}
              </h5>
              <h5 className="d-flex justify-content-start ">
                Positive:
                {countryId.today_positive}
              </h5>
            </div>
            <div className="container">
              <div className="row">
                {countryId.regions.length === 0 ? (
                  <div className="d-flex shadow col col-sm-12 m-3">
                    <Link to="/" className="m-2">
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} color="white" />
                    </Link>
                    <h5 className="d-flex justify-content-center display-4">
                      No Regions in
                      {' '}
                      {countryId.name}
                    </h5>
                  </div>
                ) : (
                  countryId.regions.map((region) => (
                    <div key={region.name} className="mt-3 col col-6 text-center col-size shadow">
                      <div>
                        <div className="d-flex justify-content-start">
                          <Link to="/" className="m-2">
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} color="red" size="2x" />
                          </Link>
                        </div>
                        <h5 className="">{region.name}</h5>
                        <span className="text-uppercase">
                          Deaths:
                          {region.today_deaths}
                        </span>
                        <br />
                        <span className="text-uppercase">
                          Confirmed:
                          {region.today_confirmed}
                        </span>
                      </div>
                    </div>
                  )))}
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default CountryDetail;
