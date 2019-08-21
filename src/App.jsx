import React, { Component } from 'react';
import Status from './Pages/Status/Status';
import Admin from './Pages/Admin/Admin';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import HolidayContainer from './Pages/Holiday/HolidayContainer';
import ToastNotification from './Pages/ToastComponents/ToastNotification';
import HomeButton from './Pages/HomePage/HomeButton';
import HomePage from './Pages/HomePage/HomePage';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkButton: {
    textDecoration: 'none',
    color: 'white',
  },
  appBar: {
    backgroundColor: '#469bf8',
    textDecoration: 'none',
    justifyContent: 'space-evenly',
  },
};

//State set with static default values for now

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='App'>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Button>
              <Typography
                variant='h6'
                color='inherit'
                className={classes.grow}
              />
              <Link className={classes.linkButton} to='/'>
                <HomeButton />
              </Link>
            </Button>
            <Button>
              <Typography
                variant='h6'
                color='inherit'
                className={classes.grow}
              />
              <Link className={classes.linkButton} to='/holiday'>
                HOLIDAY
              </Link>
            </Button>
            <Button>
              <Typography
                variant='h6'
                color='inherit'
                className={classes.grow}
              />
              <Link className={classes.linkButton} to='/status'>
                STATUS
              </Link>
            </Button>
            <Button>
              <Typography
                variant='h6'
                color='inherit'
                className={classes.grow}
              />
              <Link className={classes.linkButton} to='/admin'>
                ADMIN
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <ToastNotification />
        <Route path='/' component={HomePage} exact />
        <Route path='/holiday' component={HolidayContainer} exact />
        <Route path='/status' component={Status} exact />
        <Route path='/admin' component={Admin} exact />
      </div>
    );
  }
}

export default withStyles(styles)(App);
