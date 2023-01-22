// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { firstName, lastName, email, phone } = this.props;
    return (
      <div className="cvPreview" id="generalCV">
        <div>
          <p>{`${firstName} ${lastName}`}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default GeneralCV;