// CVPreview.js

import React, { Component } from 'react';

class CVPreview extends Component {

  render() {

    return (
      <div className="cv_preview">
        <h3>CV Preview</h3>
        <p>Name: {this.props.fullName}</p> {/*working*/}
        <p>Submitted: {this.props.submitFullName}</p> {/*not working*/}
      </div>
    );
  }
}

export default CVPreview;

