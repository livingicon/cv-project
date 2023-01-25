// GeneralCV.js
 
import React, { Component } from 'react';

const GeneralCV = (props) => {

  return (
    <div className="cvPreview" id="generalCV">
      <div>
        <p>{`${props.firstName} ${props.lastName}`}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default GeneralCV;