// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { previewState, checkState, firstName, lastName, email, phone } = this.props;

    return (
      <div className="cvPreview">
        <button onClick={checkState}>check state</button>
        {previewState}
      </div>
    );
  }
}

 
export default GeneralCV;