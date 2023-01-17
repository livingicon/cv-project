// CVPreview.js

import React, { Component } from 'react';

class CVPreview extends Component {

  render() {
    const { onSubmitPreviewCV } = this.props;
    
    return (
      <div className="cv_preview">
        <button onClick={onSubmitPreviewCV}>Preview CV</button>
        {/* <button onClick={toggleHidden}>Edit CV</button> */}
      </div>
    );
  }
}

export default CVPreview;

