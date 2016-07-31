import React, {Component} from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Workspace from './Workspace/Workspace';
import Style from './_App.js';

class App extends Component {
  render() {
    return <Workspace />;
  }
}

export default createContainer(() => {
  return {};
}, Radium(App));
