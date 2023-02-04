import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactImg from "./images/contacts-img.jpg"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c451a4w",
        "template_1gl5iki",
        form.current,
        "d5kBYTgWY5wGohJ3c"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form-header">Lets chat!</div>
      <div className="contact-img-container">
        
      
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label title="required">
          Name<span className="required">*</span>
        </label>
        <input type="text" name="user_name" placeholder="Your name" />
        <label title="required">
          Email<span className="required">*</span>
        </label>
        <input type="email" name="user_email" placeholder="your email" />
        <label>Subject</label>
        <input type="text" name="user_subject" placeholder="optional" />
        <label title="required">
          Message<span className="required">*</span>
        </label>
        <textarea name="message" rows={8} cols={50} placeholder="Lets chat!" />
        <input className="submit-btn" type="submit" value="Send" />
      </form>
      </div>
      </div>
  );
}

export default Contact;
