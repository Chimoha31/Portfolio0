import React, { useRef, useState, Fragment } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import linkedin from "../gif/linkedin.gif";
import github from "../gif/github.gif";
import cellphone from "../gif/cellphone.gif";
import gmail from "../gif/gmail.gif";
// import ThemeContext from "../context/themeContext";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";

const {
  REACT_APP_MY_SERVICE_ID,
  REACT_APP_MY_TEMPLETE_ID,
  REACT_APP_MY_USER_ID,
} = process.env;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  // const theme = useContext(ThemeContext);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && msg) {
      setSuccess(
        "Thank you for your message. I'll reply you back within 48 hours."
      );
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
    } else {
      setErrorMsg("Please fill in the all blanks");
    }
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 reach_me">Reach Me</h1>
      <div className="contact d-flex flex-column justify-content-center align-items-center mt-5">
        <Form
          className="d-flex flex-column form"
          onSubmit={handleSubmit}
          ref={form}
        >
          {/* Name */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>*Name</Form.Label>
            <Form.Control
              type="name"
              name="user_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Email address</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Msg */}
          <Form.Label>*Comments</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              className="messages"
              name="message"
              style={{ height: "300px" }}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </FloatingLabel>

          {errorMsg && !success && (
            <Alert
              variant="danger"
              className="mb-3 p-1 text-center msg"
              style={{
                fontFamily:
                  "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
              }}
            >
              {errorMsg}
            </Alert>
          )}
          {success && !errorMsg && (
            <Alert
              variant="success"
              className="mb-3 p-1 msg"
              style={{
                fontFamily:
                  "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
              }}
            >
              {success}
            </Alert>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* contact icon tools */}
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5 contact_icons">
          <ul className="d-flex flex-column gap-3">
            <li className="d-flex justify-content-center align-items-center gap-2">
              <img src={linkedin} alt="linkedIn" />
              <img src={github} alt="github" />
            </li>
            <li className="d-flex justify-content-center align-items-center gap-2">
              <img src={cellphone} alt="phone" />
              <p className="mb-0">606-785-2569</p>
            </li>
            <li className="d-flex justify-content-center align-items-center gap-2">
              <img src={gmail} alt="gmail" />
              <p className="mb-0">mokochii1108@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
