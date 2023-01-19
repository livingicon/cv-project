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
      isHidden: true,
      edCount: 1,
      praxCount: 1,
      edList: [],
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
    e.preventDefault();
    if (this.state.firstName && this.state.isHidden) {
      e.target.innerHTML = 'Edit CV'
      this.setState({
        isHidden: !this.state.isHidden,
        edList: this.state.setEd.map(obj => this.state.edList.concat(Object.entries(this.state)
          .filter(entry => entry[0] === `school${obj.key}`))),
        praxList: this.state.setPrax.map(obj => this.state.praxList.concat(Object.entries(this.state)
        .filter(entry => entry[0] === `position${obj.key}`)))
      })
    } else if (!this.state.isHidden) {
      e.target.innerHTML = 'Preview CV';
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
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

  match = (info) => {
    for(let i = 0 ; i < this.state.previewState.length; i++) {
      this.state.previewState[i][0] === `${info}` && console.log(this.state.previewState.indexOf(this.state.previewState[i]));
    }
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
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          />}

        <h2>Educational Experience</h2>

        {this.state.isHidden && <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          setEd={this.state.setEd}
          addForm={this.addForm}
          deleteForm={this.deleteForm} /> }
        {!this.state.isHidden && <EducationCV 
          edList={this.edList}
          />}
        

        <h2>Practical Experience</h2>
        {this.state.isHidden &&<PracticalExp 
          handleChangeInput={this.handleChangeInput}
          setPrax={this.state.setPrax}
          addForm={this.addForm}
          deleteForm={this.deleteForm} /> }
        {!this.state.isHidden && <PracticalCV 
          previewState={this.state.previewState} />}

      </div>
    );
  }
}

export default Main;