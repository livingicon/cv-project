// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import GeneralCV from "./Main/GeneralCV";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
import PraxForm from "./Main/PraxForm";

 
class Main extends Component {
  constructor() { // does it need (props) here?
    super();

    this.state = {
      isHidden: true,
      edCount: 1,
      praxCount: 1,
      previewState: [],
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
    e.preventDefault();
    e.target.innerHTML === 'Preview CV' ? e.target.innerHTML = 'Edit CV' : 
      e.target.innerHTML = 'Preview CV';
    this.setState({
      isHidden: !this.state.isHidden,
      previewState: this.state.previewState.concat // how to not double on every click?
        (Object.entries(this.state).filter(obj => obj[1] !== '' && obj[0] !== 'isHidden' 
          && obj[0] !== 'edCount' && obj[0] !== 'praxCount' && obj[0] !== 'previewState'
          && obj[0] !== 'setEd' && obj[0] !== 'setPrax'))
    })
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    });
  };

  addForm = (e) => { // still could be dry-er maybe? 
    e.preventDefault();
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
    e.preventDefault();
    if(e.target.innerHTML === "remove education"){
      this.setState({
        setEd: this.state.setEd.filter(form => e.target.dataset.btn !== form.key),
        [`school${e.target.dataset.btn}`]: "",
        [`degree${e.target.dataset.btn}`]: "",
        [`degreeFrom${e.target.dataset.btn}`]: "",
        [`degreeTo${e.target.dataset.btn}`]: ""
      });
    } else {
      this.setState({
        setPrax: this.state.setPrax.filter(form => e.target.dataset.btn !== form.key),
        [`position${e.target.dataset.btn}`]: "",
        [`employer${e.target.dataset.btn}`]: "",
        [`jobFrom${e.target.dataset.btn}`]: "",
        [`jobTo${e.target.dataset.btn}`]: "",
        [`tasks${e.target.dataset.btn}`]: ""
      });
    }
  }

  checkState = (e) => { // for testing...delete later
    console.log(this.state);
  }

  render() {

    return (
      <div className="main">
        <CVPreview 
          onSubmitPreviewCV={this.onSubmitPreviewCV}
        />

        <h2>General Information</h2>

        {this.state.isHidden && <GeneralInfo
          handleChangeInput={this.handleChangeInput} />} 

        {!this.state.isHidden && <GeneralCV 
          checkState={this.checkState}
          previewState={this.state.previewState}
          />}

        <h2>Educational Experience</h2>

        {this.state.isHidden && <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          setEd={this.state.setEd}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
        /> }

        <h2>Practical Experience</h2>
        {this.state.isHidden &&<PracticalExp 
          handleChangeInput={this.handleChangeInput}
          setPrax={this.state.setPrax}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
        /> }

      </div>
    );
  }
}

export default Main;