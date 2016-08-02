import React from 'react';
import Radium from 'radium';
import FilePicker from 'filepicker-js';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelButton from '../PanelButton/PanelButton';
import WorkImage from '../WorkImage/WorkImage';
import { ImageLibrary } from '../../api/library.js';

import Style from './_Workspace';

class Workspace extends React.Component {

  constructor() {
    super();
    this.onAddClick = this.onAddClick.bind(this);
    this.onAddSuccess = this.onAddSuccess.bind(this);

    this.state = {
      image: null
    };
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

  render() {
    let workImage = null;

    if(this.state.image) {
      workImage = (
        <WorkImage image={this.state.image} />
      );
    }


    return (
      <div style={Style.main}>
        <div style={Style.content}>
          {workImage}
        </div>

        <div style={Style.menuContainer}>
          <PanelMenu>
            <PanelButton icon='fa-plus-square-o' onClick={this.onAddClick} />
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
