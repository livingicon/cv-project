// PracticalCV.js
 
import React, { Component } from 'react';
 
class PracticalCV extends Component {

  render() {
    const { edCount, previewState, checkState, lastName, email, phone } = this.props;

    return (
      <div className="cvPreview">
        {/* why not? Just because asynchronous? */}
        <p>{`${previewState[0][1]} ${previewState[1][1]}`}</p>
        <p>{`${previewState[2][1]}`}</p>
        <p>{`${previewState[3][1]}`}</p>
        <button onClick={checkState}>check state</button>
      </div>
    );
  }
}

 
export default PracticalCV;