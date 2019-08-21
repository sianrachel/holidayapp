import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GET_APPROVERS, getApproversSuccess } from './actions';

function* getApprovers() {
  yield delay(800);
  yield put(
    getApproversSuccess([{ name: 'Lara' }, { name: 'Amy' }, { name: 'Eric' }])
  );
}

export function* approversWatcher() {
  yield takeLatest(GET_APPROVERS, getApprovers);
}
