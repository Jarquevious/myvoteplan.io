// import UserForm from './components/UserForm';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';

// ReactDOM.render(<HorizontalLabelPositionBelowStepper />, document.querySelector('#root'));
import React, { Fragment } from 'react';
import { CssBaseline, withStyles } from '@material-ui/core';

import AppHeader from './components/AppHeader';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <main className={classes.main}>
      <AppHeader />
      <Route exact path="/" component={HomePage} />
      <Route path="/login/callback" component={LoginCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
