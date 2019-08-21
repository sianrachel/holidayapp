import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { clearMessage } from 'src/Store/Areas/Toast/actions';

const styles = {
  toastyNote: {
    marginTop: '50px',
    minWidth: '200px',
    maxWidth: '300px',
    opacity: '70%',
  },
};

class ToastNotification extends React.Component {
  onClick = () => {
    this.props.dispatch(clearMessage());
  };

  render() {
    const { classes, toast } = this.props;
    console.log(toast);
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={toast}
        autoHideDuration={2000}
        onClose={this.onClick}
        minWidth='200px'
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id='message-id'>{toast}</span>}
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={this.onClick}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

const mapStateToProps = state => ({
  toast: state.toast.message,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ToastNotification);
