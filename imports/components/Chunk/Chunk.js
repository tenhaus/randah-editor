import React from 'react';
import Radium from 'radium';

import Style from './_Chunk';

class Chunk extends React.Component {

  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      over: false
    };
  }

  onMouseOver() {
    this.setState({over: true});
  }

  onMouseOut() {
    // this.setState({over: false});
  }

  render() {
    let containerStyle = Style.main;
    if(this.state.over) containerStyle = [Style.main, Style.mouseOver];

    return (
      <div style={containerStyle}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>

        {this.props.chunk.currentChunk}
      </div>
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

export default Radium(Chunk);
