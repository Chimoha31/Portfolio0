import cutory from "../projectsImage/CUTORY.png";
import hotel_booking from "../projectsImage/hotel_booking.png";
import chat from "../projectsImage/chat.png";
import recipe_app from "../projectsImage/recipe_app.png";
import qrcode_generator from "../projectsImage/qrcode_generator.png";
import mern from "../projectsImage/mern.png";
import rock_paper_scissors from "../projectsImage/rock_paper_scissors.png";
import anime_database_app from "../projectsImage/anime_database_app.png";
import portfolio_chiho from "../projectsImage/portfolio_chiho.png";

let allProjectsElements = [
  {
    id: 1,
    image: portfolio_chiho,
    title: "Portfolio",
    description: "This is my portfolio.",
    technology: ["react", "bootstrap", "materialui", "emailjs", "vercel"],
    github: "https://github.com/Chimoha31/Portfolio.git",
    app: "https://portfolio-chiho.vercel.app/",
  },
  {
    id: 2,
    image: cutory,
    title: "Clothing E-Commerce Website",
    description: "This is an application for clothing E-Commerce.",
    technology: ["bootstrap", "figma", "react", "redux-toolkit", "node.js", "express", "MySql", "stripe", "heroku"],
    github: "https://github.com/Chimoha31/cutory",
    app: "https://cutory-client.herokuapp.com/",
  },
  {
    id: 3,
    image: hotel_booking,
    title: "Hotel Booking Website",
    description: "This is an application for booking a hotel. To see all customer booking lists on admin side, log in with test@test.com for email, 111111 for password.",
    technology: ["bootstrap", "react", "node.js", "express", "mongoDB", "firebase", "heroku"],
    github: "https://github.com/Chimoha31/Ciccc_FinalProject",
    app: "https://bookinghotel01.herokuapp.com/",
  },
  {
    id: 4,
    image: chat,
    title: "Realtime Chat App",
    description:
      "This is a chat application. ①Set your name, ②choose a same room number with your friend or coworker to talk in the chat room.",
    technology: ["bootstrap", "react", "socket.io", "express", "heroku"],
    github: "https://github.com/Chimoha31/Chat_socket.io.git",
    app: "https://chat-application001.herokuapp.com/",
  },
  {
    id: 5,
    image: recipe_app,
    title: "Ezy Pzy Recipe",
    description:
      "This is a foods recipe application by using API for who want to know the ingredients for meals or how to make.",
    technology: ["css", "jquery", "react", "materialui", "netlify"],
    github: "https://github.com/Chimoha31/Recipe.git",
    app: "https://ezypzy-recipe.netlify.app",
  },
  {
    id: 6,
    image: rock_paper_scissors,
    title: "Rock Paper Scissors",
    description:
      "This is a game App for fun, ROCK PAPER SCISSORS. 5 points match.",
    technology: ["sass", "react", "vercel"],
    github: "https://github.com/Chimoha31/Rock_Paper_Scissors.git",
    app: "https://rock-paper-scissors-fungame.vercel.app/",
  },
  {
    id: 7,
    image: qrcode_generator,
    title: "QrCode Generator",
    description: "This is a QrCode Generator App.",
    technology: ["tailwind", "css", "react", "vercel"],
    github: "https://github.com/Chimoha31/QrCode_Generator.git",
    app: "https://qrcode-generator-forfree.vercel.app/",
  },
  {
    id: 8,
    image: mern,
    title: "CRUD - Students Management List ",
    description:
      "It is an application for managing students personal information for school. Also, I implemented login and sign in by using firebase",
    technology: [
      "tailwind",
      "react",
      "nodejs",
      "express",
      "mongoDB",
      "firebase",
      "heroku",
    ],
    github: "https://github.com/Chimoha31/MERN-for-deploy.git",
    app: "https://students-management-list.herokuapp.com/",
  },
  {
    id: 9,
    image: anime_database_app,
    title: "Anime Database",
    description:
      "(Currently I'm working on it) This is an Anime Database application. You can see top, airing, upcoming, o.v.a anime in Japan. Also, you can search anime what you want to know the anime series. Moreover, you can put your favorite anime in your list.",
    technology: [
      "css",
      "bootstrap",
      "material ui",
      "react",
      "firebase",
      "vercel",
    ],
    github: "https://github.com/Chimoha31/Anime_data.git",
    app: "",
  },
];

export default allProjectsElements;
