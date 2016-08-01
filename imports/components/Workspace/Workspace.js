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
            <PanelButton />
            <PanelButton />
            <PanelButton />
            <PanelButton />
          </PanelMenu>
        </div>
      </div>
    );
  }

}

export default Workspace;
