import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = props => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
