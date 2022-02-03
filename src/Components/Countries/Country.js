function Country() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-4">Countrys:</h1>
        <div>
          <p>Search</p>
          <input type="text" placeholder="Search" onChange={SearchHandler} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {search?.map((country) => (
            <p key={country.id}>{country.name}</p>
          ))}
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          countries.map((country) => (
            <div key={country.id} className="col col-6 text-center col-size shadow">
              <div className="">
                <div className="d-flex justify-content-end">
                  <Link to={`/CountryDetail/${country.id}`} className="m-2">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" size="2x" />
                  </Link>
                </div>
                <h5 className="">{country.name}</h5>
                <span className="text-uppercase">
                  Deaths:
                  {country.deaths}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Country;
