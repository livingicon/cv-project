// CVPreview.js

import React, { Component } from 'react';

class CVPreview extends Component {

  render() {
    const { onSubmitPreviewCV } = this.props;
    
    return (
      <div className="cv_preview">
        <h3>Generate CV</h3>
        <button onClick={onSubmitPreviewCV}>Preview Your Compiled CV</button>
      </div>
    );
  }
}

export default CVPreview;

