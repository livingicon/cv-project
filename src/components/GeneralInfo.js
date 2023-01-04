// GeneralInfo.js
 
import React, { Component } from 'react';
import CVPreview from "./CVPreview";
 
class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
    }
  };

  handleChange = (e) => {
    this.setState({
      fullName : e.target.value,
    });
  };

  onSubmitName = (e) => {
    e.preventDefault();
  }

  render() {
    const { fullName } = this.state;

    return (
      <div className="forms">
        <h2>General Information</h2>
        <form onSubmit={this.onSubmitName}>
          <div>
            <label htmlFor="userName">name</label>
            <input
              onChange={this.handleChange}
              value={fullName}
              type="text" 
              id="userName" 
              name="user_name" 
              placeholder="full name" 
              required
            />
            <button type="submit">Submit Name</button>
          </div>
          {/* <div>
            <label htmlFor="user_email">email</label>
            <input type="email" id="user_email" name="email" placeholder="you@example.com" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="phone_number">phone number</label>
            <input type="tel" id="phone_number" name="phone" placeholder="123-456-7891" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="off" />
          </div> */}
        </form>

        <div className="cv_preview">
          <h3>Typed Name: {fullName}</h3>
          <h3>Submitted Name: {fullName}</h3>
          <CVPreview fullName={fullName} />
        </div>
    

      </div>
    );
  }
}

 
export default GeneralInfo;