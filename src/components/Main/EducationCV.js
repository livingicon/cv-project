// EducationCV.js
 
import React from 'react';
 
const EducationCV = (props) => {

  return (
    <ul className="edCV">
      {props.setEd.map((obj) => {
        return (
          <div key={obj.key}>
            <p key='key1'>{props.edList[`school${obj.key}`]}</p>
            <p key='key2'>{props.edList[`degree${obj.key}`]}</p>
            <p key='key3' className="last">{`${props.edList[`degreeFrom${obj.key}`]} 
              to ${props.edList[`degreeTo${obj.key}`]}`}</p>
          </div>
      )})}
    </ul>
  );
};

export default EducationCV;