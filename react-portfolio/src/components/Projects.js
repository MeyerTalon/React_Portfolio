import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#1F5673",
      "& > *": {
        margin: 0,
      },
    },
    title: {
      color: "#90C3C8",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "36px",
    },
    projectContainer: {
      backgroundColor: "#1F5673",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "20px",
    },
    project: {
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      transform: "translateY(0)",
      backgroundColor: "#1F5673",
      margin: "50px",
      "&:hover": {
        backgroundColor: "#3f51b5",
      },
    },
    projectImageContainer: {
      height: "200px",
      marginBottom: "10px"
    },
    projectImage: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      border: "5px solid #3f51b5",
    },
    projectName: {
      color: "#90C3C8",
      marginTop: "10px",
    },
    projectDescription: {
      color: "#90C3C8",
      marginTop: "10px"
    },
  }));

const projects = [
    {
      name: "Note Pad",
      description: "Note Pad is simple app designed to help the user write and store their notes",
      imageSrc: "../images/NoteTaker.png",
      githubLink: "https://github.com/MeyerTalon/Note-Taker",
      deployedLink: "https://talon-note-taker.herokuapp.com/"
    },
    {
      name: "JobFinder",
      description: "JobFinder is a fun way to find out what type of software development is right for you.",
      imageSrc: " ../images/JobFinder.png",
      githubLink: "https://github.com/MeyerTalon/Job_Finder",
      deployedLink: "https://meyertalon.github.io/Job_Finder/"
    },
    {
      name: "WaterWise",
      description: "An open chat forum where users can discuss their favorite water brands!",
      imageSrc: "../images/WaterWise.png",
      githubLink: "https://github.com/sullivann7789/waterwise",
      deployedLink: ""
    },
    {
      name: "Employee Database Mockup",
      description: "A mockup employee database backend built with mySQL and JavaScript.",
      imageSrc: "../images/Employees.png",
      githubLink: "https://github.com/MeyerTalon/Employee-Database",
      deployedLink: ""
    },
    {
      name: "Weather Dashboard",
      description: "A simple weather app that displays the 5 day forecast for any city.",
      imageSrc: " ../images/WeatherDashboard.png",
      githubLink: "https://github.com/MeyerTalon/Weather_Dashboard",
      deployedLink: "https://meyertalon.github.io/Weather_Dashboard/"
    },
    {
      name: "Eccommerce Backend Mockup",
      description:"A mockup for an eccommerce website useing sequelize and mySQL!",
      imageSrc: " ../images/DollarSign.png",
      githubLink: "https://github.com/MeyerTalon/Ecommerce_Backend",
      deployedLink: ""
    },
  ];
export default function Projects() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <div className={classes.title}>Projects</div>

        <div className={classes.projectContainer}>
            {projects.map((project, index) => (
            <div
                key={index}
                className={classes.project}
                onClick={(e) => {
                const element = e.currentTarget;
                if (element) {
                    element.style.backgroundColor = "#34D399";
                    setTimeout(() => {
                    element.style.backgroundColor = "#222222";
                    }, 300);
                }
                }}
            >
                <div className={classes.projectImageContainer}>
                <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    className={classes.projectImage}
                    src={project.imageSrc}
                    alt="Project Screenshot"
                    />
                </a>
                <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div style={{ textAlign: "center" }}>
                    <h3 className={classes.projectName}>{project.name}</h3>
                    <p className={classes.projectDescription}>
                    {project.description}
                </p>
                </div>
                </a>
                </div>
                
            </div>
            ))}
        </div>
        </div>
    );
}