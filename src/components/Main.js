// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";
 
class Main extends Component {
  render() {
    return (
      <div className="main">
        <GeneralInfo />
        <EducationalExp />
        <PracticalExp />
      </div>
    );
  }
}
 
export default Main;