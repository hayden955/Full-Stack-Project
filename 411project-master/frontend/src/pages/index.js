//This is for the home page (despite the file name)
import React from 'react';
import beachPic from "./homePageBeachPic.jpg";

const Home = () => {
    return (
      <div>
        <img style = {{
          height: "100vh",
          width: "100%"
          }} 
          src = {beachPic}>
        </img>

        <h1 style = {{
          alignItems: 'center', 
          justifyContent: 'center', 
          color: "Ivory", 
          fontStyle: "italic", 
          alignItems: "top", 
          justifyContent: 'center', 
          position: "absolute", 
          top: 350, 
          left: 0, 
          right: 0, 
          bottom: 0}}> 
          Welcome to the Beach Dayta! 
        </h1>

      </div>
    );
  }
  
  export default Home;