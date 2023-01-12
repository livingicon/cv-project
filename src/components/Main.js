// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
 
class Main extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      degreeFrom: "",
      degreeTo: "",
      position: "",
      employer: "",
      jobFrom: "",
      jobTo: "",
      tasks: "",
      educationCount: 1
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // dynamic keys
    });
  };

  addEducationalExp = (e) => { // make work for practicalExp too?
    e.preventDefault();
    this.setState({
      educationCount: this.state.educationCount + 1 //
    });
    console.log(this.state.educationCount);
  }

  onSubmitPreviewCV = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {

    return (
      <div className="main">
        <GeneralInfo 
          handleChangeInput={this.handleChangeInput}
        />

        <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          addEducationalExp={this.addEducationalExp}
        />

        <PracticalExp 
          handleChangeInput={this.handleChangeInput}
        />

        <CVPreview 
          onSubmitPreviewCV={this.onSubmitPreviewCV}
        />
      </div>
    );
  }
}
 
export default Main;