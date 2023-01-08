// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";
import CVPreview from "./CVPreview";
 
class Main extends Component {
  render() {
    return (
      <div className="main">
        <GeneralInfo />
        <EducationalExp />
        <PracticalExp />
        <CVPreview />
      </div>
    );
  }
}
 
export default Main;