// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
 
class Main extends Component {
  constructor() {
    super();

    this.state = { // do I need this?
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school1: "",
      degree1: "",
      degreeFrom1: "",
      degreeTo1: "",
      position: "",
      employer: "",
      jobFrom: "",
      jobTo: "",
      tasks: "",
      edCount: 1, // need both
      setEd: [<EducationalExp
        key={0}
        edCount={1} // need both
        handleChangeInput={this.handleChangeInput} />]
    };
  }

  addEd = (e) => {
    e.preventDefault();
    this.setState({
      edCount: this.state.setEd.length + 1,
      setEd: this.state.setEd.concat(
        <EducationalExp 
          edCount={this.state.setEd.length + 1} 
          key={this.state.setEd.length}
          handleChangeInput={this.handleChangeInput} />
      )
    });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitPreviewCV = (e) => {
    e.preventDefault(); // needs to not clear form
    console.log(this.state);
  }

  render() {

    return (
      <div className="main">
        <GeneralInfo 
          handleChangeInput={this.handleChangeInput}
        />


        <h2>Educational Experience</h2>
        {this.state.setEd}
        {/* <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          addEd={this.addEd}
        /> */}
        <button onClick={this.addEd}>add education</button>



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