// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import GeneralCV from "./Main/GeneralCV";
import EducationalExp from "./Main/EducationalExp";
import EducationCV from "./Main/EducationCV";
import PracticalExp from "./Main/PracticalExp";
import PracticalCV from "./Main/PracticalCV";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
import PraxForm from "./Main/PraxForm";

 
class Main extends Component {
  constructor() { // does it need (props) here?
    super();

    this.state = {
      // isHidden: true,
      edCount: 1,
      praxCount: 1,
      edList: {},
      praxList: [],
      setEd: [
        <EdForm
          key={1}
          edCount={1}
          handleChangeInput={this.handleChangeInput}
          deleteForm={this.deleteForm} 
        />
      ],
      setPrax: [
        <PraxForm 
          key={1}
          praxCount={1}
          handleChangeInput={this.handleChangeInput}
          deleteForm={this.deleteForm}
        />
      ]
    };
  }

  onSubmitPreviewCV = (e) => { 
    // e.preventDefault();
    if (e.target.innerHTML === 'Preview CV') {
      e.target.innerHTML = 'Edit CV'
      document.getElementById('general').style.display = 'none';
      const edForms = document.getElementsByClassName('edForms');
      const praxForms = document.getElementsByClassName('praxForms');
      const addEducation = document.getElementsByClassName('addEducation');
      const addPrax = document.getElementsByClassName('addPrax');
      for (let i=0; i<edForms.length; i++){
        edForms[i].style.display = 'none';
      }
      for (let i=0; i<praxForms.length; i++){
        praxForms[i].style.display = 'none';
      }
      for (let i=0; i<addEducation.length; i++){
        addEducation[i].style.display = 'none';
      }
      for (let i=0; i<addPrax.length; i++){
        addPrax[i].style.display = 'none';
      }
      // document.getElementById('prax').style.display = 'none';
      // document.getElementById('generalCV').style.display = 'block';
      // document.getElementById('edCV').style.display = 'block';
      // document.getElementById('praxCV').style.display = 'block';
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
        // isHidden: !this.state.isHidden,
        edList: {...this.state.edList, ...orderedSchool},
        praxList: {...this.state.praxList, ...orderedPrax},
      })
    } else if (e.target.innerHTML === 'Edit CV') {
      e.target.innerHTML = 'Preview CV';
      document.getElementById('general').style.display = 'block';
      document.getElementById('ed').style.display = 'block';
      document.getElementById('prax').style.display = 'block';
      document.getElementById('generalCV').style.display = 'none';
      document.getElementById('edCV').style.display = 'none';
      document.getElementById('praxCV').style.display = 'none';
      // this.setState({
      //   // isHidden: !this.state.isHidden,
      // })
    }
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addForm = (e) => { // still could be dry-er maybe? 
    // e.preventDefault();
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

  deleteForm = (e) => {
    // e.preventDefault();
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

  render() {

    return (
      <div className="main">
        <CVPreview 
          onSubmitPreviewCV={this.onSubmitPreviewCV}
        />

        <h2>General Information</h2>

        {<GeneralInfo
          handleChangeInput={this.handleChangeInput} />} 
        {<GeneralCV 
          checkState={this.checkState}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          />}

        <h2>Educational Experience</h2>

        {<EducationalExp 
          handleChangeInput={this.handleChangeInput}
          setEd={this.state.setEd}
          addForm={this.addForm}
          deleteForm={this.deleteForm} /> }
        {<EducationCV 
          setEd={this.state.setEd}
          edList={this.state.edList}
          />}
        

        <h2>Practical Experience</h2>
        {<PracticalExp 
          handleChangeInput={this.handleChangeInput}
          setPrax={this.state.setPrax}
          addForm={this.addForm}
          deleteForm={this.deleteForm} /> }
        {<PracticalCV 
          setPrax={this.state.setPrax}
          praxList={this.state.praxList}
          />}

      </div>
    );
  }
}

export default Main;