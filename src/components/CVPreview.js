// CVPreview.js

import React, { Component } from 'react';

class CVPreview extends Component {

  render() {

    return (
      <div className="cv_preview">
        <h3>CV Preview</h3>
        <p>Prop Name: {this.props.fullName}</p> {/*working*/}
      </div>
    );
  }
}

export default CVPreview;

