import React from 'react';
import "./Skills.scss";
import html from '../../images/html.png';
import css from '../../images/css.png';
import sass from '../../images/sass.png';
import bootstrap from '../../images/bootstrap.png';
import tailwind from '../../images/tailwind.png';
import js from '../../images/js.png';
import jquery from '../../images/jquery.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import typescript from '../../images/typescript.png';
import materialui from '../../images/materialui.png';
import nodejs from '../../images/nodejs.png';
import postman from '../../images/postman.png';
import mongodb from '../../images/mongodb.png';
import stripe from '../../images/stripe.png';
import firebase from '../../images/firebase.png';
import vercel from '../../images/vercel.png';
import heroku from '../../images/heroku.png';
import netlify from '../../images/netlify.png';
import figma from '../../images/figma.png';
import git from '../../images/git.png';
import github from '../../images/github.png';

function Skills() {
  return (
    <div className="skills_container">
      <ul className="d-flex flex-wrap align-items-center px-3">
        <li><img src={html} alt="html icon"/></li>
        <li><img src={css} alt="css icon"/></li>
        <li><img src={sass} alt="sass icon"/></li>
        <li><img src={bootstrap} alt="bootstrap icon"/></li>
        <li><img src={tailwind} alt="tailwind icon"/></li>
        <li><img src={js} alt="js icon"/></li>
        <li><img src={jquery} alt="jquery icon"/></li>
        <li><img src={react} alt="react icon"/></li>
        <li><img src={redux} alt="redux icon"/></li>
        <li><img src={typescript} alt="typescript icon"/></li>
        <li><img src={materialui} alt="materialui icon"/></li>
        <li><img src={nodejs} alt="nodejs icon"/></li>
        <li><img src={postman} alt="postman icon"/></li>
        <li><img src={mongodb} alt="mongodb icon"/></li>
        <li><img src={stripe} alt="stripe icon"/></li>
        <li><img src={firebase} alt="firebase icon"/></li>
        <li><img src={vercel} alt="vercel icon" className="vercel_icon"/></li>
        <li><img src={heroku} alt="heroku icon"/></li>
        <li><img src={netlify} alt="netlify icon"/></li>
        <li><img src={figma} alt="figma icon"/></li>
        <li><img src={git} alt="git icon"/></li>
        <li><img src={github} alt="github icon"/></li>
      </ul>
    </div>
  )
}

export default Skills;