import React from 'react';
import Holiday from './Holiday';
import Moment from 'moment-business-days';
import Holidays from 'date-holidays';

class HolidayContainer extends React.Component {
  state = {
    startDate: new Date().setHours(9, 0),
    endDate: new Date().setHours(17, 0),
    dayLength: 'Full Day',
    totalAbsence: 0,
    selectApprover: 'Eric',
  };

  //Functions to handle the start and end date selection

  selectStartDate = start => {
    start < -this.state.startDate
      ? console.error('Start date must be in the future!')
      : this.setState({
          startDate: start,
        });
    this.calculateDifference();
  };

  selectEndDate = end => {
    end < this.state.endDate
      ? console.error('End date must come after start date!')
      : this.setState(
          {
            endDate: end,
          },
          () => this.calculateDifference()
        );
  };

  // A function to calculate the amount of absence between two selected dates
  // Business days are accounted for, weekends and dates in the past are disabled
  // Only Business days that are not a local holiday are accounted for in the totalAbsence

  calculateDifference = () => {
    let start = new Date(this.state.startDate);
    let end = new Date(this.state.endDate);
    let counter = 0;
    let hd = new Holidays('gb');

    while (start < end) {
      if (Moment(start).isBusinessDay() && !hd.isHoliday(start)) {
        counter++;
      }
      start.setDate(start.getDate() + 1);
    }
    counter *= 7;
    this.setState({ totalAbsence: counter });
  };

  //Identifies if a date in a range selected is a local holiday (gb only for now)
  // If a date is a local hliday, it is omitted from the range selcted and is not reflected in totalAbsence

  updateLocale = () => {
    const hd = new Holidays('gb').getHolidays('YYYY').map(x => Moment(x.date));
    Moment.updateLocale('gb', {
      holidays: hd,
    });
  };

  //State submission object that parses JSON and spreads from state to store in browser using localStorage (pass to API later in Azure)
  //Should handle multiple holiday request submissions to be stored locally as its not tied to session

  submitRequest = () => {
    const holidayRequest = {
      ...this.state,
      requestStatus: 'Holiday Request Pending',
    };
    let requestsArray = JSON.parse(localStorage.getItem('holidays'));
    requestsArray === null
      ? (requestsArray = [holidayRequest])
      : requestsArray.push(holidayRequest);
    console.log(requestsArray);
    localStorage.setItem('holidays', JSON.stringify(requestsArray));
  };

  //Cancellation function for the holiday page cancel button to refresh form to default state

  cancelRequest = () => {
    console.log('This request is cancelled!');
    this.setState({
      startDate: new Date().setHours(9, 0),
      endDate: new Date().setHours(17, 0),
      dayLength: 'Full Day',
      totalAbsence: 0,
      absenceCategory: 'Holiday',
      selectApprover: 'Jenny',
    });
  };

  //Selects the type of absence you want to choose

  selectAbsenceCategory = holiday => event => {
    this.setState({
      absenceCategory: event.target.value,
    });
  };

  //Selects the manager that will approve your req

  selectApproverCategory = approver => event => {
    console.log(`You have selected ${approver.event}!`);
    this.setState({
      selectApprover: event.target.value,
    });
  };

  //Renders the holiday component from Holiday.jsx and handles props and state
  render() {
    return (
      <Holiday
        selectStartDate={this.selectStartDate}
        selectEndDate={this.selectEndDate}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        absenceCategory={this.state.absenceCategory}
        calculateDifference={this.calculateDifference}
        totalAbsence={this.state.totalAbsence}
        submitRequest={this.submitRequest}
        cancelRequest={this.cancelRequest}
        selectAbsenceCategory={this.selectAbsenceCategory}
        selectApproverCategory={this.selectApproverCategory}
        selectApprover={this.selectApprover}
      />
    );
  }
}

export default HolidayContainer;
