import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
  render() {
    return <div>Heeeey</div>;
  }
}

export default createContainer(() => {
  return {};
}, App);
