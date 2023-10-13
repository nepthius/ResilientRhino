import React from 'react';
import { getCountryCode } from './countries';

const CountryCard = ({ countryName }) => {
  const countryCode = getCountryCode(countryName);
  
  return (
    <div className="country-card" onClick={() => displayCountryDetails(countryName)}>
      <div className="country-name">
        <div>
          <span className={`flag-icon flag-icon-${countryCode}`}></span>
        </div>
        <div>
          {countryName}
        </div>
      </div>
    </div>
  );
}

const displayCountryDetails = (countryName) => {
  window.location.href = `country-details.html?country=${encodeURIComponent(countryName)}`;
}

export default CountryCard;