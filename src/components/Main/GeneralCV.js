// GeneralCV.js
 
import React, { Component } from 'react';
 
class GeneralCV extends Component {

  render() {
    const { firstName, lastName, email, phone } = this.props;
    return (
      <div className="cvPreview" id="generalCV">
        <ul>
          <li>{`${firstName} ${lastName}`}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
      </div>
    );
  }
}

export default GeneralCV;