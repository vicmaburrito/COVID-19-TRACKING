import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/covid';
import './Countries.css';

const Countries = () => {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const { loading, countries } = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setSearch(countries);
  }, [countries]);

  const SearchHandler = (e) => {
    setSearch(
      countries.filter((c) => c.country.toLowerCase().includes(e.target.value)),
    );
  };
  return (

  );
};

export default Countries;
