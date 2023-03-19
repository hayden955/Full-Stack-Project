import React from 'react';
import beachPic from "./aboutPageBeachPic.jpg";

const About = () => {
    return (
      <div>
        <img style = {{
          height: "100vh",
          width: "100%"
          }} 
          src = {beachPic}>
        </img>

        <h1 style = {{
          fontFamily: "Roboto", 
          color: "#FFDEAD", 
          fontStyle: "italic",
          alignItems: "top", 
          justifyContent: 'center', 
          position: "absolute", 
          top: 70, 
          left: 0, 
          right: 0, 
          bottom: 0,  
          fontSize: "40px", 
          fontWeight: "300"
          }}> 
          This site is for you beach-goers out there! Whether you want to play or just relax, we can provide you with a fast and simple way to navigate beaches nearby! 
        </h1>

        <h2 style = {{
          alignItems: "top", 
          justifyContent: "center", 
          position: "absolute", 
          top: 150, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#FFDEAD", 
          fontSize: "40px", 
          fontFamily: "Roboto", 
          fontWeight: "300", 
          fontStyle: "italic"
          }}> 
          Sign up to save your favorite beaches or simply look up beaches without an account!
        </h2>

        <h3 style = {{
          position: "absolute", 
          top: 250, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "white", 
          fontSize: "40px", 
          fontFamily: "Roboto", 
          fontWeight: "bold", 
          fontStyle: "bold",
          textDecorationLine: "underline"
          }}> 
          Meet the Team: 
        </h3>

        <a href = "https://www.linkedin.com/in/albert-fung-299625143/"
        style = {{
          position: "absolute", 
          top: 350, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#F0FFFF", 
          fontSize: "36px", 
          fontFamily: "Roboto", 
          fontWeight: "100",
          textDecorationLine: "none"
          }}> 
          Albert Fung 
        </a>

        <a href = "https://www.linkedin.com/in/deren-singh"
        style = {{
          position: "absolute", 
          top: 400, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#F0FFFF", 
          fontSize: "36px", 
          fontFamily: "Roboto", 
          fontWeight: "100",
          textDecorationLine: "none"
          }}> 
          Deren Singh 
        </a>

        <a href = "https://www.linkedin.com/in/emma-wirt-42a469182/"
        style = {{
          position: "absolute", 
          top: 450, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#F0FFFF", 
          fontSize: "36px", 
          fontFamily: "Roboto", 
          fontWeight: "100",
          textDecorationLine: "none"
          }}> 
          Emma Wirt
        </a>

        <a href = "https://www.linkedin.com/in/gian-sirio112358/"
        style = {{
          position: "absolute", 
          top: 500, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#F0FFFF", 
          fontSize: "36px", 
          fontFamily: "Roboto", 
          fontWeight: "100",
          textDecorationLine: "none"
          }}> 
          Giancarlo Sirio 
        </a>

        <a href = "https://www.linkedin.com/in/hayden-jennings-9b665719b/"
        style = {{
          position: "absolute", 
          top: 550, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          color: "#F0FFFF", 
          fontSize: "36px", 
          fontFamily: "Roboto", 
          fontWeight: "100",
          textDecorationLine: "none"
          }}> 
          Hayden Jennings
        </a>

      </div>
      );
  }
  
  export default About;

  //The below block of code can be pluggd in/replace the linkedin href links
  //They are the same style and format, but without links to linkedin pages

/*
  <h3 style = {{position: "absolute", top: 250, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100", textDecorationLine: "underline\
  "}}> Meet the Team: </h3>
  <p style = {{position: "absolute", top: 300, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100"}} > Albert </p> 
  <p style = {{position: "absolute", top: 350, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100"}} > Deren </p> 
  <p style = {{position: "absolute", top: 400, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100"}} > Emma </p> 
  <p style = {{position: "absolute", top: 450, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100"}} > Giancarlo </p> 
  <p style = {{position: "absolute", top: 500, left: 0, right: 0, bottom: 0, color: "#F0FFFF\
  ", fontSize: "40px", fontFamily: "Roboto", fontWeight: "100"}} > Hayden </p> 
  */