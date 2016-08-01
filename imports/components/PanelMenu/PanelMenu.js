import React from 'react';
import Style from './_PanelMenu'

class PanelMenu extends React.Component {

  render() {
    return (
      <div style={Style.main}>
        {this.props.children}
      </div>
    );
  }

}

export default PanelMenu;
