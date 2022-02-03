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
  const { country } = useSelector((state) => state.countryReducer);
  return (
    <div className="bg-danger">
      {country.map((countryId) => (
        <p key={id}>{countryId.today_positive}</p>
      ))}
    </div>
  );
}

export default CountryDetail;
