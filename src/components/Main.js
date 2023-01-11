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
        [e.target.name]: e.target.value, // dynamic keys
    });
  };

  onSubmitGeneralInfo = (e) => {
    e.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phone);
    // this.setState({

    // });
  }

  onSubmitPreviewCV = (e) => {
    e.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phone);
  }

  render() {
    // const { generalInfo } = this.state; 

    return (
      <div className="main">
        <GeneralInfo 
          onSubmitGeneralInfo={this.onSubmitGeneralInfo} // this.onSubmitGeneralInfo
          handleChangeGeneralInfo={this.handleChangeGeneralInfo}
          // generalInfo={generalInfo}
        />

        <EducationalExp 
        
        />

        <PracticalExp 
        
        />

        <CVPreview 
          doSomething={this.onSubmitPreviewCV}
        />
      </div>
    );
  }
}
 
export default Main;