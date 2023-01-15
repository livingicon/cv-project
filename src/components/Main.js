// Main.js
 
import React, { Component } from 'react';
import GeneralInfo from "./Main/GeneralInfo";
import EducationalExp from "./Main/EducationalExp";
import PracticalExp from "./Main/PracticalExp";
import CVPreview from "./Main/CVPreview";
import EdForm from "./Main/EdForm";
import PraxForm from "./Main/PraxForm";

 
class Main extends Component {
  constructor() {
    super();

    this.state = { // do I need this?
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school1: "",
      degree1: "",
      degreeFrom1: "",
      degreeTo1: "",
      position: "",
      employer: "",
      jobFrom: "",
      jobTo: "",
      tasks: "",
      edCount: 1, // need both
      praxCount: 1, 
      count: "",
      set: "",
      setEd: [
        <EdForm
          key={1}
          edCount={1} // need both
          handleChangeInput={this.handleChangeInput}
          deleteEd={this.deleteEd} 
        />
      ],
      setPrax: [
        <PraxForm 
          key={1}
          praxCount={1} // need both
          handleChangeInput={this.handleChangeInput}
          deletePrax={this.deletePrax}
        />
      ]
    };
  }

  // let fleet;
  // side === 0 ? fleet = playerFleet : fleet = enemyFleet;
  // let id;
  // grid === GameLoop.computerGrid ? id = "comp" : id = "play";

  addForm = (e) => { // make dynamic for addPrax too (write first then maybe?)
    e.preventDefault();
    if(e.target.innerHTML === "add education") {
      this.setState({
        edCount: this.state.edCount + 1,
        setEd: this.state.setEd.concat(
          <EdForm 
            edCount={this.state.edCount + 1} 
            key={this.state.edCount + 1}
            handleChangeInput={this.handleChangeInput}
            deleteEd={this.deleteEd} />
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
            deletePrax={this.deletePrax} />
        )
      });
    }
  }

  // addPrax = (e) => { // make dynamic for addPraxEx too (write first then maybe?)
  //   e.preventDefault();
  //   this.setState({
  //     praxCount: this.state.praxCount + 1,
  //     setPrax: this.state.setPrax.concat(
  //       <PraxForm 
  //         praxCount={this.state.praxCount + 1} 
  //         key={this.state.praxCount + 1}
  //         handleChangeInput={this.handleChangeInput}
  //         deletePrax={this.deletePrax} />
  //     )
  //   });
  // }

  deleteEd = (e) => {
    e.preventDefault();
    this.setState({
      setEd: this.state.setEd.filter(form => e.target.dataset.btn !== form.key)
    });
  }


  deletePrax = (e) => {
    e.preventDefault();
    this.setState({
      setPrax: this.state.setPrax.filter(form => e.target.dataset.btn !== form.key)
    });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitPreviewCV = (e) => { // must setState (to remove deleted elements)
    e.preventDefault(); // needs to not clear form
    console.log(this.state);
    // this.setState({

    // });
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
          deleteEd={this.deleteEd}
        />

        <PracticalExp 
          handleChangeInput={this.handleChangeInput}
          setPrax={this.state.setPrax}
          addForm={this.addForm}
          deletePrax={this.deletePrax}
        />

        <CVPreview 
          onSubmitPreviewCV={this.onSubmitPreviewCV}
        />
      </div>
    );
  }
}
 
export default Main;