// PracticalExp.js

import React from 'react';
 
const PracticalExp = (props) => {

  const { setPrax, addForm } = props;

  return (
    <div className="practical">
      {setPrax} 
      <button className="add" id="addPrax" onClick={addForm}>add experience</button>
    </div>
  );
}

export default PracticalExp;