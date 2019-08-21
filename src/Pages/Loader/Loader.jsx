import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
    padding: '20px',
    height: '50%',
    width: '50%',
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.spinner}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
