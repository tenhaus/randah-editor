import React from 'react';
import PanelMenu from '../PanelMenu/PanelMenu';
import PanelButton from '../PanelButton/PanelButton';
import Style from './_Workspace';

class Workspace extends React.Component {

  render() {
    return (
      <div style={Style.main}>
        <div style={Style.menuContainer}>
          <PanelMenu>
            <PanelButton icon='fa-plus-square-o' />
            <PanelButton icon='fa-arrows' iconSize='2rem' />
            <PanelButton icon='fa-bell-o' iconSize='2.1rem' />
            <PanelButton icon='fa-circle-o' iconSize='2.3rem' />
          </PanelMenu>
        </div>
      </div>
    );
  }

}

export default Workspace;
