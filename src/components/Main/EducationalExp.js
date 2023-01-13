// EducationalInfo.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  duplicateForm = () => {
    // console.log(this.state.educationCount);
    for(let i=0; i<this.state.educationCount; i++) {
      console.log("add form");
    }
  }

  render() {
    const { handleChangeInput, school, degree, degreeFrom, degreeTo, addEducation } = this.props;

    return (

      <div className="forms">
        <h2>Educational Experience</h2>
        <form id="education">
          <div>
            <label htmlFor="school">organization administering degree or certification</label>
            <input 
              onChange={handleChangeInput}
              value={school}
              type="text" 
              id="school" 
              name="school"
              placeholder="Purdue University"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="degree">degree or certification</label>
            <input
              onChange={handleChangeInput}
              value={degree}
              type="text" 
              id="degree" 
              name="degree" 
              placeholder="Bachelor of Arts in Computer Science" 
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="degreeFrom">from</label>
            <input 
              onChange={handleChangeInput}
              value={degreeFrom}
              type="date" 
              id="degreeFrom" 
              name="degreeFrom"
            />
            <label htmlFor="degreeTo">to</label>
            <input 
              onChange={handleChangeInput}
              value={degreeTo}
              type="date" 
              id="degreeTo" 
              name="degreeTo"
            />
          </div>
          <button 
            onClick={addEducation}
            className="btns" 
            type="submit"
            >add education</button>
        </form>
      </div>
    );
  }
}

export default EducationalExp;