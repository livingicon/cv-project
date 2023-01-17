// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
import PraxForm from "./Main/PraxForm";

 
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      ],
      // setGeneralInfo: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: ""
      // },
      // setPraxExp: {
      //   position: "",
      //   employer: "",
      //   jobFrom: "",
      //   jobTo: "",
      //   tasks: ""
      // },
      edCount: 1,
      praxCount: 1,
      previewState: []
    };
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    });
  };

  addForm = (e) => { // still could be dry-er
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


  checkState = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  onSubmitPreviewCV = (e) => { 
    e.preventDefault();
    this.setState({
      previewState: this.state.previewState.concat(Object.entries(this.state).filter(object => object[1] !== ""))
    })
  }

  render() {

    return (
      <div className="main">
        <GeneralInfo 
          handleChangeInput={this.handleChangeInput}
        />

        <EducationalExp 
          handleChangeInput={this.handleChangeInput}
          setEd={this.state.setEd}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
        />

        <PracticalExp 
          handleChangeInput={this.handleChangeInput}
          setPrax={this.state.setPrax}
          addForm={this.addForm}
          deleteForm={this.deleteForm}
        />

        <CVPreview 
          onSubmitPreviewCV={this.onSubmitPreviewCV}
        />
        <button onClick={this.checkState}>test state</button>
      </div>
    );
  }
}

export default Main;