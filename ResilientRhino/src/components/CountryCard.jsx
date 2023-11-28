import React from 'react';
import { getCountryCode } from './countries';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ countryName}) => {
  const countryCode = getCountryCode(countryName);
  const navigate = useNavigate();
  const displayCountryDetails = (countryName) => {
    navigate(`/country/${encodeURIComponent(countryName.replace(/\s+/g, '-'))}`);
  }
  
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

export default CountryCard;