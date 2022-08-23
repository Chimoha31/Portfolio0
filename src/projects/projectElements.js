import cutory from "../projectsImage/CUTORY.png";
import portfolio_chiho from "../projectsImage/portfolio_chiho.png";
import hotel_booking from "../projectsImage/hotel_booking.png";

let projectElements = [
  {
    id: 1,
    image: portfolio_chiho,
    title: "Portfolio - Chiho Maekawa -",
    description: "This is my portfolio.",
    technology: ["react", "bootstrap","materialui", "emailjs", "vercel"],
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
    description: "This is an application for booking a hotel. Admin: test@test.com for email, 111111 for password.",
    technology: ["bootstrap", "react", "node.js", "express", "mongoDB", "firebase", "heroku"],
    github: "https://github.com/Chimoha31/Ciccc_FinalProject",
    app: "https://bookinghotel01.herokuapp.com/",
  },
  // {
  //   id: 9,
  //   image: anime_database_app,
  //   title: "Anime Database",
  //   description:
  //     "(Currently I'm working on it) This is an Anime Database application. You can see top, airing, upcoming, o.v.a anime in Japan. Also, you can search anime what you want to know the anime series. Moreover, you can put your favorite anime in your list.",
  //   technology: [
  //     "css",
  //     "bootstrap",
  //     "material ui",
  //     "react",
  //     "firebase",
  //     "vercel",
  //   ],
  //   github: "https://github.com/Chimoha31/Anime_data.git",
  //   app: "",
  // },
];

export default projectElements;