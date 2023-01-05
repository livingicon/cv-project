// App.js

import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
// import CVPreview from "./components/CVPreview";
 
class App extends Component {

  render() {

    return (
      <div>

        <div className="header">
          <h1>CV Creator</h1>
        </div>

        <div className="main">
          <div className="cvForms">
            <GeneralInfo />
            <EducationalExp />
            <PracticalExp />
          </div>
          <div className="cvPreview">
            {/* <CVPreview /> */}
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