// CountryDetails.jsx
import React, { useState, useEffect } from 'react';
import '../styles/country-details.css';
import { getCountries, getCountryCode } from './countries';  // Assuming countries.js exports this
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [countryData, setCountryData] = useState(null);
  const { countryName } = useParams();

  useEffect(() => {
    const decodedCountryName = decodeURIComponent(countryName).replace(/-/g, ' '); // Decode and replace hyphens with spaces
    //const countryName = 'United States';
    console.log(countryName)

    if (decodedCountryName) {
      const country = getCountries()[decodedCountryName];

      if (country) {
        const countryCode = getCountryCode(decodedCountryName);
        const countryResources = country;
        setCountryData({ countryCode, countryName: decodedCountryName, countryResources });
      } else {
        setCountryData({ countryName: 'Country not found' });
      }
    } else {
      console.log("Country Name:", decodedCountryName);
    }
  }, [countryName]); // Make sure to add countryName to the dependency array

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
              {resource.phone && resource.phone.length > 0 && (
                <>
                  {' - Phone: '}
                  {resource.phone.map((phone, index) => (
                    <span key={index}>
                      <a href={`tel:${phone}`}>{phone}</a>
                      {index < resource.phone.length - 1 ? ' or ' : ''}
                    </span>
                  ))}
                </>
              )}
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
