// PracticalCV.js
 
import React from 'react';
 
const PracticalCV = (props) => {
  const { praxList, setPrax } = props;

  return (
    <ul className="praxCV">
      {setPrax.map((obj) => {
        return (
          <div key={obj.key}>
            <p key='key1'>{praxList[`position${obj.key}`]}</p>
            <p key='key2'>{praxList[`employer${obj.key}`]}</p>
            <p key='key3'>{`${praxList[`jobFrom${obj.key}`]} to ${praxList[`jobTo${obj.key}`]}`}</p>
            <p key='key4' className="last">{praxList[`tasks${obj.key}`]}</p>
          </div>
      )})}
    </ul>
  );
};

export default PracticalCV;