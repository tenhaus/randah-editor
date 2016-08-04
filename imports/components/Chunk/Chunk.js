import React from 'react';
import Style from './_Chunk';

class Chunk extends React.Component {

  render() {
    return (
      <span style={Style.main}>{this.props.chunk.currentChunk}</span>
    );
  }

}

Chunk.defaultProps = {
  chunk: {
    character: '',
    isWord: false,
    currentChunk: ''
  }
};

export default Chunk;
