import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Main extends React.Component {

  render() {
    const aircraftList = this.props.aircraft.map((aircraft, index) => {
      return <Aircraft
        name={name}
        description={description}
        ceiling={ceiling}
        countryOfOrigin={countryOfOrigin}
        engines={engines}
        id={id}
        imgUrl={imgUrl}
        maxRange={maxRange}
        maxSpeed={maxSpeed}
        operators={operators}
        yearInService={yearInService}
        key={index}
      />
    });

    return (
      <div>
        <Header />
        { aircraftList }
      </div>
    );
  }
}
