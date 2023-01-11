// GeneralInfo.js
 
import React, { Component } from 'react';
 
class GeneralInfo extends Component {

  render() {
    const { firstName, lastName, email, phone, onSubmitGeneralInfo, handleChangeGeneralInfo} = this.props; // this.props.firstName

    return (
      <div className="forms">
        <h2>General Information</h2>
        <form onSubmit={onSubmitGeneralInfo}>
          <div>
            <label htmlFor="firstName">first name</label>
            <input
              onChange={handleChangeGeneralInfo}
              value={firstName}
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="first name" 
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">last name</label>
            <input
              onChange={handleChangeGeneralInfo}
              value={lastName} 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="last name" 
              required
            />
          </div>

          <div>
            <label htmlFor="user_email">email</label>
            <input 
              onChange={handleChangeGeneralInfo}
              value={email} 
              type="email" 
              id="user_email" 
              name="email" 
              placeholder="you@example.com" 
              autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="phone_number">phone number</label>
            <input 
              onChange={handleChangeGeneralInfo}
              value={phone} 
              type="tel" 
              id="phone_number" 
              name="phone" 
              placeholder="123-456-7891" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              autoComplete="off" />
          </div>
          <button type="submit">submit</button>
        </form>
    
      </div>
    );
  }
}

 
export default GeneralInfo;