import React from 'react';
import Project from './project';

const projects =[
  {
    id: 0,
    title: "Instant Messenger",
    languages: "socket.io, handlebar, HTML, CSS, JavaScript, MySQL",
    image: "/img/chat-project.jpeg",
    description: "Allows you to send instant message to your friend!",
    repo: "https://github.com/ricky8221/chat-project",
  },
  {
    id: 1,
    title: "Tech Blog",
    languages: "HTML, JavaScript, CSS, MySQL, handlebar.js, heroku, sequelize, bootstrap",
    image: "/img/tech-blog.jpeg",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/ricky8221/Tech_Blog_Module_14_Qi_Chen",
  },
  {
    id: 2,
    title: "Employee Tracker",
    languages: "Node.js, npm, MySQL",
    image: "/img/employee-tracker.png",
    description: "Allows customer to manage the employee by using command line!",
    repo: "https://github.com/ricky8221/employee_tracker_Module_12_Qi_Chen",
  },
  {
    id: 4,
    title: "Social Network API",
    languages: "JavaScript, Express, MongoDB, Mongoose",
    image: "/img/social-network.jpeg",
    description: "Builded a NoSQL database for social network",
    repo: "https://github.com/ricky8221/social_network_API_Qi_Chen",
  },
  {
    id: 5,
    title: "Investment Watchlist",
    languages: "HTML, CSS, JavaScript, API",
    image: "/img/investment-watchlist.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/jsp220/Investment-Watchlist",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://ricky8221.github.io/Weather_dashboard_Qi_Chen_Module6/",
  },
]

function Portfolio() {
  return (
    <div className='mainBody portfolioBody'>
      <h1 className="content">Portfolio</h1>
      <hr />

      <Project projects={projects} />
    </div>
  );
}


export default Portfolio;