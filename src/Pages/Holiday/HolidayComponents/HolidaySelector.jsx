import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const selectorStyles = theme => ({
  root: {
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  label: {
    color: '#00276b',
  },
});

class HolidaySelector extends React.Component {
  inputLabelRef = React.createRef();
  state = { labelWidth: 0 };

  render() {
    const { classes } = this.props;
    const { labelWidth } = this.state;
    return (
      <div className={`${classes.root} holidaySelector`}>
        <FormControl variant='outlined' className={classes.formControl}>
          <p className={classes.label}>Select Absence Type</p>
          <Select
            native
            value={this.props.absenceCategory}
            onChange={this.props.selectAbsenceCategory()}
            input={
              <OutlinedInput
                name='age'
                labelWidth={labelWidth}
                id='outlined-holiday-native-simple'
              />
            }
          >
            <option value='Holiday'>Holiday</option>
            <option value='Unpaid Leave'>Unpaid Leave</option>
            <option value='Career Break'>Career Break</option>
            <option value='Illness'>Illness</option>
            <option value='Masters / Uni Work'> Masters / Uni Work</option>
            <option value='Maternity'>Maternity</option>
            <option value='Parental Leave'>Parental Leave</option>
            <option value='Non-working Day'>Non-working Day</option>
            <option value='Training'>Training</option>
            <option value='Volunteering'>Volunteering</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(selectorStyles)(HolidaySelector);
