import React from 'react';
import ReactDOM from 'react-dom';
import { Match, Redirect, Miss } from 'react-router';

import Favorites from './Favorites'
import Collection from './Collection'
import Landing from './Landing'

export default class Main extends React.Component {
  render() {
    return (

      <main>
        <Match
          pattern="/" exactly render={
          () => (
            <Landing
              {...this.state}
              airplanes={this.props.airplanes}
              closeModal={this.props.closeModal}
              handleClose={this.props.handleClose}
              handleLoginState={this.handleLoginState}
              handleOpen={this.props.handleOpen}
              openModal={this.props.openModal}
            />
          )}
        />

        <Match
          pattern="/favorites" render={
          () => (
            this.props.isLoggedIn === false ? (
              <Redirect to="/" />
            ) : (
              <Favorites
                {...this.state}
                handleLoginState={this.handleLoginState}
                logOut={this.logOut}
              />)
            )}
        />

        <Match
          pattern="/collection" exactly render={
          () => (
            <Collection
              airplanes={this.props.airplanes}
              handleLoginState={this.handleLoginState}
              logOut={this.logOut}
            />
          )}
        />
      </main>
    );
  }
}
