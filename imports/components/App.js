import React, {Component} from 'react';
import Radium from 'radium';
import FilePicker from 'filepicker-js';
import Workspace from './Workspace/Workspace';
import Style from './_App.js';

class App extends Component {
  constructor() {
    super();
    FilePicker.setKey('AArqM6AQzTpaHMXtcGK8dz');
  }

  render() {
    return (
      <Workspace text={this.props.text} />
    );
  }
}

export default Radium(App);
