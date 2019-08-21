import React from 'react';
import { withStyles } from '@material-ui/core';
import adminStyles from './AdminStyle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Button } from '@material-ui/core';

const name = 'Joe Bloggs';
const type = 'Paid Holiday';
const startDate = '03.11.2019';
const endDate = '07.11.2019';
const hours = '28';

class Admin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={`${classes.heading} ${classes.labels}`}>
              Jenny 
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.alignStart}>
              <div className={classes.title}>Admin</div>
              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Person:
                </span>
                <span>{name}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Type:
                </span>
                <span>{type}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Start Date:
                </span>
                <span>{startDate}</span>
              </ul>

              <ul>
                <span
                  className={`${classes.labels} ${classes.spaceRight} ${
                    classes.handleGap
                  }`}
                >
                  End Date:
                </span>
                <span>{endDate}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Hours:
                </span>
                <span>{hours}</span>
              </ul>
              <Input
                placeholder='Reason'
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Button size='small'>Cancel</Button>
              <Button size='small' color='primary'>
                Save
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={`${classes.heading} ${classes.labels}`}>
              Arnand 
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.alignStart}>
              <div className={classes.title}>Admin</div>
              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Person:
                </span>
                <span>{name}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Type:
                </span>
                <span>{type}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Start Date:
                </span>
                <span>{startDate}</span>
              </ul>

              <ul>
                <span
                  className={`${classes.labels} ${classes.spaceRight} ${
                    classes.handleGap
                  }`}
                >
                  End Date:
                </span>
                <span>{endDate}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Hours:
                </span>
                <span>{hours}</span>
              </ul>
              <Input
                placeholder='Reason'
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Button size='small'>Cancel</Button>
              <Button size='small' color='primary'>
                Save
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={`${classes.heading} ${classes.labels}`}>
              Stephanie
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.alignStart}>
              <div className={classes.title}>Admin</div>
              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Person:
                </span>
                <span>{name}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Type:
                </span>
                <span>{type}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Start Date:
                </span>
                <span>{startDate}</span>
              </ul>

              <ul>
                <span
                  className={`${classes.labels} ${classes.spaceRight} ${
                    classes.handleGap
                  }`}
                >
                  End Date:
                </span>
                <span>{endDate}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Hours:
                </span>
                <span>{hours}</span>
              </ul>
              <Input
                placeholder='Reason'
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Button size='small'>Cancel</Button>
              <Button size='small' color='primary'>
                Save
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={`${classes.heading} ${classes.labels}`}>
              Amy
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.alignStart}>
              <div className={classes.title}>Admin</div>
              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Person:
                </span>
                <span>{name}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Type:
                </span>
                <span>{type}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Start Date:
                </span>
                <span>{startDate}</span>
              </ul>

              <ul>
                <span
                  className={`${classes.labels} ${classes.spaceRight} ${
                    classes.handleGap
                  }`}
                >
                  End Date:
                </span>
                <span>{endDate}</span>
              </ul>

              <ul>
                <span className={`${classes.labels} ${classes.spaceRight}`}>
                  Hours:
                </span>
                <span>{hours}</span>
              </ul>
              <Input
                placeholder='Reason'
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
              <Button size='small'>Cancel</Button>
              <Button size='small' color='primary'>
                Save
              </Button>
              <DateRangePicker />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(adminStyles)(Admin);
