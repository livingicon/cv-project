// EducationalInfo.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  duplicateForm = () => {
    // console.log(this.state.edCount);
    for(let i=0; i<this.state.edCount; i++) {
      console.log("add form");
    }
  }

  render() {
    const { edCount, handleChangeInput, school, degree, degreeFrom, degreeTo, addEd } = this.props;

    return (
      

      <div className="forms">
        <form id="education">
          <div>
            <label htmlFor="school">organization administering degree or certification</label>
            <input 
              onChange={handleChangeInput}
              value={school}
              type="text" 
              id="school" 
              name={`school${edCount}`}
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
              name={`degree${edCount}`} 
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
              name={`degreeFrom${edCount}`}
            />
            <label htmlFor="degreeTo">to</label>
            <input 
              onChange={handleChangeInput}
              value={degreeTo}
              type="date" 
              id="degreeTo" 
              name={`degreeTo${edCount}`}
            />
          </div>
          {/* <button 
            onClick={addEd}
            className="btns" 
            type="submit"
            >add education</button> */}
        </form>
      </div>
    );
  }
}

export default EducationalExp;