import React, { Component } from 'react';

class Image extends Component {

  render() {
    const wrap = {
      height: window.innerHeight * 10
    };
    return (
        <img src={this.props.image}  />
    )
  }
}

export default Image;
