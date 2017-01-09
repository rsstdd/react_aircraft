import { Match, Redirect, Miss } from 'react-router';
import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <main>
        <Match
          pattern="/" exactly render={
          () => (
            <Landing
              handleLoginState={this.handleLoginState}
              closeModal={this.closeModal}
              openModal={this.openModal}
              {...this.state}
            />
          )}
        />

        <Match
            pattern="/dashboard" render={
            () => (
              this.props.isLoggedIn === false ? (
                <Redirect to="/" />
              ) : (
                <Collection
                  handleLoginState={this.handleLoginState}
                  logOut={this.logOut}
                  {...this.state}
                />)
              )}
          />

        <Match
            pattern="/dashboard" render={
            () => (
              this.props.isLoggedIn === false ? (
                <Redirect to="/" />
              ) : (
                <Collection
                  handleLoginState={this.handleLoginState}
                  logOut={this.logOut}
                  {...this.state}
                />)
              )}
          />

        <Miss component={NotFound} />

      </main>
    )
  }
}
