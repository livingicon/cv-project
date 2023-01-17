// CVPreview.js

import React, { Component } from 'react';

class CVPreview extends Component {

  render() {
    const { onSubmitPreviewCV, toggleHidden } = this.props;
    
    return (
      <div className="cv_preview">
        <h3>Generate CV</h3>
        <button onClick={onSubmitPreviewCV}>Preview CV</button>
        <button onClick={toggleHidden}>Edit CV</button>
      </div>
    );
  }
}

export default CVPreview;

