import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    mouseCord = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
      }

    render() {
        return (
            <button onClick={this.mouseCord}> Button </button>
            
        );
    }
        

}