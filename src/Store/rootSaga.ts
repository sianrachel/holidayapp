import { holidayWatcher } from './Areas/Holiday/sagas';
import { fork } from 'redux-saga/effects';
import { approversWatcher } from './Areas/Approvers/sagas';

export default function* rootSaga() {
  yield fork(approversWatcher);
  yield fork(holidayWatcher);
}
