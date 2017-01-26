import App from './components/App';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { blueGrey400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: blueGrey400
  },

  appBar: {
    height: 50,
    color: blueGrey400
  }
});

ReactDOM.render(

  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div>
      <App />,
    </div>
  </MuiThemeProvider>,

  document.getElementById('app')
);
