import React from 'react';
import Fade from 'react-reveal/Fade';

import './HomeScreen.css';
import Banner from '../Banner';
import Row from '../Row';
import Nav from '../Nav';
import requests from '../Requests';

function HomeScreen() {
    return (
        <Fade >
            <div className="homeScreen">

                {/* Navbar */}
                <Nav />

                {/* Banner */}
                <Banner />

                {/* Rows */}
                <Fade reset top><Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow /></Fade >
                <Fade reset top><Row title="Trending Now" fetchUrl={requests.fetchTrending} /></Fade >
                <Fade reset top><Row title="Top Rated" fetchUrl={requests.fetchTopRated} /></Fade >
                <Fade reset top><Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /></Fade >
                <Fade reset top><Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /></Fade >
                <Fade reset top><Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /></Fade >
                <Fade reset top><Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /></Fade >
                <Fade reset top><Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /></Fade >
            </div>
        </Fade >
    )
}

export default HomeScreen
