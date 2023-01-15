// PracticalExp.js

import React, { Component } from 'react';
 
class PracticalExp extends Component {

  render() {
    const { setPrax, addForm } = this.props;

    return (
      <div>
        <h2>Practical Experience</h2>
        {setPrax} 
        <button onClick={addForm}>add experience</button>
      </div>
    );
  }
}

export default PracticalExp;