import React, { useState } from 'react';

function TopBar({ setLoading }) {

    const handleTClick = (event) => {
        // Logic from fishCursor.js
    };

    const handleQuickExit = () => {
        setLoading(true);
        setTimeout(() => {
            window.location.href = 'https://www.weather.com';
        }, 1000); // Adjust the delay as needed
    };

    return (
        <div className="top-bar">
            <h1>
                <img src="../../public/images/mascots/rhino.webp" alt="Favicon" />
                Resilien<span id="t-click" style={{ cursor: 'pointer', paddingRight: '5px' }} onClick={handleTClick}>t</span> Rhino
            </h1>
            <button className="quick-exit-button" onClick={handleQuickExit}>Quick Exit</button>
            <p>Try to find the easter eggs! 😄</p>
            <p id="counter">Potential Rescues (Manually Verified): 0</p>
        </div>
    );
}

export default TopBar;
