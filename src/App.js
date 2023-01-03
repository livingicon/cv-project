// App.js

import GeneralInfo from "./components/GeneralInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
import CVPreview from "./components/CVPreview";
import React, { Component } from "react";
 
class App extends Component {

  render() {
    return (
      <div>

        <div className="header">
          <h1>CV Creator</h1>
        </div>

        <div className="main">
          <div className="cvForms">
            <GeneralInfo></GeneralInfo>
            <EducationalExp></EducationalExp>
            <PracticalExp></PracticalExp>
          </div>

          <div className="cvPreview">
            <CVPreview></CVPreview>
          </div>

        </div>

        <div className="footer">
          <p>Copyright &copy; 2023 Joshua Hancock</p>
        </div>

      </div>
    );
  }
}
 
export default App;