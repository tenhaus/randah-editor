import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Chunks} from '../../api/chunks';
import Processing from '../../lib/processing';
import Chunk from '../Chunk/Chunk';
import Cursor from '../Cursor/Cursor';
import Story from '../../domain/Story';
import Style from './_Editor';

class Editor extends React.Component {

  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.renderChunks = this.renderChunks.bind(this);
    this.story = new Story({storyId: 1});

    this.state = {
      currentChunk: null
    };
  }

  onKeyDown(e) {
    e.preventDefault();

    var chunk = Processing.add(e.key);
    this.story.process(chunk);

    this.setState({
      chunks: this.story.chunks,
      currentChunk: this.story.currentChunk
    });
  }

  onKeyUp(e) {
    e.preventDefault();
  }

  onChunkSelected(chunk) {
    console.log(chunk);
  }

  renderChunks() {
    let self = this;

    // Render our saved chunks
    let renderedChunks = _.map(this.props.story.chunks, function(chunk) {
      return (
        <Chunk chunk={chunk} key={chunk._id}
          onSelected={self.onChunkSelected} />
      );
    });

    // Render our current / temp chunk
    if(this.state.currentChunk) {
      renderedChunks.push(
        <Chunk key='currentChunk' chunk={this.state.currentChunk}
          onSelected={self.onChunkSelected} />
      );
    }

    return renderedChunks;
  }

  render() {
    let renderedChunks = this.renderChunks();

    return (
      <div style={Style.editorContainer}
        onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} tabIndex="1">

        <div style={Style.content}>
          {renderedChunks}
          <Cursor />
        </div>

      </div>
    );
  }
}

export default createContainer(() => {
  return {
    story: new Story({storyId: 1})
  };
}, Editor);
