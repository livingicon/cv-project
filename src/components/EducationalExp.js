// EducationalInfo.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {
  render() {

    return (
      <div className="forms">
        <h2>Educational Experience</h2>
        <form>
          <div>
            <label htmlFor="school_name">school name</label>
            <input type="text" id="school_name" name="schoolName" placeholder="university of example" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="degree_program">degree or certification</label>
            <input type="text" id="degree_program" name="degree" placeholder="bachelor of example in example" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="began_study">began study</label>
            <input type="date" id="began_study" name="beganStudy" />
            <label htmlFor="completed_study">finished study</label>
            <input type="date" id="completed_study" name="completeStudy" />
          </div>
        </form>
        <div className="btns">
        <button type="submit">add</button>
          <button type="button">edit</button>
          <button type="button">delete</button>
        </div>
      </div>
    );
  }
}
 
export default EducationalExp;