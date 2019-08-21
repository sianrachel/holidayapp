import { POST_HOLIDAY, POST_HOLIDAY_SUCCESS } from './actions';
import { Reducer } from 'redux';

export interface HolidaysState {
  loading: boolean;
}

const initialState = {
  loading: false,
};
const holidaysReducer: Reducer<HolidaysState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case POST_HOLIDAY:
      return {
        ...state,
        loading: true,
      };
    case POST_HOLIDAY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default holidaysReducer;
