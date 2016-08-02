import React from 'react';
import LibaryImage from './LibraryImage';

import Style from './_Library';

class Library extends React.Component {
  constructor() {
    super()
    this.renderFiles = this.renderFiles.bind(this);
  }

  renderFiles() {
    let self = this;
    let thumbs = _.map(this.props.files, function(file) {
      return (
        <div style={Style.thumbWrapper}>
          <LibaryImage image={file}
            onSelectFile={self.props.onSelectFile} />
        </div>
      );
      console.log(file);
    });

    return (
      <div style={Style.thumbContainer}>
        {thumbs}
      </div>
    );
  }

  render() {
    let files = this.renderFiles();

    return (
      <div style={Style.main}>
        Library
        {files}
      </div>
    );
  }

}

export default Library;
