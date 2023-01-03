// EducationalInfo.js
 
import React, { Component } from 'react';
 
class EducationalExp extends Component {
  render() {
    return (
      <div className="forms">
        <h2>Educational Experience</h2>
        <form>
          <div>
            <label htmlFor="userName">name</label>
            <input type="text" id="userName" name="user_name" placeholder="full name" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="user_email">email</label>
            <input type="email" id="user_email" name="email" placeholder="you@example.com" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="phone_number">phone number</label>
            <input type="tel" id="phone_number" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" autoComplete="off" />
          </div>
          <button type="submit">Submit Info</button>
        </form>
      </div>
    );
  }
}
 
export default EducationalExp;