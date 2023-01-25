// Main.js

import React, { useState } from 'react';
// import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import GeneralCV from "./Main/GeneralCV";
import EducationalExp from "./Main/EducationalExp";
import EducationCV from "./Main/EducationCV";
import PracticalExp from "./Main/PracticalExp";
import PracticalCV from "./Main/PracticalCV";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
import PraxForm from "./Main/PraxForm";
import "../styles/forms.css";


const Main = (props) => {
  const [edCount, setEdCount] = useState(1);
  const [praxCount, setPraxCount] = useState(1);
  const [edList, setEdList] = useState({});
  const [praxList, setPraxList] = useState([]);
  const [setEd, setSetEd] = useState([
    <EdForm
      key={1}
      edCount={1}
      handleChangeInput={this.handleChangeInput}
      deleteForm={this.deleteForm} 
    />
  ]);
  const [setPrax, setSetPrax] = useState([
    <PraxForm
      key={1}
      praxCount={1}
      handleChangeInput={this.handleChangeInput}
      deleteForm={this.deleteForm} 
    />
  ]);

  const handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitPreviewCV = (e) => { 
    const general = document.getElementById('general');
    const edForms = document.getElementsByClassName('edForms');
    const praxForms = document.getElementsByClassName('praxForms');
    const add = document.getElementsByClassName('add');
    const generalCV = document.getElementById('generalCV');
    const edCV = document.getElementsByClassName('edCV');
    const praxCV = document.getElementsByClassName('praxCV');
    if (e.target.innerHTML === 'Preview CV') {
      e.target.innerHTML = 'Edit CV'
      // hide
      general.style.display = 'none';
      for (let i=0; i<edForms.length; i++){
        edForms[i].style.display = 'none';
      }
      for (let i=0; i<praxForms.length; i++){
        praxForms[i].style.display = 'none';
      }
      for (let i=0; i<add.length; i++){
        add[i].style.display = 'none';
      }
      // unhide
      generalCV.style.display = 'flex';
      for (let i=0; i<edCV.length; i++){
        edCV[i].style.display = 'flex';
      }
      for (let i=0; i<praxCV.length; i++){
        praxCV[i].style.display = 'flex';
      }

      const orderedSchool = {};
      this.state.setEd.map(obj => {
        orderedSchool[`school${obj.key}`] = this.state[`school${obj.key}`];
        orderedSchool[`degree${obj.key}`] = this.state[`degree${obj.key}`];
        orderedSchool[`degreeFrom${obj.key}`] = this.state[`degreeFrom${obj.key}`];
        orderedSchool[`degreeTo${obj.key}`] = this.state[`degreeTo${obj.key}`];
      })
      const orderedPrax = {};
      this.state.setPrax.map(obj => {
        orderedPrax[`position${obj.key}`] = this.state[`position${obj.key}`];
        orderedPrax[`employer${obj.key}`] = this.state[`employer${obj.key}`];
        orderedPrax[`tasks${obj.key}`] = this.state[`tasks${obj.key}`];
        orderedPrax[`jobFrom${obj.key}`] = this.state[`jobFrom${obj.key}`];
        orderedPrax[`jobTo${obj.key}`] = this.state[`jobTo${obj.key}`];
      })
      this.setState({
        edList: {...this.state.edList, ...orderedSchool},
        praxList: {...this.state.praxList, ...orderedPrax},
      })
    } else if (e.target.innerHTML === 'Edit CV') {
      e.target.innerHTML = 'Preview CV';
      // unhide
      general.style.display = 'block';
      for (let i=0; i<edForms.length; i++){
        edForms[i].style.display = 'block';
      }
      for (let i=0; i<praxForms.length; i++){
        praxForms[i].style.display = 'block';
      }
      for (let i=0; i<add.length; i++){
        add[i].style.display = 'block';
      }
      // hide
      generalCV.style.display = 'none';
      for (let i=0; i<edCV.length; i++){
        edCV[i].style.display = 'none';
      }
      for (let i=0; i<praxCV.length; i++){
        praxCV[i].style.display = 'none';
      }
    }
  }

  const addForm = (e) => {
    if(e.target.innerHTML === "add education") {
      this.setState({
        edCount: this.state.edCount + 1,
        setEd: this.state.setEd.concat(
          <EdForm 
            edCount={this.state.edCount + 1} 
            key={this.state.edCount + 1}
            handleChangeInput={this.handleChangeInput}
            deleteForm={this.deleteForm} />
        )
      });
    } else {
      this.setState({
        praxCount: this.state.praxCount + 1,
        setPrax: this.state.setPrax.concat(
          <PraxForm 
            praxCount={this.state.praxCount + 1} 
            key={this.state.praxCount + 1}
            handleChangeInput={this.handleChangeInput}
            deleteForm={this.deleteForm} />
        )
      });
    }
  }

  const deleteForm = (e) => {
    e.preventDefault();
    if(e.target.innerHTML === "remove education"){
      this.setState({
        setEd: this.state.setEd.filter(form => e.target.dataset.btn !== form.key),
      });
    } else {
      this.setState({
        setPrax: this.state.setPrax.filter(form => e.target.dataset.btn !== form.key),
      });
    }
  }

  return (
    <div className="main">
      <CVPreview 
        onSubmitPreviewCV={onSubmitPreviewCV}
      />

      <h2>General Information</h2>

      {<GeneralInfo
        handleChangeInput={handleChangeInput} />} 
      {<GeneralCV 
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        phone={this.state.phone}
        />}

      <h2>Educational Experience</h2>

      {<EducationalExp 
        handleChangeInput={handleChangeInput}
        setEd={this.state.setEd}
        addForm={addForm}
        deleteForm={deleteForm} /> }
      {<EducationCV 
        setEd={this.state.setEd}
        edList={this.state.edList}
        />}
      

      <h2>Practical Experience</h2>
      {<PracticalExp 
        handleChangeInput={handleChangeInput}
        setPrax={this.state.setPrax}
        addForm={addForm}
        deleteForm={deleteForm} /> }
      {<PracticalCV 
        setPrax={this.state.setPrax}
        praxList={this.state.praxList}
        />}

    </div>
  );
};

// class Main extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       edCount: 1,
//       praxCount: 1,
//       edList: {},
//       praxList: [],
//       setEd: [
//         <EdForm
//           key={1}
//           edCount={1}
//           handleChangeInput={this.handleChangeInput}
//           deleteForm={this.deleteForm} 
//         />
//       ],
//       setPrax: [
//         <PraxForm 
//           key={1}
//           praxCount={1}
//           handleChangeInput={this.handleChangeInput}
//           deleteForm={this.deleteForm}
//         />
//       ]
//     };
//   }

//   onSubmitPreviewCV = (e) => { 
//     const general = document.getElementById('general');
//     const edForms = document.getElementsByClassName('edForms');
//     const praxForms = document.getElementsByClassName('praxForms');
//     const add = document.getElementsByClassName('add');
//     const generalCV = document.getElementById('generalCV');
//     const edCV = document.getElementsByClassName('edCV');
//     const praxCV = document.getElementsByClassName('praxCV');
//     if (e.target.innerHTML === 'Preview CV') {
//       e.target.innerHTML = 'Edit CV'
//       // hide
//       general.style.display = 'none';
//       for (let i=0; i<edForms.length; i++){
//         edForms[i].style.display = 'none';
//       }
//       for (let i=0; i<praxForms.length; i++){
//         praxForms[i].style.display = 'none';
//       }
//       for (let i=0; i<add.length; i++){
//         add[i].style.display = 'none';
//       }
//       // unhide
//       generalCV.style.display = 'flex';
//       for (let i=0; i<edCV.length; i++){
//         edCV[i].style.display = 'flex';
//       }
//       for (let i=0; i<praxCV.length; i++){
//         praxCV[i].style.display = 'flex';
//       }

//       const orderedSchool = {};
//       this.state.setEd.map(obj => {
//         orderedSchool[`school${obj.key}`] = this.state[`school${obj.key}`];
//         orderedSchool[`degree${obj.key}`] = this.state[`degree${obj.key}`];
//         orderedSchool[`degreeFrom${obj.key}`] = this.state[`degreeFrom${obj.key}`];
//         orderedSchool[`degreeTo${obj.key}`] = this.state[`degreeTo${obj.key}`];
//       })
//       const orderedPrax = {};
//       this.state.setPrax.map(obj => {
//         orderedPrax[`position${obj.key}`] = this.state[`position${obj.key}`];
//         orderedPrax[`employer${obj.key}`] = this.state[`employer${obj.key}`];
//         orderedPrax[`tasks${obj.key}`] = this.state[`tasks${obj.key}`];
//         orderedPrax[`jobFrom${obj.key}`] = this.state[`jobFrom${obj.key}`];
//         orderedPrax[`jobTo${obj.key}`] = this.state[`jobTo${obj.key}`];
//       })
//       this.setState({
//         edList: {...this.state.edList, ...orderedSchool},
//         praxList: {...this.state.praxList, ...orderedPrax},
//       })
//     } else if (e.target.innerHTML === 'Edit CV') {
//       e.target.innerHTML = 'Preview CV';
//       // unhide
//       general.style.display = 'block';
//       for (let i=0; i<edForms.length; i++){
//         edForms[i].style.display = 'block';
//       }
//       for (let i=0; i<praxForms.length; i++){
//         praxForms[i].style.display = 'block';
//       }
//       for (let i=0; i<add.length; i++){
//         add[i].style.display = 'block';
//       }
//       // hide
//       generalCV.style.display = 'none';
//       for (let i=0; i<edCV.length; i++){
//         edCV[i].style.display = 'none';
//       }
//       for (let i=0; i<praxCV.length; i++){
//         praxCV[i].style.display = 'none';
//       }
//     }
//   }

//   handleChangeInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   addForm = (e) => {
//     if(e.target.innerHTML === "add education") {
//       this.setState({
//         edCount: this.state.edCount + 1,
//         setEd: this.state.setEd.concat(
//           <EdForm 
//             edCount={this.state.edCount + 1} 
//             key={this.state.edCount + 1}
//             handleChangeInput={this.handleChangeInput}
//             deleteForm={this.deleteForm} />
//         )
//       });
//     } else {
//       this.setState({
//         praxCount: this.state.praxCount + 1,
//         setPrax: this.state.setPrax.concat(
//           <PraxForm 
//             praxCount={this.state.praxCount + 1} 
//             key={this.state.praxCount + 1}
//             handleChangeInput={this.handleChangeInput}
//             deleteForm={this.deleteForm} />
//         )
//       });
//     }
//   }

//   deleteForm = (e) => {
//     e.preventDefault();
//     if(e.target.innerHTML === "remove education"){
//       this.setState({
//         setEd: this.state.setEd.filter(form => e.target.dataset.btn !== form.key),
//       });
//     } else {
//       this.setState({
//         setPrax: this.state.setPrax.filter(form => e.target.dataset.btn !== form.key),
//       });
//     }
//   }

//   render() {

//     return (
//       <div className="main">
//         <CVPreview 
//           onSubmitPreviewCV={this.onSubmitPreviewCV}
//         />

//         <h2>General Information</h2>

//         {<GeneralInfo
//           handleChangeInput={this.handleChangeInput} />} 
//         {<GeneralCV 
//           firstName={this.state.firstName}
//           lastName={this.state.lastName}
//           email={this.state.email}
//           phone={this.state.phone}
//           />}

//         <h2>Educational Experience</h2>

//         {<EducationalExp 
//           handleChangeInput={this.handleChangeInput}
//           setEd={this.state.setEd}
//           addForm={this.addForm}
//           deleteForm={this.deleteForm} /> }
//         {<EducationCV 
//           setEd={this.state.setEd}
//           edList={this.state.edList}
//           />}
        

//         <h2>Practical Experience</h2>
//         {<PracticalExp 
//           handleChangeInput={this.handleChangeInput}
//           setPrax={this.state.setPrax}
//           addForm={this.addForm}
//           deleteForm={this.deleteForm} /> }
//         {<PracticalCV 
//           setPrax={this.state.setPrax}
//           praxList={this.state.praxList}
//           />}

//       </div>
//     );
//   }
// }

export default Main;