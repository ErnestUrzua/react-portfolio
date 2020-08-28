import React, { Component } from "react";
import "./about.css";
import Img from "../db.json";
import Cards from "../components/Cards";




class About extends Component {

  //holds our game information
  state = {
    Img //array of all imgs from json file
  };

  //handles the click on the pictures
  handleItemClick = event => {
    const id = event.target.id;//select the id of the picture clicked
    console.log("Clicked ID:" + id);
    const newState = { ...this.state }; //temp variable to hold our state info

    //update state variables
    this.setState(newState);
    console.log("setting the newState");
  }


  render() {
    return (
      <div>
        {/* container to hold about me cards */}
        <div className="container p-2 col-12 white">
        
          <img className="image" src={this.state.Img.assets[0].image} ></img>
         
            <div className="container w-50 orange-text">
              <p>My passion for creation first started in Animation
              and art. Through the process of creating
              I realized that designing, building, and iterating is something that is common amongst many
              disciplines, more specifically software development.
              This shared creation process has naturally led me to software development and its fascinating
              power.
              Joining both my passions of art and technology only expands my skill set to have a
            unique perspective on creation.</p>
            </div>
        </div>

        </div>
    );
  }
}

export default About;
