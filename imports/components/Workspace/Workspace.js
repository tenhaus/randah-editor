import React from 'react';
import PanelMenu from '../PanelMenu/PanelMenu';

import Style from './_Workspace';

class Workspace extends React.Component {

  render() {
    return (
      <div style={Style.main}>
        <div style={Style.menuContainer}>
          <PanelMenu />
        </div>
      </div>
    );
  }

}

export default Workspace;
