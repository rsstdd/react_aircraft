import { BrowserRouter } from 'react-router';
import axios from 'axios';
import Main from './Main';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      open: false,
      userId: '',
      user: [],
      airplanes: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios.get('/api/me') // isLoggedIn then user info
      .then((res) => {
        console.log(res.data);
        this.setState({
          isLoggedIn: true,
          userId: res.data.authId,
          user: res.data
        });
      })
      .then(() => {
        this.getFavorites(this.state.userId);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoggedIn: false });
      });

    axios.get('/api/airplanes')
      .then((res) => {
        this.setState({ airplanes: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  authenticateUser(email, password) {
    axios.post('api/me', { email, password })
    .then((res) => {
      this.setState({
        isLoggedIn: true,
        userId: res.data.id,
        user: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  logOut() {
    axios.get('/auth/logout')
    .then((res) => {
      this.setState({
        isLoggedIn: false,
        user: []
      });
    });
  }

  getFavorites() {
    axios.get('/api/favorites')
      .then((res) => {
        this.setState({ favorites: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    // console.log('App: UserId --> ', this.state.userId);
    console.log('App: favs --> ', this.state.favorites);
    return (
      <BrowserRouter>
        <div>
          <Main
            authenticateUser={this.authenticateUser}
            getFavorites={this.getFavorites}
            logOut={this.logOut}
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
            {...this.state}
          />
        </div>
      </BrowserRouter>
    );
  }
}
