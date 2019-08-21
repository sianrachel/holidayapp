import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cellContainer: {
    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer',
    },
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'column',
    alignItems: 'center',
    text: '80px',
    padding: '20px',
    height: '50vh',
    width: '75vw',
    left: 10,
    right: 10,
    top: 0,
    bottom: 0,
    margin: 'auto',
    border: 'border-box',
    bold: '20px',
  },
};

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homePageContainer}>
        <h2 color='gray'>Welcome home!</h2>
        <br />
        <div className={classes.cellContainer}>
          <TableRow hover={true}>Hover Over Cell</TableRow>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
