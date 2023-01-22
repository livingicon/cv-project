// GeneralInfo.js
 
import React, { Component } from 'react';
 
class GeneralInfo extends Component {

  render() {
    const { handleChangeInput, firstName, lastName, email, phone } = this.props; // this.props.firstName

    return (
      <div className="forms" id="general">
        <form>
          <div>
            <label htmlFor="firstName">first name</label>
            <input
              onChange={handleChangeInput}
              value={firstName}
              type="text" 
              id="firstName" 
              name="firstName" 
            />
          </div>

          <div>
            <label htmlFor="lastName">last name</label>
            <input
              onChange={handleChangeInput}
              value={lastName} 
              type="text" 
              id="lastName" 
              name="lastName" 
              required
            />
          </div>

          <div>
            <label htmlFor="user_email">email</label>
            <input 
              onChange={handleChangeInput}
              value={email} 
              type="email" 
              id="user_email" 
              name="email" 
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="phone_number">phone number</label>
            <input 
              onChange={handleChangeInput}
              value={phone} 
              type="tel" 
              id="phone_number" 
              name="phone" 
              autoComplete="off"
            />
          </div>
        </form>
    
      </div>
    );
  }
}

 
export default GeneralInfo;