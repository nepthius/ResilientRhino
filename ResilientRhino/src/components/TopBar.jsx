import React from 'react';

function TopBar() {
    const handleTClick = (event) => {
        // Logic from fishCursor.js
    };

    const handleQuickExit = () => {
        // Logic from quickExit.js
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