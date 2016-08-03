import React from 'react';
import Style from './_Editor';
import { createContainer } from 'meteor/react-meteor-data';
import {Text} from '../../api/text.js';

class Editor extends React.Component {

  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);

    // this.state = {
    //   content: ''
    // };
  }

  onKeyDown(e) {
    let story = Text.findOne({story: 1});
    if(story) {
      Text.update(
        {_id: story._id}, {story: 1, copy: story.copy + e.key}
      );
    }
    else {
      console.log('insert');
      Text.insert({
        story: 1,
        copy: e.key
      });
    }

    e.preventDefault();
  }

  onKeyUp(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props);

    return (
      <div style={Style.editorContainer}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        tabIndex="1">
        <div style={Style.content}>
          {this.props.text.copy}
        </div>
      </div>
    );
  }
}

Editor.defaultProps = {
  text: {
    copy: ''
  }
}

export default createContainer(() => {
  return {
    text: Text.findOne({story: 1})
  };
}, Editor);
