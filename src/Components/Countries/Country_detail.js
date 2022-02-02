import React from 'react';
import { useParams } from 'react-router';
import { fetchCountryDetails } from '../../redux/API';

function CountryDetail() {
  const { id } = useParams();

  const countryDetailData = fetchCountryDetails(id);
  console.log(countryDetailData);

  return (
    <div className="bg-danger">
      { countryDetailData.map((country) => (
        {/* console.log(country) */}
      ))}
    </div>
  );
}

export default CountryDetail;
