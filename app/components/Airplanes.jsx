import Aircraft from './Aircraft';
import React from 'react';

export default class Airplanes extends React.Component {

  render() {
    const aircraftList = this.props.airplanes.map((item, index) => {
      return (
        <Aircraft
          aircraft={item}
          handleAddToFav={this.props.handleAddToFav}
          key={index}
        />
      );
    });

    return (
      <div>
        { aircraftList }
      </div>
    );
  }
}
