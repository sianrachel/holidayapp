import { createStyles } from '@material-ui/core';

const HolidayStyles = () =>
  createStyles({
    body: {
      display: 'flex',
      padding: '20px',
    },
    holidayContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexFlow: 'column',
      alignItems: 'center',
      padding: '20px',
      height: '80vh',
      width: '75vw',
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
      margin: 'auto',
    },
    buttonContainer: {
      display: 'flex',
      padding: '10px',
    },
    createButton: {
      padding: '10px',
      color: '',
    },
    cancelButton: {
      padding: '10px',
      color: '#0091da',
    },

    absence: {
      width: '100px',
    },
    type: {
      width: '100px',
    },
  });

export default HolidayStyles;
