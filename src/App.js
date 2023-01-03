// App.js

import GeneralInfo from "./components/GeneralInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";
import React, { Component } from "react";
 
class App extends Component {
 render() {
   return (
    <div>
      <h1>CV Creator</h1>
      <GeneralInfo></GeneralInfo>
      <EducationalExp></EducationalExp>
      <PracticalExp></PracticalExp>
    </div>

   );
 }
}
 
export default App;