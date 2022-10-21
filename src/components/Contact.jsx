import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import linkedin from "../gif/linkedin.gif";
import github from "../gif/github.gif";
import cellphone from "../gif/cellphone.gif";
import gmail from "../gif/gmail.gif";
import ThemeContext from "../context/themeContext";
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
  const theme = useContext(ThemeContext);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && msg) {
      setSuccess("Succesfully sent");
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

  console.log(errorMsg);

  return (
    <div className="contact d-flex justify-content-center align-items-start mt-5">
      <Form className="d-flex flex-column form" onSubmit={handleSubmit} ref={form}>
        {/* Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>*Name</Form.Label>
          <Form.Control
            type="name"
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
    </div>
  );
}

export default Contact;
