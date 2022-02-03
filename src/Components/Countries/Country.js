import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <div className="col col-6 text-center col-size shadow">
    <div className="">
      <div className="d-flex justify-content-end">
        <Link to={`/CountryDetail/${country.id}`} className="m-2">
          <FontAwesomeIcon icon={faArrowAltCircleRight} color="white" />
        </Link>
      </div>
      <h5 className="">{country.name}</h5>
      <span className="text-uppercase">
        Deaths:
        {country.deaths}
      </span>
    </div>
  </div>
);

Country.propTypes = {
  // eslint-disable-next-line react/require-default-props
  country: PropTypes.instanceOf(Object),
};

export default Country;
