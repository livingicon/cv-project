// EducationCV.js
 
import React from 'react';
 
const EducationCV = (props) => {
  const { edList, setEd } = props;

  return (
    <ul className="edCV">
      {setEd.map((obj) => {
        return (
          <div key={obj.key}>
            <p key='key1'>{edList[`school${obj.key}`]}</p>
            <p key='key2'>{edList[`degree${obj.key}`]}</p>
            <p key='key3' className="last">{`${edList[`degreeFrom${obj.key}`]} to ${edList[`degreeTo${obj.key}`]}`}</p>
          </div>
      )})}
    </ul>
  );
};

export default EducationCV;