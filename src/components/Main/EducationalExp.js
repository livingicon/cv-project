// EducationalExp.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  render() {
    const { setEd, addForm } = this.props;

    return (
      <div className="education">
        {setEd} 
        <button className="add" id="addEducation" onClick={addForm}>add education</button>
      </div>
    );
  }
}

export default EducationalExp;