// CountryDetails.jsx
import React, { useState, useEffect } from 'react';
import '../styles/country-details.css';
import { getCountries, getCountryCode } from './countries';  // Assuming countries.js exports this

const CountryDetails = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const countryName = searchParams.get('country');
    //const countryName = 'United States';
    //console.log(getCountries())

    if (countryName!=null && countryName) {
      const country = getCountries()[countryName];

      if (country) {
        const countryCode = getCountryCode(countryName);
        const countryResources = country;
        setCountryData({ countryCode, countryName, countryResources });
      } else {
        setCountryData({ countryName: 'Country not found' });
      }
    } else {
        console.log("Country Name:", countryName);

        
    }
  }, []);

  if (!countryData) return null;

  return (
    <div id="country-details">
      {countryData.countryName !== 'Country not found' ? (
        <>
          <h2>
            {countryData.countryCode && <span className={`flag-icon flag-icon-${countryData.countryCode}`}></span>}
            {countryData.countryName}
          </h2>
          <ul>
            {countryData.countryResources.map(resource => (
              <li key={resource.name}>
                {resource.url ? <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a> : resource.name}
                {resource.url_info ? ` (${resource.url_info})` : ''}
                {resource.phone && resource.phone.length > 0 && ` - Phone: ${resource.phone.map(phone => phone ? <a href={`tel:${phone}`} key={phone}>{phone}</a> : phone).join(' or ')}`}
                {resource.phone_info ? ` (${resource.phone_info})` : ''}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>{countryData.countryName}</p>
      )}
      <button className="quick-exit-button" onClick={() => window.handleQuickExit()}>Quick Exit</button>
      <button id="back-button">Back to Home</button>
    </div>
  );
}

export default CountryDetails;
