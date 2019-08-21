import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '60%',
  },
};

class HolidayDatePicker extends React.Component {
  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          className={this.props.classes.grid}
          justify='space-around'
        >
          <div id='picker1'>
            <DateTimePicker
              keyboard
              animateYearScrolling={true}
              ampm={false}
              mode='24hr'
              onError={console.log}
              shouldDisableDate={this.disableWeekends}
              margin='normal'
              label='Start Date'
              value={this.props.startDate}
              onChange={value => this.props.selectStartDate(value)}
              disablePast={true}
              minutesStep={30}
              clearable
            />
          </div>
          <div id='picker2'>
            <DateTimePicker
              keyboard
              shouldDisableDate={this.disableWeekends}
              onError={console.log}
              ampm={false}
              mode='24hr'
              margin='normal'
              label='End Date'
              value={this.props.endDate}
              onChange={value => this.props.selectEndDate(value)}
              disablePast={true}
              animateYearScrolling={true}
              minutesStep={30}
              clearable
            />
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

HolidayDatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HolidayDatePicker);
