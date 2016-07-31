import React, {Component} from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Style from './_App.js';

class App extends Component {
  render() {
    return (
      <div style={Style.main}>
        {this.props.test}
        </div>
      );
  }
}

export default createContainer(() => {
  return {
    test: 'hey hey'
  };
}, Radium(App));
