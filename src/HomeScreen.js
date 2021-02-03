import React from 'react';
import Banner from './Banner';

import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
    return (
        <div className="homeScreen">

            {/* Navbar */}
            <Nav />

            {/* Banner */}
            <Banner />
            {/* Rows */}
        </div>
    )
}

export default HomeScreen
