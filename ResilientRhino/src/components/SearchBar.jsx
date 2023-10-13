import React, { useState } from 'react';
import CountryCardsContainer from './CountryCardsContainer';
import { getCountries } from './countries';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState(getCountries());

    const handleSearchKeyDown = (event) => {
        if (event.keyCode === 13 || event.key === 'Enter') {
            searchCountry();
        }
    };

    const searchCountry = () => {
        if (searchTerm === 'anime') {
          // Handle the anime cursor dropdown
        } else {
          const filteredCountries = filterCountries(searchTerm);
          setCountries(filteredCountries);
        }
    }

    return (
        <div className="search-bar">
            <img src="../../public/images/mascots/rhinoHeart.webp" alt="Image" style={{ width: '75px', height: '75px', marginRight: '10px' }} />
            <input type="text" id="search-input" placeholder="Search for a country" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearchKeyDown} />
            <button type="button" onClick={searchCountry}>Search</button>
            <CountryCardsContainer countries={countries} />
        </div>
    );
}

const filterCountries = (term) => {
    // Add your filtering logic here
  }

export default SearchBar;

