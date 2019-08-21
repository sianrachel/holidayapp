import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import HolidayStyles from './HolidayPageStyling/HolidayMainStyle';
import HolidaySelector from './HolidayComponents/HolidaySelector';
import HolidayDatePicker from './HolidayComponents/HolidayDatePicker';
import CircularIndeterminate from 'src/Pages/Loader/Loader';
import { postHoliday } from 'src/Store/Areas/Holiday/actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HolidayApprovers from './HolidayComponents/HolidayApprovers';

class Holiday extends React.Component {
  onSubmit = () => {
    this.props.dispatch(
      postHoliday(
        this.props.startDate,
        this.props.endDate,
        this.props.totalAbsence,
        this.props.absenceCategory,
        this.props.selectApprover
      )
    );
  };
  render() {
    const { classes, loading } = this.props;
    console.log(loading);
    if (loading) {
      return <CircularIndeterminate />;
    }
    return (
      <div className={classes.holidayContainer}>
        <h2 color='secondary'>Holiday Request</h2>
        <div>
          <div id='#approverContainer'>
            <HolidayApprovers
              selectApproverCategory={this.props.selectApproverCategory}
              selectApprover={this.props.selectApprover}
            />
          </div>
          <HolidaySelector
            selectAbsenceCategory={this.props.selectAbsenceCategory}
            absenceCategory={this.props.absenceCategory}
          />
        </div>
        <HolidayDatePicker
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          selectStartDate={this.props.selectStartDate}
          selectEndDate={this.props.selectEndDate}
        />
        <div />
        <div className='absenceCalculator'>
          <p>{`${this.props.totalAbsence} Hours`}</p>
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.createButton}>
            <Button variant='contained' color='primary' onClick={this.onSubmit}>
              Create Holiday
            </Button>
          </div>
          <div className={classes.cancelButton}>
            <Button
              variant='contained'
              color='secondary'
              onClick={this.props.cancelRequest}
            >
              Cancel Request
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.holiday.loading,
});

export default compose(
  withStyles(HolidayStyles),
  connect(mapStateToProps)
)(Holiday);
