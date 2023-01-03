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
            <label htmlFor="employment_dates">employment duration</label>
            <input type="text" id="employment_dates" name="employmentDates" placeholder="month year-month year" autoComplete="off" />
          </div>
          <button type="submit">Submit Info</button>
        </form>
      </div>
    );
  }
}
 
export default PracticalExp;