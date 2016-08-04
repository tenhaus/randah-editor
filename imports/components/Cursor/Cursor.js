import React from 'react';
import Radium from 'radium';
import Style from './_Cursor';

class Cursor extends React.Component {

  constructor() {
    super();
    this.toggleBlink = this.toggleBlink.bind(this);

    this.state = {
      blink: true
    };
  }

  componentDidMount() {
    this.toggleBlink();
  }

  toggleBlink() {
    this.setState({
      blink: !this.state.blink
    });

    setTimeout(this.toggleBlink, this.props.blinkInterval);
  }

  render() {
    let cursorStyle = Style.main;
    if(this.state.blink) cursorStyle = [Style.main, Style.blink];
    return (
      <div style={cursorStyle}>
        {this.props.cursorCharacter}
      </div>
    );
  }

}

Cursor.defaultProps = {
  blinkInterval: 500,
  cursorCharacter: '∆'
};

export default Radium(Cursor);
