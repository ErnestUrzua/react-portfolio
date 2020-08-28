import React, { Component } from "react";
import "./main.css";
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
        {/* container to hold project cards */}
        <div className="container-fluid p-2 col-9 justify-content-center white">
          {
        
              <Cards
                image={this.state.Img.assets[0].image}
                name={this.state.Img.assets[0].name}
              />
            
          }
        </div>
      </div>
    );
  }
}

export default About;
