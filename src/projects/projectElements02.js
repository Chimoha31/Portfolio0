import chat from "../projectsImage/chat.png";
import recipe_app from "../projectsImage/recipe_app.png";
import rock_paper_scissors from "../projectsImage/rock_paper_scissors.png";

let projectElements02 = [
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
];

export default projectElements02;