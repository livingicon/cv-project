// EducationCV.js
 
import React, { Component } from 'react';
 
class EducationCV extends Component {

  render() {
    const { edList, school, edCount, previewState, checkState, lastName, email, phone } = this.props;

    return (
      <div className="cvPreview">
        <h4>{edList.school1}</h4>
      </div>
    );
  }
}

 
export default EducationCV;