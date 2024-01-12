import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../footer";
import Header from "../../header";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [child, setChild] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fh3o04q",
        "template_rwkpbfa",
        form.current,
        "hC8rTFSh8Du_vTlwN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setNumber("");
          setChild("");
          alert("Thank you for your submission!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid">
    <Header/>
      <form ref={form} onSubmit={sendEmail}>
        <div class="row g-3 d-flex justify-content-center mt-5">
          <div className="col-6">
            <label class="form-label topper" id="name">Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="John Smith"
              name="user_name"
              required
            />
          </div>
          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label topper" id="name">Child's Name:</label>
              <input
                value={child}
                onChange={(e) => setChild(e.target.value)}
                type="text"
                class="form-control"
                placeholder="John Smith"
                name="child_name"
                required
              />
            </div>
          </div>
          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label topper" id="name">Number:</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                class="form-control"
                placeholder="(816)-123-4567"
                name="user_number"
                required
              />
            </div>
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label" id="name">Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                placeholder="JSmith@gmail.com"
                name="user_email"
                required
              />
               <input type="submit" className="send" value="Send" />
            </div>
             
          </div>

     
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Form;
