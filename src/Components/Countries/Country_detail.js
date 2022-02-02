import React from 'react';
import { useParams } from 'react-router';

function CountryDetail() {
  const { id } = useParams();

  return (
    <div className="bg-danger">
      <p>{id}</p>
    </div>
  );
}

export default CountryDetail;
