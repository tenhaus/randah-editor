// Manages a story
import {Chunks} from '../api/chunks';

class Story {

  constructor(properties) {
    if(!properties || !properties.storyId) throw new Error("Story id is required");
    this.properties = properties;

    this.currentChunk = null;
    this.chunks = Chunks.find({story: properties.storyId}).fetch();
  }

  process(chunk) {
    if(!chunk) return;

    if(chunk.isBackspace) {
      console.log('found backspace');
      return;
    }

    // Story current chunk
    if(!chunk.isWord) {
      this.currentChunk = chunk;
      this.currentChunk.story = this.properties.storyId;
      return;
    }

    // If it's a word we save it and clear
    Chunks.insert(this.currentChunk);
    this.currentChunk = null;
  }

}

export default Story;
