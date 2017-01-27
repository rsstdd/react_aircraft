import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Aircraft from './Aircraft'
import FlatButton from 'material-ui/FlatButton';
import Header from './Header';
import React from 'react';

export default class Collection extends React.Component {

  render() {
    const aircraftList = this.props.airplanes.map((item, index) => {
      return (
        <Aircraft
          aircraft={item}
          key={index}
        />
      );
    });

    console.log(aircraftList);

    return (
      <div>
        <Header />
        { aircraftList }
      </div>
    );
  }
}
