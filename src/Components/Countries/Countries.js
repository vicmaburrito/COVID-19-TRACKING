import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/covid';
import './Countries.css';
import Country from './Country';

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
      countries.filter((c) => c.id.toLowerCase().includes(e.target.value)),
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-4">Countrys:</h1>
        <div>
          <p>Search</p>
          <input type="text" placeholder="Search" onChange={SearchHandler} className="search-country" />
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {search?.map((country) => (
              <Country key={country.id} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
