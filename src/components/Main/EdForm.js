// EdForm.js

import React from 'react';
 
const EdForm = (props) => {

  const { edCount, handleChangeInput, school, degree, degreeFrom, degreeTo, deleteForm } = props;

  return (
    <div className="edForms">
      <form id="education">
        <div>
          <label htmlFor="school">organization administering degree or certification</label>
          <input 
            onChange={handleChangeInput}
            defaultValue={school}
            type="text" 
            id="school" 
            name={`school${edCount}`}
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
        <button className="remove" data-btn={`${edCount}`} onClick={deleteForm}>remove education</button>
      </form>
    </div>
  );
}

export default EdForm;