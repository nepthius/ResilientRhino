import React from 'react';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import Disclaimer from '../components/Disclaimer';
import CountryDetails from '../components/CountryDetails';


import '../styles/home.css';
//import './animeCursorDropdown.css';

function Home() {
    return (
        <div className="gradient-background">
            <TopBar />
            <SearchBar />
            <Disclaimer />
            <CountryDetails />
           
           
            {/* You can add more components or HTML here */}
        </div>
    );
}

export default Home;