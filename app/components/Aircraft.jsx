import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Aircraft extends React.Component {

  render() {
    <Card>
      <CardHeader
        title={this.props.name}
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src={this.props.imgUrl} />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        {this.props.description}
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
  </Card>
  }
}

// name={name}
// description={description}
// ceiling={ceiling}
// countryOfOrigin={countryOfOrigin}
// engines={engines}
// id={id}
// imgUrl={imgUrl}
// maxRange={maxRange}
// maxSpeed={maxSpeed}
// operators={operators}
// yearInService={yearInService}
