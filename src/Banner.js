import React, { useEffect, useState } from 'react';

import './Banner.css';
import axios from './axios';
import request from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(request.fetchTrending)
        }
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {
                        truncate('descriptionThis is a test descriptionThis is a test descriptionThis is a test descri a test descriptionThis is a test descri a test descriptionThis is a test descri a test descriptionThis is a test descri a test descriptionThis is a test descri', 150)
                    }
                </h1>

            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
