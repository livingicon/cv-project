// EducationalInfo.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {
  render() {
    const { handleChangeInput, school, degree, degreeFrom, degreeTo } = this.props;

    return (
      <div className="forms">
        <h2>Educational Experience</h2>
        <form>
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
          <button className="btns" type="button">add more</button>
        </form>
      </div>
    );
  }
}
 
export default EducationalExp;