// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { checkState, firstName, lastName, email, phone } = this.props;
    return (
      <div className="cvPreview">
        <p>{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={checkState}>check state</button>
      </div>
    );
  }
}

export default GeneralCV;