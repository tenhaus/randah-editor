import React from 'react';
import Radium from 'radium';
import Style from './_PanelButton';

class PanelButton extends React.Component {

  render() {
    let className = 'fa ' + this.props.icon;
    let iconSize = this.props.iconSize;
    let iconStyle = [
      Style.icon,
      {fontSize: iconSize}
    ];

    return (
      <div style={Style.main} onClick={this.props.onClick}>
        <i className={className}
          aria-hidden="true"
          style={iconStyle}>
        </i>
      </div>
    );
  }

}

PanelButton.defaultProps = {
  icon: 'fa-snapchat-ghost',
  iconSize: '2.7rem'
};

export default Radium(PanelButton);
