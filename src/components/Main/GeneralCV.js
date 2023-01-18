// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { previewState, firstName, lastName, email, phone } = this.props; // this.props.firstName

    return (
      <div className="cvPreview">
        <h3>Preview State</h3>
      </div>
    );
  }
}

 
export default GeneralCV;