import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router';
import Main from './Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userId: 0,
      user: [],
      aircraft: [],
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
        this.getAircraft();
        this.getFavorites(this.state.userId);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoggedIn: false });
      });
    axios.get('/api/airplanes')
      .then((res) => {
        console.log(res);
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
    console.log('Main');
    axios.get('/auth/logout')
    .then((res) => {
      this.setState({
        isLoggedIn: false,
        user: []
      });
    });
  }

  getAircraft() {
    axios.get('/api/airplanes')
      .then((res) => {
        this.setState({ aircraft: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
