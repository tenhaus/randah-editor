import React from 'react';
import Radium from 'radium';
import Dropzone from 'react-dropzone';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelButton from '../PanelButton/PanelButton';
import Style from './_Workspace';

class Workspace extends React.Component {

  onAddClick() {
    console.log('Add');
  }

  onAddFile(files) {
    let file = files[0];
  }

  render() {
    return (
      <div style={Style.main}>
        <div style={Style.content}>
          <div style={Style.workImageContainer}>
            <img style={Style.workImage} src='/img/bg3.jpg' />
          </div>
        </div>

        <div style={Style.menuContainer}>
          <PanelMenu>
            <Dropzone style={Style.dropzone}
              onDrop={this.onAddFile}
              multiple={false}>
              <PanelButton icon='fa-plus-square-o' />
            </Dropzone>
            <PanelButton icon='fa-arrows' iconSize='2rem' />
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
