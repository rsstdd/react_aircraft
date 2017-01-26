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
              closeModal={this.props.closeModal}
              openModal={this.props.openModal}
              handleLoginState={this.handleLoginState}
              handleClose={this.props.handleClose}
              handleOpen={this.props.handleOpen}
              {...this.state}
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
                handleLoginState={this.handleLoginState}
                logOut={this.logOut}
                {...this.state}
              />)
            )}
        />

        <Collection
          handleLoginState={this.handleLoginState}
          logOut={this.logOut}
          {...this.state}
        />

      </main>
    );
  }
}
