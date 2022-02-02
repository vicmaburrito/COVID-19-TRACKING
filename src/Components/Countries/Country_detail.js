import { React, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../redux/covid';

function CountryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    console.log(id);
    dispatch(getCountry(id));
  }, []);
  const { country } = useSelector((state) => state.countryReducer);
  // console.log(country);
  return (
    <div className="bg-danger">
      {country.map((countryId) => (
        console.log(countryId)
      ))}
    </div>
  );
}

export default CountryDetail;
