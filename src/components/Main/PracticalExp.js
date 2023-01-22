// PracticalExp.js

import React, { Component } from 'react';
 
class PracticalExp extends Component {

  render() {
    const { setPrax, addForm } = this.props;

    return (
      <div>
        {setPrax} 
        <button className="addPrax" onClick={addForm}>add experience</button>
      </div>
    );
  }
}

export default PracticalExp;