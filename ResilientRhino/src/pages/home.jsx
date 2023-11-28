import React, { useState, useEffect  } from 'react';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import Disclaimer from '../components/Disclaimer';


import '../styles/home.css';
//import './animeCursorDropdown.css';

function Home({ isLoading, setLoading }) {
    return (
        <div className="gradient-background">
            <TopBar setLoading={setLoading} />
            <SearchBar/>
            <Disclaimer />
        </div>
    );
}

export default Home;