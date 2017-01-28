import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router';
import Main from './Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      open: false,
      userId: 0,
      user: [],
      airplanes: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios.get('/api/me') // isLoggedIn then user info
      .then((res) => {
        this.setState({
          isLoggedIn: true,
          userId: res.data.id,
          user: res.data
        });
      })
      .then(() => {
        console.log(this.state.userId);
        this.getFavorites(this.state. userId);
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
      this.getCookie();
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
        // console.log(res.data);
        this.setState({ favorites: res.data });
      })
      .catch((err) => {
        console.err(err);
      });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
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
