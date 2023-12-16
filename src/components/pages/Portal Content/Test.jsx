import React from 'react'
import Athlete1 from "../../../Athletes/Athlete 1.webp";
import Athlete2 from "../../../Athletes/Athlete 2.webp";

import Athlete5 from "../../../Athletes/Athlete 5.webp";

import Athlete7 from "../../../Athletes/Athlete 7.webp";
import Athlete8 from "../../../Athletes/Athlete 8.webp";
import Athlete9 from "../../../Athletes/Athlete 9.webp";
import Athlete10 from "../../../Athletes/Athlete 10.webp";

import Athlete12 from "../../../Athletes/Athlete 12.webp";
import Athlete13 from "../../../Athletes/Athlete 13.webp";
import Athlete14 from "../../../Athletes/Athlete 14.webp";
import Athlete15 from "../../../Athletes/Athlete 15.webp";

// ... import other athlete images

import { useState, useRef } from 'react';

function AthleteCard({ image, name, events }) {
    return (
        <div className="card athlete-card">
            <img
                src={image}
                className="card-img-top athlete-image"
                alt={name}
                style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Events: {events}</p>
            </div>
        </div>
    );
}

function AthleteDisplay() {
    const athletes = [
        { image: Athlete1, name: 'Athlete 1', events: '' },
        { image: Athlete2, name: 'Thomas Buckman', events: '' },
        { image: Athlete5, name: 'Tashaun Turk', events: '' },
        { image: Athlete7, name: 'Athlete 7', events: '' },
        { image: Athlete8, name: 'Athlete 8', events: '' },
        { image: Athlete9, name: 'Athlete 9', events: '' },
        { image: Athlete10, name: 'Nosaj Booker', events: '' },
        { image: Athlete12, name: 'Jamison Forbush', events: '' },
        { image: Athlete13, name: 'Athlete 13', events: '' },
        { image: Athlete14, name: 'Athlete 14', events: '' },
        { image: Athlete15, name: 'Athlete 15', events: '' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    const handleSearch = () => {
        const searchValue = searchInputRef.current.value;
        setSearchTerm(searchValue);
        scrollToAthlete(searchValue);
    };

    const scrollToAthlete = (athleteName) => {
        const athleteElement = document.getElementById(athleteName);
        if (athleteElement) {
            athleteElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <input
                        type="text"
                        placeholder="Search athlete..."
                        ref={searchInputRef}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="row">
                {athletes.map((athlete, index) => (
                    <div className="col-md-4" key={index} id={athlete.name}>
                        <AthleteCard {...athlete} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AthleteDisplay;
