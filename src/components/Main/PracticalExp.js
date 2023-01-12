// PracticalExp.js
 
import React, { Component } from 'react';
 
class PracticalExp extends Component {
  render() {
    const { handleChangeInput, position, employer, jobFrom, jobTo, tasks } = this.props;

    return (
      <div className="forms">
        <h2>Practical Experience</h2>
        <form>
        <div>
            <label htmlFor="position">job title</label>
            <input 
              onChange={handleChangeInput}
              value={position}
              type="text" 
              id="position" 
              name="position" 
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="employer">employer</label>
            <input 
              onChange={handleChangeInput}
              value={employer}
              type="text" 
              id="employer" 
              name="employer" 
              autoComplete="off" 
            />
          </div>
          <div>
            <label htmlFor="jobFrom">from</label>
            <input 
              onChange={handleChangeInput}
              value={jobFrom}
              type="date" 
              id="jobFrom" 
              name="jobFrom"
            />
            <label htmlFor="jobTo">to</label>
            <input 
              onChange={handleChangeInput}
              value={jobTo}
              type="date" 
              id="jobTo" 
              name="jobTo"
            />
          </div>
          <div>
            <label htmlFor="tasks">main tasks</label>
            <textarea
              onChange={handleChangeInput}
              value={tasks}
              type="text" 
              id="tasks" 
              name="tasks" 
              autoComplete="off"
            />
          </div>
          <button className="btns" type="button">add more</button>
        </form>
      </div>

      
    );
  }
}
 
export default PracticalExp;