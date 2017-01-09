import React from 'react';
import ReactDOM from 'react-dom';
import { Match, Redirect, Miss } from 'react-router';

import Favorites from './Favorites'
import Collection from './Collection'
import Landing from './Landing'

export default class Main extends React.Component {
  render() {
    return (

  //     <div>
  //       <Match
  //         pattern="/" exactly render={
  //         () => (
  //           <Landing
  //             handleLoginState={this.handleLoginState}
  //             closeModal={this.closeModal}
  //             openModal={this.openModal}
  //             {...this.state}
  //           />
  //         )}
  //       />
  //
  //       <Match
  //         pattern="/favorites" render={
  //         () => (
  //           this.props.isLoggedIn === false ? (
  //             <Redirect to="/" />
  //           ) : (
  //             <Favorites
  //               handleLoginState={this.handleLoginState}
  //               logOut={this.logOut}
  //               {...this.state}
  //             />)
  //           )}
  //       />

    {/* <Collection
      handleLoginState={this.handleLoginState}
      logOut={this.logOut}
      {...this.state}
    /> */}

      // </div>
    );
  }
}
