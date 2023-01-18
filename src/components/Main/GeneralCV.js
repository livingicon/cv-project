// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { handleChangeInput, firstName, lastName, email, phone } = this.props; // this.props.firstName

    return (
      <div className="cvPreview">
        <h1>I'm HERE!!</h1>
      </div>
    );
  }
}

 
export default GeneralCV;