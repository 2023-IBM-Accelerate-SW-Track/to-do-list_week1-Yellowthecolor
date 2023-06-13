import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={pfp}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Roberto Delgado</div>
              <div className="brief_description">
                I am computer science student with a focus on software engineering. I have traveled 34 states in the continental U.S. and I am hoping to finish them off soon. I love computer networking and has been my focus for most of my adult life. 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}