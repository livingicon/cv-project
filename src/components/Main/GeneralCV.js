// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { firstName, lastName, email, phone } = this.props;
    return (
      <div className="cvPreview" id="generalCV">
        <p>{`${firstName} ${lastName}`}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default GeneralCV;