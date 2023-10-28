import React from "react";
import Header from "../header";
import { Container } from "react-bootstrap";
function home() {
  return (
    <>
      <section id="open-section" className="page-section call-to-action d-flex">
      <Header />
      <h1 id="team-name" className="text-break">
        Windsteppers
      </h1>
      </section>
    </>
  );
}

export default home;
