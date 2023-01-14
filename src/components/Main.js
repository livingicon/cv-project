// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
 
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
      setEd: [
        <EdForm
          key={1}
          edCount={1} // need both
          handleChangeInput={this.handleChangeInput}
          deleteEd={this.deleteEd} 
        />
      ]
    };
  }

  addEd = (e) => {
    e.preventDefault();
    this.setState({
      edCount: this.state.edCount + 1,
      setEd: this.state.setEd.concat(
        <EdForm 
          edCount={this.state.edCount + 1} 
          key={this.state.edCount + 1}
          handleChangeInput={this.handleChangeInput}
          deleteEd={this.deleteEd} />
      )
    });
  }

  deleteEd = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.btn);
    this.setState({
      setEd: this.state.setEd.filter(index => this.state.setEd.indexOf(index) !== e.target.dataset.btn - 1)
    });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitPreviewCV = (e) => { // must setState (to remove deleted elements)
    e.preventDefault(); // needs to not clear form
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
          setEd={this.state.setEd}
          addEd={this.addEd}
          deleteEd={this.deleteEd}
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