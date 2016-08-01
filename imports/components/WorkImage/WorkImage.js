import React from 'react';
import Radium from 'radium';

import Style from './_WorkImage';

class WorkImage extends React.Component {

  render() {
    let image = (
      <div style={Style.workImageContainer}>
        <img style={Style.workImage} src={this.props.image} />
      </div>
    );

    return image;
  }
}

WorkImage.defaultProps = {
  image: null
};

export default Radium(WorkImage);
