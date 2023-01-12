// GeneralInfo.js
 
import React, { Component } from 'react';
 
class GeneralInfo extends Component {

  render() {
    const { firstName, lastName, email, phone, handleChangeInput} = this.props; // this.props.firstName

    return (
      <div className="forms">
        <h2>General Information</h2>
        <form>
          <div>
            <label htmlFor="firstName">first name</label>
            <input
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
              value={phone} 
              type="tel" 
              id="phone_number" 
              name="phone" 
              placeholder="123-456-7891" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              autoComplete="off" />
          </div>
        </form>
    
      </div>
    );
  }
}

 
export default GeneralInfo;