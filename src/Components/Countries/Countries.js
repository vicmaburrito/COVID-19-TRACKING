import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/covid';
import './Countries.css';
import Country from './Country';
import World from '../../assets/44386.png';

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
        <div className="d-flex col col-6">
          <img src={World} alt="world" width="120" height="120" />
        </div>
        <div className="align-items-center col col-6 font-weight-bold">
          <h1 className="mt-3">World</h1>
          <h2>
            Countries:
            {countries.length}
          </h2>
        </div>
        <div>
          <input type="text" placeholder="STATS BY COUNTRY" onChange={SearchHandler} className="p-2 search-country" />
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <div className="d-flex row">
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
