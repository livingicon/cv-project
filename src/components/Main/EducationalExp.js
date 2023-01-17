// EducationalExp.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  render() {
    const { setEd, addForm } = this.props;

    return (
      <div>
        {setEd} 
        <button onClick={addForm}>add education</button>
      </div>
    );
  }
}

export default EducationalExp;