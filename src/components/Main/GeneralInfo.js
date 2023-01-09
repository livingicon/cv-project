// GeneralInfo.js
 
import React, { Component } from 'react';
 
class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      submitFullName: '',
    }
  };

  handleChange = (e) => {
    this.setState({ // state always re-renders application
      fullName: e.target.value,
    });
  };

  onSubmitName = (e) => { // not being used right now
    e.preventDefault();

    this.setState({
      submitFullName: this.state.submitFullName.concat(this.state.fullName),
    });
  }

  render() {
    const { fullName, submitFullName } = this.state;

    return (
      <div className="forms">
        <h2>General Information</h2>
        <form onSubmit={this.onSubmitName}> {/* not being used right now */}
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
          <div>
            <label htmlFor="user_email">email</label>
            <input type="email" id="user_email" name="email" placeholder="you@example.com" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="phone_number">phone number</label>
            <input type="tel" id="phone_number" name="phone" placeholder="123-456-7891" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="off" />
          </div>
        </form>
    
      </div>
    );
  }
}

 
export default GeneralInfo;