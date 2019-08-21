import { TOAST_SUCCESS } from './actions';
import { RESET_TOAST } from './actions';
import { Reducer } from 'redux';
import { ToastState } from './reducers';

export interface ToastState {
  message: string;
}

const initialState = {
  message: '',
};

const toastReducer: Reducer<ToastState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case TOAST_SUCCESS:
      return {
        ...state,
        message: action.message,
      };
    case RESET_TOAST:
      return initialState;
    default:
      return state;
  }
};

export default toastReducer;
