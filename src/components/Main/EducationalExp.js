// EducationalInfo.js

import React, { Component } from 'react';
 
class EducationalExp extends Component {

  render() {
    const { setEd, addEd } = this.props;

    return (
      <div>
        <h2>Educational Experience</h2>
        {setEd}
        <button onClick={addEd}>add education</button>
      </div>
    );
  }
}

export default EducationalExp;