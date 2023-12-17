import React from "react";
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

import { useState, useRef } from "react";

function AthleteCard({
  image,
  name,
  age,
  events,
  event1,
  event2,
  event3,
  best1,
  first1,
  second1,
  third1,
  best2,
  first2,
  second2,
  third2,
  best3,
  first3,
  second3,
  third3,
}) {
  const [showStats, setShowStats] = useState(false);

  const handleMouseEnter = () => {
    setShowStats(true);
  };

  const handleMouseLeave = () => {
    setShowStats(false);
  };

  return (
    <div
      className="card athlete-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showStats ? (
        <>
          <img
            src={image}
            className="card-img-top athlete-image"
            alt={name}
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="card-body">
            <div className="card-title h5">{name}</div>
            <div className="card-text">{age} years old</div>
            <div className="card-text">Events: {events}</div>
          </div>
        </>
      ) : (
        <div className="card athlete-stats">
          <div className="card-body">
            <h5 className="card-title display-3 d-flex justify-content-center">
              Stats:
            </h5>
            <div className="row  mt-3">
              <p className="card-text h1">E{event1}</p>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="card-text">Best: {best1}</p>
              </div>
              <div className="col-12">
                <p className="card-text">First: {first1}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Second: {second1}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Third: {third1}</p>
              </div>
            </div>
            <div className="row  mt-3">
              <p className="card-text h1">E{event2}</p>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="card-text">Best: {best2}</p>
              </div>
              <div className="col-12">
                <p className="card-text">First: {first2}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Second: {second2}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Third: {third2}</p>
              </div>
            </div>
            <div className="row  mt-3">
              <p className="card-text h1">E{event3}</p>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="card-text">Best: {best3}</p>
              </div>
              <div className="col-12">
                <p className="card-text">First: {first3}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Second: {second3}</p>
              </div>
              <div className="col-12">
                <p className="card-text">Third: {third3}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AthleteDisplay() {
  const athletes = [
    {
      image: Athlete1,
      name: "Athlete 1",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete2,
      name: "Thomas Buckman",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete5,
      name: "Tashaun Turk",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete7,
      name: "Athlete 7",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete8,
      name: "Athlete 8",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete9,
      name: "Athlete 9",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete10,
      name: "Nosaj Booker",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete12,
      name: "Jamison Forbush",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete13,
      name: "Trace Buckman",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete14,
      name: "Athlete 14",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete15,
      name: "Athlete 15",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchValue = searchInputRef.current.value;
    setSearchTerm(searchValue);
    scrollToAthlete(searchValue);
  };

  const scrollToAthlete = (athleteName) => {
    const athleteElement = document.getElementById(athleteName);
    if (athleteElement) {
      athleteElement.scrollIntoView({ behavior: "smooth" });
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
          <div className="col-lg-3 col-md-4" key={index} id={athlete.name}>
            <AthleteCard {...athlete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AthleteDisplay;
