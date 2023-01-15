// PraxForm.js
 
import React, { Component } from 'react';
 
class PraxForm extends Component {

  render() {
    const { edCount, handleChangeInput, position, employer, jobFrom, jobTo, tasks, deletePrax } = this.props;

    return (
      <div className="forms">
        <form id="work">
          <div>
            <label htmlFor="position">job title</label>
            <input 
              onChange={handleChangeInput}
              value={position}
              type="text" 
              id="position" 
              name={`position${edCount}`} 
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
              name={`employer${edCount}`}
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
              name={`jobFrom${edCount}`}
            />
            <label htmlFor="jobTo">to</label>
            <input 
              onChange={handleChangeInput}
              value={jobTo}
              type="date" 
              id="jobTo" 
              name={`jobTo${edCount}`}
            />
          </div>
          <div>
            <label htmlFor="tasks">main tasks</label>
            <textarea
              onChange={handleChangeInput}
              value={tasks}
              type="text" 
              id="tasks" 
              name={`tasks${edCount}`} 
              autoComplete="off"
            />
          </div>
          <button data-btn={`${edCount}`} onClick={deletePrax}>remove</button>
        </form>
      </div>

      
    );
  }
}
 
export default PraxForm;