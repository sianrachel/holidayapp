import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  POST_HOLIDAY,
  postHolidaySuccess,
  POST_HOLIDAY_SUCCESS,
} from './actions';
import { successSubmit } from '../Toast/actions';
import { addHoliday } from '../Status/actions';

function* postHolidaySaga(action) {
  console.log(action);
  yield delay(1500);
  yield put(postHolidaySuccess());
  console.log(action);
  yield put(
    addHoliday(
      'Jenny',
      action.payload.absenceCategory,
      action.payload.endDate,
      action.payload.startDate,
      action.payload.totalAbsence,
      action.payload.selectApprover
    )
  );
}

function* postHolidaySuccessSaga(action) {
  yield put(successSubmit());
}

export function* holidayWatcher() {
  yield takeLatest(POST_HOLIDAY, postHolidaySaga);
  yield takeLatest(POST_HOLIDAY_SUCCESS, postHolidaySuccessSaga);
}
