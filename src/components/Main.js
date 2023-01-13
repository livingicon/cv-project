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
      setEducation: [<EducationalExp key={0} />]
    };
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      setEducation: this.state.setEducation.concat(<EducationalExp key={this.state.setEducation.length} />)
    });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // dynamic keys
    });
  };

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

        {this.state.setEducation}
        {/* <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          addEducation={this.addEducation}
        /> */}
        <button onClick={this.addEducation}>temporary add test</button>

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