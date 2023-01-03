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
            <label htmlFor="date_of_study">date of study</label>
            <input type="text" id="date_of_study" name="dateOfStudy" placeholder="month year-month year" autoComplete="off" />
          </div>
          <button type="submit">Submit Info</button>
        </form>
      </div>
    );
  }
}
 
export default EducationalExp;