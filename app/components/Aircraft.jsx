import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Aircraft extends React.Component {

  render() {
    return (
      <Card>
        <CardMedia>
          <img src={this.props.aircraft.imgUrl} />
        </CardMedia>
        <CardTitle
          subtitle={this.props.aircraft.countryOfOrigin}
          title={this.props.aircraft.name}
        />
        <CardText>
          {this.props.aircraft.description}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}
