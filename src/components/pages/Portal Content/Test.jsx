import React from "react";
import Athlete from "../../../Athletes/Athlete 2.webp";
import Athlete2 from "../../../Athletes/Athlete 12.webp";
import Jamison from "../../../Photos/Jamison Medal.webp";
import Thomas from "../../../Photos/New Thomas.jpeg";
import AJ from "../../../Photos/AJ.jpeg";
import Mason from "../../../Photos/Mason.jpeg";
import Avirahm from "../../../Photos/Avirahm.jpeg";
import Avtwo from "../../../Athletes/Athlete 14.webp";
import Masontwo from "../../../Athletes/Athlete 8.webp";
import AJtwo from "../../../Photos/pose.jpeg";

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
                className="card-title display-4 d-flex justify-content-center align-items-center"
              >
                {name}
              </h5>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center align-items-center" id="image">
                <img src={image2} className="img-fluid" id="images" alt="" />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6 " id="athete-words">
                    Age: {age}{" "}
                  </div>
                  <div className="col-6 " id="athete-words">
                    Event: {event1}{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" id="athete-words">
                    Place: {place}
                  </div>
                  <div className="col-6" id="athete-words">
                    Mark: {best1}
                  </div>
                </div>
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
      image: Jamison,
      image2: Athlete2,
      name: "Jamison Forbush",
      age: 11,
      events: "Javelin",
      event1: "Javelin",
      best1: "128'7",
      place: "National Champion",
      bio: "From the tender age of four, Jamison Forbush has been an integral part of the Windsteppers athletic team, showcasing an exceptional talent in track and field. With a passion that has grown alongside him, Jamison has emerged as a formidable athlete, especially in javelin throw. By the age of 10, Jamison had already marked his territory in the American track and field landscape. He is a five-time American champion, a testament to his dedication and skill. His crowning achievement to date is winning the national championship, a moment that highlighted his potential to become one of the sport's greats.Most recently, Jamison added another accolade to his impressive resume. In the highly competitive 10-year-old javelin event, he clinched yet another medal, reinforcing his status as a prodigious talent in this discipline. His remarkable ability to perform under pressure and his continuous improvement are qualities that make him a standout athlete.",
    },
     {
      image: Mason,
      image2: Masontwo,
      name: "Mason Godoy",
      age: 13,
      events: "Discuss, Javelin, & Triple Jump",
      event1: "Discuss, Javelin, & Triple Jump",
      best1: "123'9, 120'7, & 37'10",
      place: "3rdx2 & 8th",
      bio: "From the tender age of four, Jamison Forbush has been an integral part of the Windsteppers athletic team, showcasing an exceptional talent in track and field. With a passion that has grown alongside him, Jamison has emerged as a formidable athlete, especially in javelin throw. By the age of 10, Jamison had already marked his territory in the American track and field landscape. He is a five-time American champion, a testament to his dedication and skill. His crowning achievement to date is winning the national championship, a moment that highlighted his potential to become one of the sport's greats.Most recently, Jamison added another accolade to his impressive resume. In the highly competitive 10-year-old javelin event, he clinched yet another medal, reinforcing his status as a prodigious talent in this discipline. His remarkable ability to perform under pressure and his continuous improvement are qualities that make him a standout athlete.",
    },
    {
      image: AJ,
      image2: AJtwo,
      name: "Anjanette Davis",
      age: 10,
      events: "Racewalk",
      event1: "Racewalk",
      best1: "10:44.65",
      place: "3rd",
      bio: "From the tender age of four, Jamison Forbush has been an integral part of the Windsteppers athletic team, showcasing an exceptional talent in track and field. With a passion that has grown alongside him, Jamison has emerged as a formidable athlete, especially in javelin throw. By the age of 10, Jamison had already marked his territory in the American track and field landscape. He is a five-time American champion, a testament to his dedication and skill. His crowning achievement to date is winning the national championship, a moment that highlighted his potential to become one of the sport's greats.Most recently, Jamison added another accolade to his impressive resume. In the highly competitive 10-year-old javelin event, he clinched yet another medal, reinforcing his status as a prodigious talent in this discipline. His remarkable ability to perform under pressure and his continuous improvement are qualities that make him a standout athlete.",
    },
    {
      image: Avirahm,
      image2: Avtwo,
      name: "Aviram Vertreese",
      age: 13,
      events: "Discuss & High Jump",
      event1: "Discuss & High Jump",
      best1: "105'11 & 5'1",
      place: "6th & 8th",
      bio: "From the tender age of four, Jamison Forbush has been an integral part of the Windsteppers athletic team, showcasing an exceptional talent in track and field. With a passion that has grown alongside him, Jamison has emerged as a formidable athlete, especially in javelin throw. By the age of 10, Jamison had already marked his territory in the American track and field landscape. He is a five-time American champion, a testament to his dedication and skill. His crowning achievement to date is winning the national championship, a moment that highlighted his potential to become one of the sport's greats.Most recently, Jamison added another accolade to his impressive resume. In the highly competitive 10-year-old javelin event, he clinched yet another medal, reinforcing his status as a prodigious talent in this discipline. His remarkable ability to perform under pressure and his continuous improvement are qualities that make him a standout athlete.",
    },
    {
      image: Thomas,
      image2: Athlete,
      name: "Thomas Buckman",
      age: 14,
      events: "Pole Vault",
      event1: "Pole Vault",
      best1: "8'6.25",
      place: "8th",
      bio: "Thomas has recently etched his name in the annals of the Windsteppers' history by achieving his first All-American honor in pole vault, securing an impressive 5th place. His journey in athletics is not just a path of personal ambition, but also a continuation of a remarkable family legacy. Born into a family of champions, Thomas has been following in the giant footsteps of his older sisters - Taija, Tamia, and Tachelle. Each of them has previously dominated their respective events as champions for the Windsteppers, setting a high bar for excellence and success. This familial tradition of athletic prowess has been a guiding light for Thomas, fueling his drive and determination.Thomas's approach to pole vaulting combines a deep respect for the discipline with an unwavering commitment to improvement. His recent All-American title is a testament to his hard work and dedication. It's not just a personal achievement but also a tribute to his sisters' legacy, showcasing the unique talent and spirit that runs in the family.",
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
            <div className="col-lg-4 col-md-4" key={index} id={athlete.name}>
              <AthleteCard {...athlete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AthleteDisplay;
