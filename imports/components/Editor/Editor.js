import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Chunks} from '../../api/chunks';
import Processing from '../../lib/processing';
import Chunk from '../Chunk/Chunk';
import Cursor from '../Cursor/Cursor';

import Style from './_Editor';

class Editor extends React.Component {

  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.renderChunks = this.renderChunks.bind(this);

    this.state = {
      currentChunk: null
    };
  }

  onKeyDown(e) {
    e.preventDefault();

    var chunk = Processing.add(e.key);
    if(!chunk) return;

    // Save current chunk in this state.currentChunk
    if(!chunk.isWord) {
      this.setState({
        currentChunk: chunk
      });

      return;
    }

    this.state.currentChunk.story = 1;
    // If it's a word we save it and clear
    Chunks.insert(this.state.currentChunk);
    this.setState({
      currentChunk: null
    });
  }

  onKeyUp(e) {
    e.preventDefault();
  }

  renderChunks() {

    // Render our saved chunks
    let renderedChunks = _.map(this.props.chunks, function(chunk) {
      return <Chunk chunk={chunk} key={chunk._id} />;
    });

    // Render our current / temp chunk
    if(this.state.currentChunk) {
      renderedChunks.push(
        <Chunk key='currentChunk' chunk={this.state.currentChunk} />
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
    chunks: Chunks.find({story: 1}).fetch()
  };
}, Editor);
