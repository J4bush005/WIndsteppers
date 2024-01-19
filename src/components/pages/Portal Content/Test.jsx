import React from "react";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/Thomas Medal.webp";

import { useState, useRef } from "react";

function AthleteCard({
  image,
  name,
  age,
  events,
  event1
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
            <div className="card-text">Event: {events}</div>
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
            <div className="d-flex mt-3">
              <p id="events" className="card-text h1">
                {event1}
              </p>
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
      age: 10,
      events: "Javelin",
      event1: "Javelin",
      best1: "1:00",
    }
  ];



  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-center">
          {" "}
          <h1 className="display-2" id="championsss">
            Our National Champions:
          </h1>
      </div>
      <div className="d-flex justify-content-evenly">
        {menAthletes.map((athlete, index) => (
          <div className="col-lg col-md-12" key={index} id={athlete.name}>
            <AthleteCard {...athlete} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AthleteDisplay;

