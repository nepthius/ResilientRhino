import React, { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchKeyDown = (event) => {
        if (event.keyCode === 13 || event.key === 'Enter') {
            searchCountry();
        }
    };

    const searchCountry = () => {
        // searchCountry logic
    };

    return (
        <div className="search-bar">
            <img src="../../public/images/mascots/rhinoHeart.webp" alt="Image" style={{ width: '75px', height: '75px', marginRight: '10px' }} />
            <input type="text" id="search-input" placeholder="Search for a country" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearchKeyDown} />
            <button type="button" onClick={searchCountry}>Search</button>
        </div>
    );
}

export default SearchBar;