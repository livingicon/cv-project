// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
 
class Main extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     task: {
  //       text: '', 
  //       id: uniqid()
  //     },
  //     tasks: [],
  //   };
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     task: {
  //       text: e.target.value,
  //       id: this.state.task.id,
  //     },
  //   });
  // };

  render() {
    // const {} = this.state;

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