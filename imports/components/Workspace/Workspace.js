import React from 'react';
import Radium from 'radium';
import FilePicker from 'filepicker-js';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelButton from '../PanelButton/PanelButton';
import WorkImage from '../WorkImage/WorkImage';
import Library from '../Library/Library';
import Editor from '../Editor/Editor';
import { ImageLibrary } from '../../api/library.js';

import Style from './_Workspace';

class Workspace extends React.Component {

  constructor() {
    super();
    this.onAddClick = this.onAddClick.bind(this);
    this.onAddSuccess = this.onAddSuccess.bind(this);
    this.toggleLibrary = this.toggleLibrary.bind(this);
    this.onSelectFile = this.onSelectFile.bind(this);

    this.state = {
      image: null,
      library: false,
      editor: false
    };
  }

  toggleLibrary() {
    this.setState({
      library: !this.state.library
    });
  }

  onAddClick() {
    FilePicker.pick(
      {hide: true},
      this.onAddSuccess, null, this.onAddProgress
    );
  }

  onAddSuccess(blob) {
    this.setState({
      image: blob.url
    });

    ImageLibrary.insert(blob);
    console.log('done', blob);
  }

  onAddProgress(progress) {
    console.log(progress.progress + '%');
  }

  onSelectFile(file) {
    this.setState({
      library: false,
      image: file.url
    });
  }

  render() {
    let workImage = null;
    let library = null;
    let editor = null;

    if(this.state.image) {
      workImage = (
        <WorkImage image={this.state.image} />
      );
    }

    if(this.state.library) {
      library = (
        <div style={Style.imageLibraryContainer}>
          <Library files={this.props.imageLibrary}
            onSelectFile={this.onSelectFile} />
        </div>
      );
    }


    return (
      <div style={Style.main} onKeyDown={this.onKeyDown}>
        <Editor />

          <div style={Style.menuContainer}>
            <PanelMenu>
              <PanelButton icon='fa-plus-square-o' />
              <PanelButton icon='fa-folder-o' iconSize='2rem' />
              <PanelButton icon='fa-bell-o' iconSize='2.1rem' />
              <PanelButton icon='fa-circle-o' iconSize='2.3rem' />
            </PanelMenu>
          </div>

        {/*
        <div style={Style.toolsContainer}>
          <PanelMenu direction='column'>
            <PanelButton icon='fa-arrows' />
            <PanelButton icon='fa-arrows' />
          </PanelMenu>
        </div>
        */}
      </div>
    );
  }

}

export default Radium(Workspace);
