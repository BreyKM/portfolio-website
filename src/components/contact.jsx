import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
          msgSent();
          
        },
        (error) => {
          console.log(error.text);
          msgError();
          
        }
      );
  };

  const msgSent = () => toast.success('Message Sent!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

    const msgError = () => toast.error('Message not sent!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });




  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form-header">Lets chat!</div>
      <div
        className={`contact-view ${inView ? "showcontact" : "hidecontact"}`}
        ref={ref}
      >
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name" title="required">Name</label>
          <input type="text" name="user_name" placeholder="Your name" />
          <label  htmlFor="user_email" title="required">Email</label>
          <input type="email" name="user_email" placeholder="your email" />
          <label  htmlFor="user_subject">Subject</label>
          <input type="text" name="user_subject" placeholder="optional" />
          <label htmlFor="message" title="required">Message</label>
          <textarea
            name="message"
            rows={8}
            cols={50}
            placeholder="Lets chat!"
          />
          <input className="submit-btn" type="submit" value="Send" />
          
        </form>
      </div>
      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="dark"/>
    </div>
  );
}

export default Contact;
