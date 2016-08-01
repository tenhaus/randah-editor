import React from 'react';
import Radium from 'radium';
import Style from './_PanelMenu'

class PanelMenu extends React.Component {

  render() {
    let style = [Style.main];
    if(this.props.direction === 'column') {
      style = [Style.main, Style.column];
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }

}

PanelMenu.defaultProps = {
  direction: 'row'
};

export default Radium(PanelMenu);
