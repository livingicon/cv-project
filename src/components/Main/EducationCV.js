// EducationCV.js
 
import React, { Component } from 'react';
 
const EducationCV = (props) => {
  const { edList, setEd } = props;

  return (
    <ul>
      {setEd.map((obj) => {
        return (
          <div key={obj.key}>
            <p key='key1'>{edList[`school${obj.key}`]}</p>
            <p key='key2'>{edList[`degree${obj.key}`]}</p>
            <p>{`${edList[`degreeFrom${1}`]} to ${edList[`degreeTo${obj.key}`]}`}</p>
          </div>

      )})}
    </ul>
  );
};

export default EducationCV;