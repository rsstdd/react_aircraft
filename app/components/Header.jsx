import { AppBar, FlatButton } from 'material-ui';
import React from 'react';
import ReactDOM from 'react-dom';

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   }
// };

const Header = () => (
  <div id="header">
    <AppBar
      showMenuIconButton={false}
      title="react_aircraft"
    >
    iconElementRight={<FlatButton
      label="Log Out"
    />
  }

    </AppBar>
  </div>
);

export default Header;
