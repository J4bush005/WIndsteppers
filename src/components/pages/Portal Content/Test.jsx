import React from "react";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/Thomas Medal.webp";
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
  best2,
  best3,
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
            style={{ height: "500px", objectFit: "cover", objectPosition: "0% 25%" }}
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
            <h5
              id="stats"
              className="card-title display-3 d-flex justify-content-center"
            >
              Stats:
            </h5>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                {event1}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best1}
                </p>
              </div>
            </div>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                E{event2}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best2}
                </p>
              </div>
            </div>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                E{event3}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best3}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AthleteDisplay() {
  const menAthletes = [
    {
      image: Thomas,
      name: "Thomas Buckman",
      age: 13,
      events: "Pole Vault",
      event1: "Pole Vault",
      best1: "1:00",
    },
    {
      image: Jamison,
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
    }
  ];



  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          {" "}
          <h1 className="display-2" id="championsss">
            Mens Roster:
          </h1>
        </div>
      </div>
      <div className="row">
        {menAthletes.map((athlete, index) => (
          <div className="col-lg-6 col-md-4" key={index} id={athlete.name}>
            <AthleteCard {...athlete} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AthleteDisplay;
