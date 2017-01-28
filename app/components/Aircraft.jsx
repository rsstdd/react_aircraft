import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Aircraft extends React.Component {

  render() {

    return (
      <div className="container">
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
        <hr />
      </div>
    );
  }
}
