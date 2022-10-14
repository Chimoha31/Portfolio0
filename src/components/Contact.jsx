import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import linkedin from "../gif/linkedin.gif";
import github from "../gif/github.gif";
import cellphone from "../gif/cellphone.gif";
import gmail from "../gif/gmail.gif";
import ThemeContext from "../context/themeContext";

const {
  REACT_APP_MY_SERVICE_ID,
  REACT_APP_MY_TEMPLETE_ID,
  REACT_APP_MY_USER_ID,
} = process.env;

function Contact() {
  const theme = useContext(ThemeContext);
  const form = useRef();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${REACT_APP_MY_SERVICE_ID}`,
        `${REACT_APP_MY_TEMPLETE_ID}`,
        form.current,
        `${REACT_APP_MY_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_container" style={theme.body}>
      <h1 style={theme.text}>Reach Me</h1>
      {/* form */}
      <div className="contact_form">
        <div className="form_container">
          <form ref={form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="user_name" autoFocus />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="submit_btn" />
          </form>
        </div>
      </div>
      <div className="contact_sns">
        <a href="https://www.linkedin.com/in/chiho1108developer/">
          <img src={linkedin} alt="linkedin gif" />
        </a>
        <a href="https://github.com/Chimoha31">
          <img src={github} alt="github gif" />
        </a>
      </div>
      <div className="contact_tools">
        <ul>
          <li>
            <img src={cellphone} alt="cellphone gif" />
            <p style={theme.text}>+1(604)7852569</p>
          </li>
          <li>
            <img src={gmail} alt="gmail gif" />
            <p style={theme.text}>mokochii1108@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
