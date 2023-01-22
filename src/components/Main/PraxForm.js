// PraxForm.js
 
import React, { Component } from 'react';
 
class PraxForm extends Component {

  render() {
    const { praxCount, handleChangeInput, position, employer, jobFrom, jobTo, tasks, deleteForm } = this.props;

    return (
      <div className="praxForms">
        <form id="work">
          <div>
            <label htmlFor="position">job title</label>
            <input 
              onChange={handleChangeInput}
              value={position}
              type="text" 
              id="position" 
              name={`position${praxCount}`} 
              placeholder="position"
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
              name={`employer${praxCount}`}
              placeholder="company"
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
              name={`jobFrom${praxCount}`}
            />
            <label htmlFor="jobTo">to</label>
            <input 
              onChange={handleChangeInput}
              value={jobTo}
              type="date" 
              id="jobTo" 
              name={`jobTo${praxCount}`}
            />
          </div>
          <div>
            <label htmlFor="tasks">main tasks</label>
            <textarea
              onChange={handleChangeInput}
              value={tasks}
              type="text" 
              id="tasks" 
              name={`tasks${praxCount}`} 
              autoComplete="off"
            />
          </div>
          <button data-btn={`${praxCount}`} onClick={deleteForm}>remove experience</button>
        </form>
      </div>

      
    );
  }
}
 
export default PraxForm;