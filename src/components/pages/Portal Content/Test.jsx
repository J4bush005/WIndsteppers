import React from "react";
import Athlete from "../../../Athletes/Athlete 2.webp";
import Athlete2 from "../../../Athletes/Athlete 12.webp";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/Thomas Medal.webp";

import { useState, useRef } from "react";

function AthleteCard({
  image,
  image2,
  name,
  age,
  events,
  event1,
  place,
  best1,
  bio,
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
            style={{
              height: "500px",
              objectFit: "cover",
              objectPosition: "0% 25%",
            }}
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
            <div id="name">
              <h5
                id="stats"
                className="card-title display-3 d-flex justify-content-center"
              >
                {name}
              </h5>
            </div>
            <div className="row mt-3">
              <div className="col-6" id="image">
                <img src={image2} className="img-fluid" id="images" alt="" />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-5 fs-5" id="athete-words">
                    Age: {age}{" "}
                  </div>
                  <div className="col-7 fs-5" id="athete-words">
                    Event: {event1}{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 fs-5" id="athete-words">
                    Place: {place}
                  </div>
                  <div className="col-7 fs-5" id="athete-words">
                    Mark: {best1}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12" id="para">
                {bio}
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
      image2: Athlete,
      name: "Thomas Buckman",
      age: 13,
      events: "Pole Vault",
      event1: "Pole Vault",
      best1: "2.45m",
      place: "5th",
      bio: "Thomas has recently etched his name in the annals of the Windsteppers' history by achieving his first All-American honor in pole vault, securing an impressive 5th place. His journey in athletics is not just a path of personal ambition, but also a continuation of a remarkable family legacy. Born into a family of champions, Thomas has been following in the giant footsteps of his older sisters - Taija, Tamia, and Tachelle. Each of them has previously dominated their respective events as champions for the Windsteppers, setting a high bar for excellence and success. This familial tradition of athletic prowess has been a guiding light for Thomas, fueling his drive and determination.Thomas's approach to pole vaulting combines a deep respect for the discipline with an unwavering commitment to improvement. His recent All-American title is a testament to his hard work and dedication. It's not just a personal achievement but also a tribute to his sisters' legacy, showcasing the unique talent and spirit that runs in the family.",
    },
    {
      image: Jamison,
      image2: Athlete2,
      name: "Jamison Forbush",
      age: 10,
      events: "Javelin",
      event1: "Javelin",
      best1: "25.47m",
      place: "8th",
      bio: "From the tender age of four, Jamison Forbush has been an integral part of the Windsteppers athletic team, showcasing an exceptional talent in track and field. With a passion that has grown alongside him, Jamison has emerged as a formidable athlete, especially in javelin throw. By the age of 10, Jamison had already marked his territory in the American track and field landscape. He is a five-time American champion, a testament to his dedication and skill. His crowning achievement to date is winning the national championship, a moment that highlighted his potential to become one of the sport's greats.Most recently, Jamison added another accolade to his impressive resume. In the highly competitive 10-year-old javelin event, he clinched yet another medal, reinforcing his status as a prodigious talent in this discipline. His remarkable ability to perform under pressure and his continuous improvement are qualities that make him a standout athlete.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          {" "}
          <h1 className="display-2" id="championsss">
            Our All Americans:
          </h1>
        </div>
        <div className="row">
          {menAthletes.map((athlete, index) => (
            <div className="col-lg-6 col-md-6" key={index} id={athlete.name}>
              <AthleteCard {...athlete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AthleteDisplay;
