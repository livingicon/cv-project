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
        email: e.target.value,
        phoneNumber: e.target.value,
      },
    });
  };

  onSubmitGeneralInfo = (e) => {
    e.preventDefault();
    console.log("general info is go!")
    // this.setState({

    // });
  }

  doSomething = (e) => {
    e.preventDefault();
    console.log("do something please?");
  }

  render() {
    const { onSubmitGeneralInfo, doSomething } = this; // this.state (if state)

    return (
      <div className="main">
        <GeneralInfo 
          onSubmitGeneralInfo={onSubmitGeneralInfo} // this.onSubmitGeneralInfo
          // handleChangeGeneralInfo={handleChangeGeneralInfo}
        />

        <EducationalExp 
        
        />

        <PracticalExp 
        
        />

        <CVPreview 
          doSomething={doSomething}
        />
      </div>
    );
  }
}
 
export default Main;