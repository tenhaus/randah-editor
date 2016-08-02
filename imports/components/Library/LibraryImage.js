import React from 'react';
import Style from './_Library';

class LibraryImage extends React.Component {

  constructor() {
    super();
    this.onSelectFile = this.onSelectFile.bind(this);
  }

  onSelectFile() {
    this.props.onSelectFile(this.props.image);
  }

  render() {
    return (
      <img style={Style.thumb} src={this.props.image.url}
        onClick={this.onSelectFile} />
    );
  }

}

export default LibraryImage;
