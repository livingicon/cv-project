// EducationCV.js
 
import React, { Component } from 'react';
 
const EducationCV = (props) => {
  const { edList, setEd } = props;

  return (
    <ul>
      {setEd.map((obj) => {
        return <li key={obj.key}>{edList[`school${obj.key}`]}</li>;
      })}
    </ul>
  );
};

export default EducationCV;

{/* <div className="cvPreview">
<p>{edList[`school${obj.key}`]}</p> 
<p>{edList[`degree1${obj.key}`]}</p>
<p>{`${edList[`degreeFrom${1}`]} to ${edList[`degreeTo${obj.key}`]}`}</p>
</div> */}