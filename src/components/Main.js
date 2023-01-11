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
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      },
      setGeneralInfo: []
    };
  }

  handleChangeGeneralInfo = (e) => {
    this.setState({
      generalInfo: {
        firstName: e.target.value,
        lastName: e.target.value,
        // email: e.target.value,
        // phoneNumber: e.target.value,
      },
    });
    // console.log(this.state.generalInfo.firstName);
  };

  onSubmitGeneralInfo = (e) => {
    e.preventDefault();
    console.log(this.state.generalInfo.firstName);
    // this.setState({

    // });
  }

  doSomething = (e) => {
    e.preventDefault();
    console.log(this.state.generalInfo.firstName);
  }

  render() {
    const { generalInfo } = this.state; // this.state (if state)

    return (
      <div className="main">
        <GeneralInfo 
          onSubmitGeneralInfo={this.onSubmitGeneralInfo} // this.onSubmitGeneralInfo
          handleChangeGeneralInfo={this.handleChangeGeneralInfo}
          value={generalInfo}
        />

        <EducationalExp 
        
        />

        <PracticalExp 
        
        />

        <CVPreview 
          doSomething={this.doSomething}
        />
      </div>
    );
  }
}
 
export default Main;