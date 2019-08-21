import { createStyles } from '@material-ui/core';

const adminStyles = () =>
  createStyles({
    body: {
      display: 'flex',
      padding: '20px',
    },
    expansionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'column',
      alignItems: 'center',
      padding: '10px',
      height: '80vh',
      width: '95%',
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
      margin: 'auto',
    },
    expansionText: {
      display: 'flex',
      justifyContent: 'left',
      flexFlow: 'column',
      alignItems: 'left',
      width: '95%',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'left',
      flexFlow: 'column',
      alignItems: 'left',
      width: '95%',
    },

    messageInput: {
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'column',
    },
    title: {
      fontWeight: 'bold',
    },

    margin: {
      marginTop: '20px',
    },

    labels: {
      fontWeight: 'bold',
    },

    spaceRight: {
      marginRight: '3px',
    },

    handleClickOpen: {
      marginRight: '4px',
    },
    dialogActions: {
      justifyContent: 'center',
    },
    handleGap: {
      marginDown: '30px',
    },
    alignStart: {
      textAlign: 'start',
    },
  });

export default adminStyles;
