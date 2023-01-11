// PracticalExp.js
 
import React, { Component } from 'react';
 
class PracticalExp extends Component {
  render() {
    return (
      <div className="forms">
        <h2>Practical Experience</h2>
        <form>
          <div>
            <label htmlFor="company_name">company name</label>
            <input type="text" id="company_name" name="companyName" placeholder="example company" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="position_title">position title</label>
            <input type="text" id="position_title" name="positionTitle" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="main_job_tasks">main job tasks</label>
            <input type="text" id="main_job_tasks" name="mainJobTasks" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="began_employment">employment began</label>
            <input type="date" id="began_employment" name="beganEmployment" />
            <label htmlFor="finished_employment">employment finished</label>
            <input type="date" id="finished_employment" name="finishedEmployment" />
          </div>
        </form>
        <div className="btns">
          <button type="submit">add</button>
          <button type="button">delete</button>
        </div>
      </div>

      
    );
  }
}
 
export default PracticalExp;