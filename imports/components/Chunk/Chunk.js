import React from 'react';
import Radium from 'radium';

import Style from './_Chunk';

class Chunk extends React.Component {

  constructor() {
    super();
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      over: false,
      selected: false
    };
  }

  onMouseOver() {
    this.setState({over: true});
  }

  onMouseOut() {
    // this.setState({over: false});
  }

  onClick() {
    let selected = !this.state.selected;
    if(selected) this.props.onSelected(this.props.chunk);
    
    this.setState({
      selected: selected
    });
  }

  render() {
    let containerStyle = [Style.main];
    if(this.state.over) containerStyle.push(Style.mouseOver);
    if(this.state.selected) containerStyle.push(Style.selected);

    return (
      <div style={containerStyle}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.onClick}>

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
  },

  onSelected: function(chunk) {}
};

export default Radium(Chunk);
