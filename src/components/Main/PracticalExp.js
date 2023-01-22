// PracticalExp.js

import React, { Component } from 'react';
 
class PracticalExp extends Component {

  render() {
    const { setPrax, addForm } = this.props;

    return (
      <div className="practical">
        {setPrax} 
        <button className="add" id="addPrax" onClick={addForm}>add experience</button>
      </div>
    );
  }
}

export default PracticalExp;