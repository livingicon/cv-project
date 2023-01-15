// EducationalExp.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  render() {
    const { setEd, addForm } = this.props;

    return (
      <div>
        <h2>Educational Experience</h2>
        {setEd} 
        <button onClick={addForm}>add education</button>
      </div>
    );
  }
}

export default EducationalExp;