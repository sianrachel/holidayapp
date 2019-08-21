import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from 'src/Store/rootReducer';
import { User } from 'src/Types/Approvers';
import { getApprovers } from 'src/Store/Areas/Approvers';
import { Dispatch } from 'redux';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Classes } from 'jss';
import { withStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
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

interface ApproversProps {
  approvers: User[];
  loading: boolean;
  dispatch: Dispatch;
  classes: Classes;
  selectApprover: '';
}

class Approvers extends Component<ApproversProps> {
  inputLabelRef = React.createRef();

  state = {
    labelWidth: 0,
  };

  componentDidMount() {
    this.onFetchApprovers();
  }
  onFetchApprovers = () => {
    this.props.dispatch(getApprovers());
  };

  render() {
    const { loading, approvers, classes } = this.props;
    const { labelWidth } = this.state;

    return (
      <div className='buttonContainer'>
        <FormControl variant='outlined' className={classes.formControl}>
          <p className={classes.label}>Select Approver</p>
          <Select
            native
            variant='filled'
            input={
              <OutlinedInput
                name='approver'
                labelWidth={labelWidth}
                id='outlined-holiday-native-simple'
              />
            }
          >
            {!loading &&
              approvers &&
              approvers.map(approver => {
                return <option key={approver.name}>{approver.name}</option>;
              })}
          </Select>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.approvers.loading,
    approvers: state.approvers.users,
  };
};

export default compose(
  withStyles(createStyles(styles)),
  connect(mapStateToProps)
)(Approvers);
