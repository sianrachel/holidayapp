import { combineReducers, Reducer } from 'redux';
import approversReducer, { ApproversState } from './Areas/Approvers/reducer';
import holidaysReducer, { HolidaysState } from './Areas/Holiday/reducer';
import toastReducer, { ToastState } from './Areas/Toast/reducers';
import statusReducer, { StatusState } from './Areas/Status/reducers';
export interface RootState {
  approvers: ApproversState;
  holiday: HolidaysState;
  toast: ToastState;
  status: StatusState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  approvers: approversReducer,
  holiday: holidaysReducer,
  toast: toastReducer,
  status: statusReducer,
});

export default rootReducer;
